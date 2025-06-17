// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/sendEmail';
import { LRUCache } from 'lru-cache';



const rateLimiter = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60, // 1 minute
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    if (rateLimiter.has(ip)) {
      return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard.' }, { status: 429 });
    }
    rateLimiter.set(ip, Date.now());

    const body = await req.json();
    const { name, email, number, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    await sendEmail({ name, email, number, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email :', error);
    return NextResponse.json({ error: 'Erreur interne serveur.' }, { status: 500 });
  }
}

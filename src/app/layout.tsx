import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "XY Web Services - Création de sites modernes & accessibles",
  description: "Agence web spécialisée en design responsive, SEO et développement React/Next.js. Basée à Paris, 17e.",
  openGraph: {
    title: "XY Web Services",
    description: "Création de sites web modernes, responsive et optimisés SEO.",
    url: "https://xyweb.services",
    siteName: "XY Web",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

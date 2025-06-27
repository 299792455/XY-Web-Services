"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      number: (form.elements.namedItem("number") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value, // honeypot
    };

    if (formData.website) {
      // Champ spam détecté
      toast.error("Échec : tentative de spam détectée.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(
          <>
            Message envoyé avec succès !<br />
            Nous vous recontacterons bientôt.
          </>
        );
        form.reset();
      } else if (res.status === 429) {
        toast.error("Trop de requêtes. Veuillez patienter avant de réessayer.");
      } else {
        toast.error("Erreur lors de l'envoi du message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erreur inattendue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 min-h-[400px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto leading-snug bg-white bg-clip-text text-transparent">
          Contact
        </h2>
        <span className="block w-12 h-2 mt-4 mx-auto bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></span>
        <p className="text-center mt-4 mb-16">
          Une question, un projet ou simple curiosité... n’hésitez pas à nous contacter
        </p>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
    type="text"
    placeholder="Nom"
    name="name"
    required
    className="w-full px-2 py-3 bg-transparent border-b border-white/60 text-white placeholder-white/40 focus:outline-none focus:border-white transition"
  />
  <input
    type="email"
    placeholder="Email"
    name="email"
    required
    className="w-full px-2 py-3 bg-transparent border-b border-white/60 text-white placeholder-white/40 focus:outline-none focus:border-white transition"
  />
  <input
    type="number"
    placeholder="Téléphone"
    name="number"
    className="w-full px-2 py-3 bg-transparent border-b border-white/60 text-white placeholder-white/40 focus:outline-none focus:border-white transition"
  />
  <textarea
    placeholder="Votre message"
    name="message"
    required
    className="w-full px-2 py-3 h-40 bg-transparent border-b border-white/60 text-white placeholder-white/40 focus:outline-none focus:border-white transition resize-none"
  ></textarea>

  {/* Honey*/}
  <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
    className="hidden"
  />
          <button
            type="submit"
            disabled={loading}
            className="w-fit px-8 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 text-white rounded hover:opacity-80 cursor-pointer"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | XY Web Services",
  description: "Informations légales de l’agence XY Web Services : éditeur, hébergement, données personnelles et propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
  <div className="w-full max-w-3xl space-y-10">
        <header>
          <h1 className="text-4xl font-bold mb-2">Mentions légales</h1>
          <p className="text-gray-400 text-sm">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-1">Éditeur du site</h2>
          <p className="text-gray-400 leading-relaxed">
            Ce site est édité par <strong>XY Web Services</strong>, agence web spécialisée dans les solutions numériques sur-mesure.
            <br />
            Siège social : 179 Boulevard Pereire, 75017 Paris, France
            <br />
            SIRET : 944 871 649 00017
            <br />
            RCS Paris : 944 871 649
            <br />
            Responsable de la publication : Christophe Pires
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Hébergement</h2>
          <p className="text-gray-400 leading-relaxed">
            Le site est hébergé par : <br />
            <strong>Hostinger International Ltd.</strong><br />
            61 Lordou Vironos Street, Larnaca 6023, Chypre
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Propriété intellectuelle</h2>
          <p className="text-gray-400 leading-relaxed">
            Tous les contenus présents sur le site (textes, images, vidéos, graphismes, logo, code, etc.) sont protégés par le droit d’auteur. Ils sont la propriété exclusive de XY Web Services ou de leurs auteurs respectifs.
            <br />
            Toute reproduction, représentation ou diffusion, même partielle, sans autorisation écrite, est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Données personnelles</h2>
          <p className="text-gray-400 leading-relaxed">
            Les informations personnelles collectées via le formulaire de contact sont strictement confidentielles. 
            XY Web Services s’engage à ne jamais les divulguer à des tiers.
            <br />
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification ou de suppression de vos données personnelles.
            <br />
            Pour exercer ces droits, veuillez écrire à : <a href="mailto:contact@xywebservices.fr" className="underline text-cyan-400">contact@xyweb.services</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Utilisation des cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            Le site XY Web Services utilise des cookies à des fins de mesure d’audience et d’amélioration de l’expérience utilisateur. 
            Vous pouvez refuser leur enregistrement en configurant votre navigateur.
          </p>
        </section>

        <footer>
          <p className="text-sm text-gray-500 italic">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </footer>
      </div>
    </main>
  );
}

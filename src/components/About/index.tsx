export default function About() {
  return (
    <section id="about" className="py-28 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4 relative inline-block text-white">
            Un collectif avant tout 
            <span className="block w-12 h-2 mt-4 mx-auto bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400"></span>
          </h2>
          <p>
            Nous développons des expériences numériques utiles, élégantes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Un collectif digital au service de vos ambitions.
            </h3>
            <p className="mb-4">
              XY Web Services est née de la volonté de créer des expériences numériques uniques, performantes et humaines. 
              Nous réunissons développeurs et passionnés pour transformer vos idées en produits concrets et durables.
            </p>
            <p className="mb-4">
              Nous croyons que la technologie n’est pas une fin en soi, mais un moyen de créer des solutions utiles, élégantes et évolutives.
              Chaque projet est une collaboration, chaque client un partenaire.
            </p>
            <p>
              Du conseil stratégique à la mise en production, nous vous accompagnons à chaque étape avec une exigence constante de qualité, de transparence et d’innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold mb-2">🤝 Esprit collaboratif</h4>
              <p>
                Nous co-construisons chaque projet avec nos clients, dans un esprit d’écoute et de confiance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">⚡ Réactivité</h4>
              <p>
                Petite structure, grandes idées : nous avançons vite, sans sacrifier la qualité.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">🧠 Expertise</h4>
              <p>
                +10 ans d’expérience en développement web, UX, DevOps et stratégie digitale.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">🌱 Approche durable</h4>
              <p>
                Nous privilégions des solutions sobres, scalables, et maintenables dans le temps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

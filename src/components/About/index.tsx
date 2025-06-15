export default function About() {
  return (
    <section id="about" className="py-28 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto leading-snug bg-white bg-clip-text text-transparent">
            Un collectif avant tout 
            <span className="block w-12 h-2 mt-4 mx-auto bg-gradient-to-r from-indigo-900/90 to-purple-900/90 mb-4"></span>
          </h2>
          <p className='text-center  mt-4 mb-16'>
            Nous développons des expériences numériques utiles, élégantes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-justify">
          <div>
            <h3 className=" text-white mb-4 text-2xl xl:text-2xl">
              Un collectif digital au service de vos ambitions.
            </h3>
            <p className="text-gray-400 mb-4">
              XY Web Services est née de la volonté de créer des expériences numériques uniques, performantes et humaines. 
              Nous réunissons développeurs et passionnés pour transformer vos idées en produits concrets et durables.
            </p>
            <p className="text-gray-400 mb-4">
              Nous croyons que la technologie n’est pas une fin en soi, mais un moyen de créer des solutions utiles, élégantes et évolutives.
              Chaque projet est une collaboration, chaque client un partenaire.
            </p>
            <p className='text-gray-400'>
              Du conseil stratégique à la mise en production, nous vous accompagnons à chaque étape avec une exigence constante de qualité, de transparence et d’innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="capitalize text-white mb-4 text-2xl xl:text-2xl">🤝 Esprit collaboratif</h3>
              <p className='text-gray-400'>
                Nous co-construisons chaque projet avec nos clients, dans un esprit d’écoute et de confiance.
              </p>
            </div>
            <div>
              <h3 className="capitalize text-white mb-4 text-2xl xl:text-2xl">⚡ Réactivité</h3>
              <p className='text-gray-400'>
                Petite structure, grandes idées : nous avançons vite, sans sacrifier la qualité.
              </p>
            </div>
            <div>
              <h3 className="capitalize text-white mb-4 text-2xl xl:text-2xl">🧠 Expertise</h3>
              <p className='text-gray-400'>
                10 ans d’expérience en développement web, UX, DevOps et stratégie digitale.
              </p>
            </div>
            <div>
              <h3 className="capitalize text-white mb-4 text-2xl xl:text-2xl">🌱 Approche durable</h3>
              <p className='text-gray-400'>
                Nous privilégions des solutions sobres, scalables, et maintenables dans le temps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/OfferSection.jsx
"use client";
import React from 'react';

export default function OfferSection() {
  return (
    <>
      <section className=" min-h-screen text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          XY Web Services
        </span>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent ">
          Des Services sur-mesure construis pour vous.
        </h1>

        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto ">
          <div className="card  p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Applications <br /> Web
              </h2>
              <p className="text-gray-400">
                Nous développons des applications web sur-mesure, en concevant la logique serveur et la couche métier pour répondre à vos besoins spécifiques tout en garantissant sécurité, performance et évolutivité.
              </p>
            </div>
            <div className="icon"></div>
          </div>

          <div className="card  p-10 relative">
            <div className="circle"></div>
            <div className="text-right relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Interfaces <br /> Web
              </h2>
              <p className="text-gray-400">
                Nous créons des interfaces web élégantes et intuitives, optimisées pour tous les écrans, afin d’offrir à vos utilisateurs une expérience fluide, agréable et parfaitement adaptée à leur navigation.


              </p>
            </div>
          </div>

          <div className="card  p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                API & <br />Intégration
              </h2>
              <p className="text-gray-400">
                Nous mettons en place des API robustes et sécurisées pour connecter votre site à vos services internes ou tiers (paiement, CRM, géolocalisation, etc.), et assurer une circulation fluide des données dans votre écosystème digital.
              </p>
            </div>
          </div>

          <div className="card  p-10 relative">
            <div className="circle"></div>
            <div className="text-right relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                DevOps &   
                <br /> Maintenance
              </h2>
              <p className="text-gray-400">
                Nous prenons en charge l’hébergement, la surveillance et l’évolution de vos projets grâce à des pratiques DevOps éprouvées, vous assurant haute disponibilité, mises à jour régulières et support réactif.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap");

        h2 {
          font-family: "Playfair Display", serif;
          font-optical-sizing: auto;
          font-weight: 400;
          font-style: normal;
        }

        .card {
          position: relative;
        }
        .card::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          transition: 0.6s;
          z-index: 0;
          background: linear-gradient(to right,
    #312e81E5,
    #4c1d95E5);
        }
        .card:hover {
          box-shadow: 0.063rem 0.063rem 1.25rem 0.375rem rgb(0 0 0 / 53%);
        }
        .card:nth-child(1)::before {
          bottom: 0;
          right: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
        }
        .card:nth-child(2)::before {
          bottom: 0;
          left: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
        }
        .card:nth-child(3)::before {
          top: 0;
          right: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
        }
        .card:nth-child(4)::before {
          top: 0;
          left: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
        }
        .card p {
          transition: 0.8s;
        }

        .card:hover::before {
          clip-path: circle(110vw at 100% 100%);
        }
        .card:hover p {
          color: #fff;
        }

       .card .circle {
  /* Filtre noir & blanc par défaut */
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

/* Au hover sur la carte, l’image redevient en couleur */
.card:hover .circle {
  filter: none;
}

        @media screen and (min-width: 62.5rem) {
          .circle {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 0;
          }
        }

        .card:nth-child(1) .circle {
          background: url("https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            no-repeat 50% 50% / cover;
          bottom: 0;
          right: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
        }

        .card:nth-child(2) .circle {
          background: url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            no-repeat 50% 50% / cover;
          bottom: 0;
          left: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
        }

        .card:nth-child(3) .circle {
          background: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            no-repeat 50% 50% / cover;
          top: 0;
          right: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
        }

        .card:nth-child(4) .circle {
          background: url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            no-repeat 50% 50% / cover;
          top: 0;
          left: 0;
          clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
        }
      `}</style>
    </>
  );
}

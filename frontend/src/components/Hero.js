import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <img
              src="/assets/ChatGPT Image 7 de out. de 2025, 23_30_26.png"
              alt="Logo Karla Rodrigues Yoga"
              className="mx-auto h-16 w-16 rounded-xl"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Encontre seu equilíbrio interior
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubra a paz e harmonia através da prática do yoga. Transforme corpo, mente e espírito com nossas aulas especializadas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/register" className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
              Comece sua jornada
            </Link>
            <a href="#sobre" className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600">
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

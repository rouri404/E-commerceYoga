import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-gradient-to-br from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gray-600">Sobre nossa instrutora</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Karla Rodrigues</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Praticante de yoga há 20 anos. Facilitadora de Hatha Yoga, formada Hatha Yoga pelo IEPY, em parceria com o Instituto Kaivalyadhama (Índia).
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Também facilitadora de Yoga Restaurativo, Yoga Acessível para Trauma, Hatha Yoga sob a visão da Ayurveda, Yoga para Crianças e para Gestantes.
              </p>
              <blockquote className="mt-8 border-l-2 border-emerald-300 pl-6 text-base leading-7 text-gray-700 bg-emerald-50 rounded-r-2xl p-4 shadow-sm">
                "Em suas aulas e atendimentos aplica seus conhecimentos com um olhar terapêutico. Alunos são convidados a experienciar equilíbrio mental por meio da experiência física, da observação consciente do corpo e da respiração."
              </blockquote>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute left-1 top-1 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                    </svg>
                    Hatha Yoga
                  </dt>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute left-1 top-1 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                    </svg>
                    Yoga Restaurativo
                  </dt>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute left-1 top-1 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                    </svg>
                    Massagem Ayurvédica
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/karla.jpeg"
                  alt="Instrutora de Yoga"
                  className="w-[32rem] max-w-none rounded-2xl shadow-xl ring-1 ring-gray-400/10 sm:w-[36rem]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-4 py-2 shadow-xl ring-1 ring-gray-900/10">
                <div className="flex items-center gap-x-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

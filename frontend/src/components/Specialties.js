import React from 'react';

const Specialties = () => {
  const specialties = [
    {
      title: 'Hatha Yoga',
      image: '/assets/especialidade1.jpg',
      benefits: [
        'Melhora força, flexibilidade e postura.',
        'Aumenta mobilidade e consciência corporal.',
        'Reduz estresse e ansiedade; melhora o foco.',
        'Qualifica a respiração e o sono.',
        'Alivia tensões e dores do dia a dia.'
      ]
    },
    {
      title: 'Reiki e Karuna',
      image: '/assets/especialidaed2.jpg',
      benefits: [
        'Induz relaxamento profundo e bem-estar.',
        'Reduz ansiedade e tensão emocional.',
        'Favorece sono mais reparador.',
        'Equilibra a energia e recupera a disposição.',
        'Desenvolve autocompaixão e libera padrões emocionais.'
      ]
    },
    {
      title: 'Yoga Restaurativo',
      image: '/assets/especialidade3.jpg',
      benefits: [
        'Acalma o sistema nervoso; reduz estresse e ansiedade.',
        'Promove descanso profundo e melhora do sono.',
        'Suaviza dores crônicas e fadiga.',
        'Aumenta a consciência da respiração e a presença.',
        'Excelente para recuperação física e mental.'
      ]
    },
    {
      title: 'Yoga Massagem Ayurvédica',
      image: '/assets/especilidade5.jpg',
      benefits: [
        'Desfaz tensões musculares; melhora a circulação.',
        'Aumenta amplitude de movimento e flexibilidade.',
        'Melhora postura e consciência corporal.',
        'Alivia dores e cansaço.',
        'Sensação de leveza e energia.'
      ]
    }
  ];

  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">Nossas especialidades</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aulas especializadas</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubra nossas modalidades de yoga e terapias, cada uma projetada para atender necessidades específicas e promover bem-estar integral.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <img src={specialty.image} alt={specialty.title} className="h-10 w-10 rounded-xl object-cover" />
                  {specialty.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <ul className="flex flex-auto flex-col gap-y-4">
                    {specialty.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-x-3">
                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Helena Maia',
      text: '"A Karla é uma professora que só de chegar perto dela a gente já fica bem, ela toda inspira paz. Suas aulas são maravilhosas, meu corpo ganhou muita flexibilidade depois que comecei a fazer yoga com ela. Namastê."',
      image: '/assets/maria helena.jpg'
    },
    {
      name: 'Tamires Sevila',
      text: '"Espaço maravilhoso!!!! Só de pisar na entrada do espaço já consegue sentir uma sensação maravilhosa de relaxamento e calmaria para corpo e a mente, sem contar com a excelência da profissional Karla Rodrigues que faz muito bem o seu trabalho. Maravilha, parabéns!!!!"',
      image: '/assets/tamires.png'
    },
    {
      name: 'Valquíria Zago',
      text: '"Cliente da Yoga Massagem há mais de um ano! Ajuda a renovar as energias e recuperar o corpo do stress diário. Super recomendo!"',
      image: '/assets/valeria.png'
    },
    {
      name: 'Flavia Marcon',
      text: '"Após algumas pesquisas o Estúdio da Karla foi muito bem recomendado. Ela é super consciente e respeita os limites de cada aluna. Também abre as portas do seu espaço para palestras e vivências bem legais de outros profissionais. Adoro seu estúdio e indico sempre."',
      image: '/assets/flavia marcon.jpg'
    }
  ];

  const scrollerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const dots = dotsRef.current;
    if (!scroller || !dots.length) return;

    const cards = Array.from(scroller.children);

    const setActiveDot = (idx) => {
      dots.forEach((d, i) => {
        d.className = 'h-3 w-3 rounded-full transition ' + (i === idx ? 'bg-purple-500' : 'bg-gray-300');
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = cards.indexOf(e.target);
            setActiveDot(idx);
          }
        });
      },
      { root: scroller, threshold: 0.6 }
    );
    cards.forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Depoimentos</h2>
          <p className="text-gray-600">Avaliação 5 estrelas no Google Meu Negócio</p>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex-none w-full sm:w-80 snap-start rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-emerald-100 mb-4">
                  <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="h-full w-full object-cover" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-emerald-900 text-center">{testimonial.name}</h4>
                <p className="text-gray-600 text-center leading-relaxed">{testimonial.text}</p>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                ref={(el) => (dotsRef.current[index] = el)}
                className="h-3 w-3 rounded-full bg-gray-300"
                onClick={() => {
                  const cards = scrollerRef.current.children;
                  cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

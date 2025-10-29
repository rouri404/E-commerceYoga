import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://api-yoga-rapha.onrender.com/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Fallback to static data
        setEvents([
          {
            title: 'Aulão de Yoga Restaurativo',
            date: '18/10',
            time: '9:15 - 11h30',
            description: 'Uma prática suave e acolhedora para restaurar o corpo, mente e energia. Um momento de pausa para reconectar-se com você mesma(o).',
            image: '/assets/sapo.jpg'
          },
          {
            title: 'Cinco minutos pra mim',
            date: 'Sexta-feiras',
            time: '11h',
            location: 'Auditório Fatec Zona Leste',
            description: 'Vivências para você: movimentar seu corpo com suavidade, melhorar seu foco, equilíbrio e vitalidade, dormir melhor, lidar melhor com a ansiedade, estresse e transtornos psicológicos, e relaxar num ambiente descontraído. SUA SAÚDE MENTAL TAMBÉM FAZ PARTE DO APRENDIZADO!!',
            image: '/assets/fatec.jpg'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section id="eventos" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-64 bg-gray-300 rounded-3xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <img src={event.image || '/assets/evento1.jpg'} alt={event.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <div className="space-y-1 mb-4">
                <p className="text-emerald-700 font-semibold flex items-center">
                  <i className="fas fa-calendar mr-2"></i>
                  {event.date}
                </p>
                <p className="text-emerald-700 font-semibold flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  {event.time}
                </p>
                {event.location && <p className="text-emerald-700 font-semibold flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {event.location}
                </p>}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
              <button 
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de participar do evento: ' + event.title, '_blank')}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Participar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

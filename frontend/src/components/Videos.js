import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://api-yoga-rapha.onrender.com/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        // Fallback
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <div className="py-20 text-center">Carregando vídeos...</div>;

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vídeos</h2>
          <p className="text-gray-600">Assista aos nossos conteúdos exclusivos sobre yoga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.length > 0 ? videos.map((video, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                <i className="fas fa-play text-4xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
              <p className="text-gray-600 mt-2">{video.description}</p>
            </div>
          )) : (
            <p className="col-span-full text-center text-gray-500">Nenhum vídeo disponível no momento.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Videos;

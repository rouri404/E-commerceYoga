import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api-yoga-rapha.onrender.com/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <div className="py-20 text-center">Carregando artigos...</div>;

  return (
    <section id="artigos" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Artigos</h2>
          <p className="text-gray-600">Leia nossos artigos sobre bem-estar e yoga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-4 flex items-center justify-center">
                <i className="fas fa-book-open text-4xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{article.content?.substring(0, 150)}...</p>
              <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
                Ler mais →
              </button>
            </div>
          )) : (
            <p className="col-span-full text-center text-gray-500">Nenhum artigo disponível no momento.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/logo.jpg" alt="Logo Karla Rodrigues Yoga" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-semibold text-emerald-700">Karla Rodrigues Yoga</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sobre</a>
            <a href="#especialidades" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Especialidades</a>
            <a href="#eventos" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Eventos</a>
            <a href="#videos" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Vídeos</a>
            <a href="#artigos" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Artigos</a>
            <a href="#galeria" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Galeria</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="text-sm font-medium text-gray-700 hover:text-emerald-700 px-3 py-2 rounded-xl hover:bg-emerald-50 transition-colors">
                Entrar
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

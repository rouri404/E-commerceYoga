import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.instagram.com/karlarodriguesyoga/" target="_blank" rel="noopener noreferrer" className="group">
            <span className="sr-only">Instagram</span>
            <div className="p-3 rounded-xl bg-gray-800 group-hover:bg-pink-400/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-400/50">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
          <a href="https://www.facebook.com/KarlaRodriguesYoga" target="_blank" rel="noopener noreferrer" className="group">
            <span className="sr-only">Facebook</span>
            <div className="p-3 rounded-xl bg-gray-800 group-hover:bg-blue-400/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/50">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <img src="/assets/logo.jpg" alt="Logo Karla Rodrigues Yoga" className="h-8 w-8 mb-2" />
            <p className="text-center md:text-left text-sm leading-5 text-gray-300">
              &copy; 2025 Karla Rodrigues Yoga. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-left text-xs text-gray-400 mt-1">
              Transforme sua vida através da prática do yoga
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

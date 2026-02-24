import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { slideUrls } from '@/lib/slideUrls';

/**
 * Componente Slideshow - Presentación de diapositivas en formato libro
 * Diseño: Elegante con efecto de libro físico y animaciones suaves
 * Tema: Coherente con el dossier (oscuro con acentos dorados)
 */

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slideUrls.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'Escape') setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`w-full ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'} flex flex-col items-center justify-center p-4`}>
      {/* Título */}
      {!isFullscreen && (
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-2">
            Presentación
          </h1>
          <p className="text-amber-100/70">Dossier de Viaje Coleccionista</p>
        </div>
      )}

      {/* Contenedor principal */}
      <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full max-w-5xl'}`}>
        {/* Diapositiva */}
        <div className={`relative ${isFullscreen ? 'h-full' : 'aspect-video'} bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20`}>
          <img
            src={slideUrls[currentSlide]}
            alt={`Diapositiva ${currentSlide + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Overlay con controles en modo fullscreen */}
          {isFullscreen && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-between p-6">
              <div className="text-white text-sm">
                {currentSlide + 1} / {totalSlides}
              </div>
              <button
                onClick={toggleFullscreen}
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Controles */}
        <div className={`mt-8 flex items-center justify-center gap-4 ${isFullscreen ? 'hidden' : ''}`}>
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg p-3 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Indicador de página */}
          <div className="text-amber-100/70 text-sm font-medium min-w-24 text-center">
            {currentSlide + 1} / {totalSlides}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg p-3 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Botón pantalla completa */}
          <button
            onClick={toggleFullscreen}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-3 transition-colors shadow-lg ml-4"
          >
            <Maximize2 size={24} />
          </button>

          {/* Botón volver */}
          <Link href="/" asChild>
            <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg p-3 transition-colors shadow-lg ml-2 flex items-center gap-2">
              <ArrowLeft size={20} />
              <span className="hidden sm:inline text-sm">Volver</span>
            </button>
          </Link>
        </div>

        {/* Miniaturas */}
        {!isFullscreen && (
          <div className="mt-8 flex gap-2 overflow-x-auto pb-4 px-4 justify-center flex-wrap">
            {slideUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentSlide
                    ? 'border-amber-600 shadow-lg scale-110'
                    : 'border-amber-900/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={slideUrls[index]}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Instrucciones de teclado */}
      {!isFullscreen && (
        <div className="mt-12 text-center text-amber-100/50 text-sm max-w-2xl">
          <p>Usa las flechas del teclado para navegar, <kbd className="bg-slate-800 px-2 py-1 rounded">F</kbd> para pantalla completa, o <kbd className="bg-slate-800 px-2 py-1 rounded">ESC</kbd> para salir.</p>
        </div>
      )}
    </div>
  );
}

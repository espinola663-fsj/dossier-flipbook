import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { getPageUrl } from '@/lib/pageUrls';

/**
 * Componente Flipbook - Libro interactivo con efecto de cambio de página
 * Diseño: Elegante y sofisticado con animaciones suaves
 * - Efecto 3D de página realista
 * - Navegación intuitiva (botones y teclado)
 * - Indicador de página
 * - Modo pantalla completa inmersivo
 */

interface FlipbookProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Flipbook({ totalPages, onPageChange }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const leftPageRef = useRef<HTMLDivElement>(null);
  const rightPageRef = useRef<HTMLDivElement>(null);

  // Obtener las imágenes de las páginas
  const getPageImage = (pageNum: number) => {
    if (pageNum < 0 || pageNum >= totalPages) return null;
    return getPageUrl(pageNum + 1);
  };

  // Cambiar página con animación
  const flipPage = (direction: 'next' | 'prev') => {
    if (isFlipping) return;

    setIsFlipping(true);

    if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      onPageChange?.(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
      onPageChange?.(currentPage - 1);
    }

    setTimeout(() => setIsFlipping(false), 600);
  };

  // Manejar cambios de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Función para entrar/salir de pantalla completa
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        // Entrar en pantalla completa
        if (fullscreenRef.current?.requestFullscreen) {
          await fullscreenRef.current.requestFullscreen();
        } else if ((fullscreenRef.current as any)?.webkitRequestFullscreen) {
          await (fullscreenRef.current as any).webkitRequestFullscreen();
        }
      } else {
        // Salir de pantalla completa
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.error('Error al cambiar pantalla completa:', err);
    }
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') flipPage('next');
      if (e.key === 'ArrowLeft') flipPage('prev');
      if (e.key === 'Escape' && isFullscreen) toggleFullscreen();
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping, isFullscreen]);

  const leftPageNum = currentPage;
  const rightPageNum = currentPage + 1;

  return (
    <div
      ref={fullscreenRef}
      className={`flex flex-col items-center justify-center ${
        isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'
      } bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${isFullscreen ? 'p-2' : 'p-4'}`}
    >
      {/* Fondo decorativo */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />
      </div>

      {/* Contenedor principal del libro */}
      <div className={`w-full ${isFullscreen ? 'max-w-full' : 'max-w-6xl'} relative z-10`}>
        {/* Título */}
        {!isFullscreen && (
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-2">
              Dossier Interactivo
            </h1>
            <p className="text-amber-100/70 text-lg">Libro Digital con Efecto de Página</p>
          </div>
        )}

        {/* Libro */}
        <div
          ref={containerRef}
          className={`relative mx-auto bg-gradient-to-b from-slate-700 to-slate-800 rounded-3xl shadow-2xl ${
            isFullscreen ? 'p-4' : 'p-6 md:p-8'
          } border border-amber-900/30`}
          style={{
            aspectRatio: '16 / 10',
            maxWidth: isFullscreen ? '100%' : '1000px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Lomo del libro (efecto visual) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-900 transform -translate-x-1/2 rounded-full shadow-2xl" />

          {/* Contenedor de páginas */}
          <div className={`grid grid-cols-2 ${isFullscreen ? 'gap-3' : 'gap-4 md:gap-6'} h-full`}>
            {/* Página izquierda */}
            <div
              ref={leftPageRef}
              className={`relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-xl overflow-hidden transition-all duration-600 cursor-pointer hover:shadow-2xl ${
                isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipping ? 'rotateY(-15deg)' : 'rotateY(0deg)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
              onClick={() => flipPage('next')}
            >
              {/* Patrón de fondo sutil */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23D4AF37" width="100" height="100"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="%23D4AF37" stroke-width="0.5" opacity="0.3"/></svg>')`,
                }}
              />

              {/* Contenido de la página */}
              {getPageImage(leftPageNum) ? (
                <img
                  src={getPageImage(leftPageNum)!}
                  alt={`Página ${leftPageNum + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <span className="text-sm">Página no disponible</span>
                </div>
              )}

              {/* Número de página */}
              <div className={`absolute bottom-4 left-4 text-xs font-serif text-slate-600 ${isFullscreen ? 'text-xs' : ''}`}>
                {leftPageNum + 1}
              </div>

              {/* Efecto de sombra 3D */}
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
            </div>

            {/* Página derecha */}
            <div
              ref={rightPageRef}
              className={`relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-xl overflow-hidden transition-all duration-600 cursor-pointer hover:shadow-2xl ${
                isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipping ? 'rotateY(15deg)' : 'rotateY(0deg)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
              onClick={() => flipPage('prev')}
            >
              {/* Patrón de fondo sutil */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23D4AF37" width="100" height="100"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="%23D4AF37" stroke-width="0.5" opacity="0.3"/></svg>')`,
                }}
              />

              {/* Contenido de la página */}
              {getPageImage(rightPageNum) ? (
                <img
                  src={getPageImage(rightPageNum)!}
                  alt={`Página ${rightPageNum + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <span className="text-sm">Fin del documento</span>
                </div>
              )}

              {/* Número de página */}
              <div className={`absolute bottom-4 right-4 text-xs font-serif text-slate-600 ${isFullscreen ? 'text-xs' : ''}`}>
                {rightPageNum + 1}
              </div>

              {/* Efecto de sombra 3D */}
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Controles de navegación */}
        <div className={`flex ${isFullscreen ? 'flex-row' : 'flex-col md:flex-row'} items-center justify-between ${isFullscreen ? 'mt-4' : 'mt-8'} px-4 gap-4`}>
          {/* Botón anterior */}
          <button
            onClick={() => flipPage('prev')}
            disabled={currentPage === 0 || isFlipping}
            className={`flex items-center gap-2 px-${isFullscreen ? '4' : '6'} py-${isFullscreen ? '2' : '3'} bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none border border-amber-500/50`}
          >
            <ChevronLeft size={isFullscreen ? 16 : 20} />
            <span className={isFullscreen ? 'hidden' : 'hidden sm:inline'}>Anterior</span>
          </button>

          {/* Indicador de página */}
          <div className={`flex items-center ${isFullscreen ? 'gap-2' : 'gap-4'}`}>
            {!isFullscreen && (
              <div className="text-center">
                <div className="text-amber-100 text-sm font-semibold">
                  Página {currentPage + 1} de {totalPages}
                </div>
                <div className="text-amber-300/60 text-xs mt-1">
                  {Math.round(((currentPage + 1) / totalPages) * 100)}% completado
                </div>
              </div>
            )}
            {isFullscreen && (
              <div className="text-amber-100 text-xs font-semibold whitespace-nowrap">
                {currentPage + 1}/{totalPages}
              </div>
            )}

            {/* Barra de progreso */}
            <div className={`${isFullscreen ? 'w-16' : 'w-32'} h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner`}>
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={() => flipPage('next')}
            disabled={currentPage >= totalPages - 1 || isFlipping}
            className={`flex items-center gap-2 px-${isFullscreen ? '4' : '6'} py-${isFullscreen ? '2' : '3'} bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none border border-amber-500/50`}
          >
            <span className={isFullscreen ? 'hidden' : 'hidden sm:inline'}>Siguiente</span>
            <ChevronRight size={isFullscreen ? 16 : 20} />
          </button>

          {/* Botón pantalla completa */}
          <button
            onClick={toggleFullscreen}
            className={`flex items-center gap-2 px-${isFullscreen ? '4' : '6'} py-${isFullscreen ? '2' : '3'} bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border border-purple-500/50`}
            title={isFullscreen ? 'Salir de pantalla completa (ESC)' : 'Pantalla completa (F)'}
          >
            {isFullscreen ? (
              <Minimize2 size={isFullscreen ? 16 : 20} />
            ) : (
              <Maximize2 size={isFullscreen ? 16 : 20} />
            )}
            {!isFullscreen && <span className="hidden sm:inline">Pantalla Completa</span>}
          </button>
        </div>

        {/* Instrucciones */}
        {!isFullscreen && (
          <div className="text-center mt-8 text-amber-100/60 text-sm">
            <p>💡 Usa las flechas del teclado (← →) para navegar, o presiona F para pantalla completa</p>
          </div>
        )}

        {/* Instrucciones en pantalla completa */}
        {isFullscreen && (
          <div className="text-center mt-2 text-amber-100/40 text-xs">
            <p>ESC para salir • ← → para navegar</p>
          </div>
        )}
      </div>
    </div>
  );
}

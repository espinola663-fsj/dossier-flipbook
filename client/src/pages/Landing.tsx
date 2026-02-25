import { Link } from 'wouter';
import { ArrowRight, BookOpen, MapPin, Trophy, Sparkles, ChevronDown } from 'lucide-react';

/**
 * Página de inicio - Landing page ultra-premium del dossier
 * Diseño: Minimalista, sofisticado, coleccionista de lujo
 * Tema: Viaje coleccionista Real Betis vs Chelsea UEFA Conference League Final 2025
 * Filosofía: Elegancia extrema, espacios amplios, tipografía refinada, transiciones suaves
 */

export default function Landing() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Fondo decorativo premium mejorado */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-900/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-800/15 rounded-full blur-3xl" />
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      {/* Sección de moneda premium - Top */}
      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Moneda */}
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/mrBErlonKTjgTjJS.png"
              alt="Final Conference League Wroclaw 2025"
              className="relative w-48 h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Hero Section - Ultra Premium */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 px-4">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Contenido principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Texto izquierdo */}
            <div className="space-y-14">
              {/* Badge premium */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-700/50 rounded-full backdrop-blur-md hover:border-amber-600/70 transition-all duration-300">
                <Sparkles size={18} className="text-amber-300" />
                <span className="text-sm font-medium text-amber-200 tracking-wide">Edición Limitada 2025</span>
              </div>

              {/* Título principal */}
              <div className="space-y-8">
                <h1 className="text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tighter">
                  Dossier de Viaje
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 animate-pulse">
                    Coleccionista
                  </span>
                </h1>

                <div className="space-y-4 border-l-4 border-amber-500/50 pl-8">
                  <p className="text-2xl font-light text-amber-50 font-serif tracking-wide">
                    Real Betis Balompié vs Chelsea FC
                  </p>
                  <p className="text-lg text-amber-100/70 font-light tracking-widest uppercase">
                    UEFA Conference League Final • Wrocław 2025
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-lg text-amber-100/70 leading-relaxed font-light max-w-lg">
                Un viaje extraordinario documentado en un libro de lujo. Descubre la historia de una travesía europea inolvidable, desde Teruel hasta Wrocław, capturando cada momento de este encuentro histórico.
              </p>

              {/* Botones CTA Premium */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link href="/flipbook" asChild>
                  <button className="group relative px-10 py-5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/40 hover:border-amber-200/70">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <BookOpen size={24} className="relative" />
                    <span className="relative text-lg font-semibold">Leer Dossier</span>
                    <ArrowRight size={22} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>

                <a href="#content" className="group relative px-10 py-5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-amber-100 hover:text-amber-50 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-500 backdrop-blur-md border border-amber-600/40 hover:border-amber-500/70 shadow-xl hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <span className="relative text-lg font-semibold">Explorar</span>
                  <ChevronDown size={22} className="relative group-hover:translate-y-1 transition-transform duration-300" />
                </a>

                <Link href="/slideshow" asChild>
                  <button className="group relative px-10 py-5 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-400/40 hover:border-purple-300/70">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <span className="relative text-2xl">📊</span>
                    <span className="relative text-lg font-semibold">Presentación</span>
                    <ArrowRight size={22} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>

              {/* Stats elegantes */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-amber-900/30">
                <div className="space-y-3">
                  <p className="text-4xl font-serif font-bold text-amber-300">22</p>
                  <p className="text-sm text-amber-100/60 font-light tracking-wide">Páginas Exclusivas</p>
                </div>
                <div className="space-y-3">
                  <p className="text-4xl font-serif font-bold text-amber-300">2025</p>
                  <p className="text-sm text-amber-100/60 font-light tracking-wide">Final Histórica</p>
                </div>
                <div className="space-y-3">
                  <p className="text-4xl font-serif font-bold text-amber-300">∞</p>
                  <p className="text-sm text-amber-100/60 font-light tracking-wide">Memorias</p>
                </div>
              </div>
            </div>

            {/* Imagen derecha - Dossier */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/mrBErlonKTjgTjJS.png"
                alt="Dossier de viaje"
                className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 object-contain max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tarjetas - Contenido Premium */}
      <section id="content" className="relative py-32 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white">
              Momentos Destacados
            </h2>
            <p className="text-lg text-amber-100/60 font-light max-w-2xl mx-auto">
              Una colección de memorias visuales que capturan la esencia de este viaje extraordinario
            </p>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1: La Ruta */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-700/20 hover:border-amber-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/yaXHVidlxpqlNwEd.jpg"
                  alt="La Ruta"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-amber-400" />
                  <h3 className="text-2xl font-serif font-bold text-white">La Ruta</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Mapa vintage elegante mostrando el viaje desde Teruel a Wrocław, capturando cada parada del recorrido histórico.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Camiseta Oficial */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-700/20 hover:border-amber-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/sefvwQzTbiVgROAR.jpg"
                  alt="Camiseta Oficial"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy size={24} className="text-amber-400" />
                  <h3 className="text-2xl font-serif font-bold text-white">Camiseta Oficial</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Camiseta oficial Real Betis Final Conference League 2025. Edición limitada conmemorativa del histórico encuentro.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Cartel Final */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-700/20 hover:border-amber-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/mrBErlonKTjgTjJS.png"
                  alt="Cartel Final"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles size={24} className="text-amber-400" />
                  <h3 className="text-2xl font-serif font-bold text-white">Cartel Final</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Cartel oficial de la Final Conference League 2025. Miércoles 28 de mayo en Wrocław, Estadio Breslavia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Placa Premium */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="relative group">
            {/* Glow effect mejorado */}
            <div className="absolute -inset-12 bg-gradient-to-r from-amber-500/30 via-amber-400/15 to-amber-500/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Placa dorada */}
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/DRxuUfAbyafqxDNi.png"
              alt="Placa personalizada"
              className="relative w-full max-w-2xl h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white">
              Sumérgete en la Experiencia
            </h2>
            <p className="text-lg text-amber-100/70 font-light max-w-2xl mx-auto">
              Descubre las 22 páginas de este dossier de viaje exclusivo. Una experiencia de lectura inmersiva con efecto de página realista.
            </p>
          </div>
          <Link href="/flipbook" asChild>
            <button className="group relative inline-flex items-center justify-center gap-3 px-14 py-7 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/50 hover:border-amber-200/80">
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <BookOpen size={28} className="relative" />
              <span className="relative text-xl font-bold">Abrir Flipbook</span>
              <ArrowRight size={24} className="relative group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="relative py-16 px-4 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-white">Dossier</h3>
              <p className="text-sm text-amber-100/60 font-light">Un viaje extraordinario documentado en lujo y detalle.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-white">Contenido</h3>
              <ul className="space-y-2 text-sm text-amber-100/60 font-light">
                <li><a href="/flipbook" className="hover:text-amber-300 transition-colors">Dossier Interactivo</a></li>
                <li><a href="/slideshow" className="hover:text-amber-300 transition-colors">Presentación</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-white">Evento</h3>
              <ul className="space-y-2 text-sm text-amber-100/60 font-light">
                <li>Final Conference League</li>
                <li>28 de Mayo 2025</li>
                <li>Wrocław, Breslavia</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-white">Coleccionista</h3>
              <p className="text-sm text-amber-100/60 font-light">Francisco de Borja Espinola Vergara</p>
            </div>
          </div>
          <div className="border-t border-amber-900/20 pt-8 text-center">
            <p className="text-sm text-amber-100/50 font-light">© 2025 Dossier de Viaje Coleccionista. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { ArrowRight, BookOpen, MapPin, Trophy, Sparkles, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

/**
 * Página de inicio - Landing page ultra-premium
 * Diseño: Lujo absoluto, profesional, sofisticado
 * Tema: Viaje coleccionista Real Betis vs Chelsea UEFA Conference League Final 2025
 * Filosofía: Exclusividad, elegancia, minimalismo refinado
 */

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Fondo decorativo premium - Gradientes sutiles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-800/8 rounded-full blur-3xl" />
      </div>

      {/* Header Premium */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-amber-700/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-xl font-serif font-bold text-white hidden sm:block">Dossier</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#inicio" className="text-amber-100/70 hover:text-amber-100 transition-colors duration-300 font-light">Inicio</a>
            <a href="#contenido" className="text-amber-100/70 hover:text-amber-100 transition-colors duration-300 font-light">Contenido</a>
            <a href="#evento" className="text-amber-100/70 hover:text-amber-100 transition-colors duration-300 font-light">Evento</a>
            <a href="#autor" className="text-amber-100/70 hover:text-amber-100 transition-colors duration-300 font-light">Autor</a>
          </nav>

          {/* Menu Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-amber-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-amber-700/10 px-4 py-6 space-y-4">
            <a href="#inicio" className="block text-amber-100/70 hover:text-amber-100 transition-colors">Inicio</a>
            <a href="#contenido" className="block text-amber-100/70 hover:text-amber-100 transition-colors">Contenido</a>
            <a href="#evento" className="block text-amber-100/70 hover:text-amber-100 transition-colors">Evento</a>
            <a href="#autor" className="block text-amber-100/70 hover:text-amber-100 transition-colors">Autor</a>
          </div>
        )}
      </header>

      {/* Sección Moneda Dorada - Top */}
      <section className="relative pt-40 pb-20 px-4 flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 via-amber-800/30 to-amber-900/50 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/mrBErlonKTjgTjJS.png"
              alt="Moneda Final Conference League"
              className="relative w-full max-w-sm h-auto drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Hero Section - Ultra Premium con Video de Fondo */}
      <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 px-4">
        {/* Video de Fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/xKKLFltjmLDaxwHh.mp4" type="video/mp4" />
          </video>
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Texto izquierdo */}
            <div className="space-y-16">
              {/* Badge ultra-premium */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-600/40 rounded-full backdrop-blur-sm hover:border-amber-500/60 transition-all duration-300">
                <Sparkles size={18} className="text-amber-300" />
                <span className="text-sm font-medium text-amber-200 tracking-wide">EDICIÓN LIMITADA 2025</span>
              </div>

              {/* Título principal - Tipografía refinada */}
              <div className="space-y-8">
                <h1 className="text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight">
                  Dossier de
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                    Viaje
                  </span>
                  <span className="block text-5xl lg:text-6xl text-amber-100/90 font-light">Coleccionista</span>
                </h1>

                <div className="space-y-4 pt-4 border-t border-amber-900/30">
                  <p className="text-2xl font-light text-amber-50 font-serif tracking-wide">
                    Real Betis Balompié vs Chelsea FC
                  </p>
                  <p className="text-lg text-amber-100/60 font-light tracking-widest uppercase">
                    UEFA Conference League Final • Wrocław 2025
                  </p>
                </div>
              </div>

              {/* Descripción elegante */}
              <p className="text-lg text-amber-100/70 leading-relaxed font-light max-w-xl">
                Un viaje extraordinario documentado en un libro de lujo. Descubre la historia de una travesía europea inolvidable, desde Teruel hasta Wrocław, capturando cada momento de este encuentro histórico.
              </p>

              {/* Botones CTA Ultra Premium */}
              <div className="flex flex-col sm:flex-row gap-6 pt-12">
                <Link href="/flipbook" asChild>
                  <button className="group relative px-12 py-6 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-lg font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/40 hover:border-amber-200/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <BookOpen size={24} className="relative" />
                    <span className="relative text-lg">Leer Dossier</span>
                    <ArrowRight size={22} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>

                <Link href="/slideshow" asChild>
                  <button className="group relative px-12 py-6 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-400/40 hover:border-purple-300/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <span className="relative text-2xl">📊</span>
                    <span className="relative text-lg">Ver Presentación</span>
                  </button>
                </Link>
              </div>

              {/* Stats ultra-elegantes */}
              <div className="grid grid-cols-3 gap-12 pt-16 border-t border-amber-900/20">
                <div className="space-y-3">
                  <div className="text-5xl font-bold text-amber-300 font-serif">22</div>
                  <div className="text-sm text-amber-100/60 font-light tracking-wide">Páginas Premium</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-bold text-amber-300 font-serif">2025</div>
                  <div className="text-sm text-amber-100/60 font-light tracking-wide">Final Histórica</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-bold text-amber-300 font-serif">∞</div>
                  <div className="text-sm text-amber-100/60 font-light tracking-wide">Memorias</div>
                </div>
              </div>
            </div>

            {/* Imagen derecha */}
            <div className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-transparent rounded-3xl blur-2xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-1_1771837337000_na1fn_ZG9zc2llci1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTFfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i8~6W4ATiR8V2W66K-5nVmrJPP-bUoRvEdFp5JoOma3v2iQ8Yzdr8lO0moB5AcX3oAvKzpFu6osZZ3Lfw4sEMA~8rO7YgVBDTttc5NTujUiMEZf8GksW9Pe7t6FkJmY0DCwac71kmyABwooMi2HUxsQ7KDUWOKWc7aE6MZ97WeyCt~iSdH3DHAWDtbsAZaBdMvFHHzC6BgBXGMth6sT3rAl3rz8ejEl8UmaGoNaepbBTevBwEBdaGCy1OILMfgSJCt9Mxmo5iYcOqlK3kvpzkMTs8BSYXDLJcjj8v-2uzCeJNstBkLoYG7hd1iUQemLGkL2dQffRGxZybXE2gthb5Q__"
                  alt="Dossier de viaje coleccionista"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido - Tarjetas Ultra Premium */}
      <section id="contenido" className="relative py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-serif font-bold text-white mb-6">Explora el Viaje</h2>
            <p className="text-xl text-amber-100/60 font-light max-w-2xl mx-auto">
              Tres elementos que definen esta experiencia única y exclusiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Ruta */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-700/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-700 to-slate-800">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/gCKxwWWUiVQNokcC.jpg"
                  alt="La Ruta"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">La Ruta</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Descubre el viaje desde Teruel hasta Wrocław, pasando por los puntos más emblemáticos de Europa.
                </p>
              </div>
            </div>

            {/* Card 2 - Camiseta */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-700/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-700 to-slate-800">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/opdBlWvbEXfOXkGD.jpg"
                  alt="Camiseta oficial"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Camiseta Oficial</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Camiseta oficial Real Betis Final Conference League 2025. Edición limitada conmemorativa.
                </p>
              </div>
            </div>

            {/* Card 3 - Cartel */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-700/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-700 to-slate-800">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/SAaCSqvckTkKvFBD.jpg"
                  alt="Cartel Final"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Final 2025</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Miércoles 28 de mayo de 2025. Estadio Wrocław Breslavia. Momento histórico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sello Premium */}
      <section className="relative py-40 px-4 flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-amber-900/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/SgAhpFLzdQcVXFPT.png"
              alt="Artefacto: Camiseta Oficial"
              className="relative w-full h-auto drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Entrada del Partido */}
      <section className="relative py-40 px-4 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-amber-900/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/DUtKTATIIZaRETRq.png"
              alt="Entrada Final Conference League 2025"
              className="relative w-full h-auto drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Final Ultra Premium */}
      <section className="relative py-40 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-amber-700/30 p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
            <div className="relative z-10">
              <h2 className="text-6xl font-serif font-bold text-white mb-8">
                Comienza tu Lectura
              </h2>
              <p className="text-xl text-amber-100/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Sumérgete en las 22 páginas de este dossier de viaje exclusivo. Una experiencia de lectura inmersiva con efecto de página realista y diseño ultra-premium.
              </p>
              <Link href="/flipbook" asChild>
                <button className="group relative inline-flex items-center justify-center gap-3 px-14 py-7 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/40 hover:border-amber-200/60">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <BookOpen size={28} className="relative" />
                  <span className="relative text-xl">Abrir Flipbook</span>
                  <ArrowRight size={24} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ultra Premium */}
      <footer id="evento" className="relative border-t border-amber-700/20 py-20 px-4 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Dossier Interactivo</h3>
              <p className="text-amber-100/60 font-light leading-relaxed">Una experiencia de lectura premium documentada en un libro de lujo. Diseño ultra-profesional y contenido exclusivo.</p>
            </div>
            <div id="evento" className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Evento</h3>
              <div className="text-amber-100/60 font-light space-y-2">
                <p>UEFA Conference League Final</p>
                <p>Real Betis vs Chelsea</p>
                <p>Wrocław, 28 de Mayo 2025</p>
                <p className="text-amber-300 pt-2">Edición Limitada 2025</p>
              </div>
            </div>
            <div id="autor" className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Autor</h3>
              <div className="text-amber-100/60 font-light space-y-2">
                <p>Francisco de Borja</p>
                <p>Espinola Vergara</p>
                <p className="text-amber-300 pt-2">Coleccionista & Viajero</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700/20 pt-12 text-center">
            <p className="text-amber-100/40 font-light text-sm tracking-wide">© 2025 Dossier Interactivo • Real Betis Balompié vs Chelsea FC • UEFA Conference League Final</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

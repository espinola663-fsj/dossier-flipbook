import { Link } from 'wouter';
import { ArrowRight, BookOpen, MapPin, Trophy, Sparkles, ChevronDown } from 'lucide-react';

/**
 * Página de inicio - Landing page premium del dossier
 * Diseño: Ultra-elegante, minimalista y sofisticado
 * Tema: Viaje coleccionista Real Betis vs Chelsea UEFA Conference League Final 2025
 * Filosofía: Menos es más, espacios amplios, tipografía refinada, transiciones suaves
 */

export default function Landing() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Fondo decorativo premium */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-900/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section - Premium */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 px-4">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Contenido principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Texto izquierdo */}
            <div className="space-y-12">
              {/* Badge premium */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/20 border border-amber-700/40 rounded-full backdrop-blur-sm">
                <Sparkles size={16} className="text-amber-400" />
                <span className="text-sm font-medium text-amber-300">Edición Limitada 2025</span>
              </div>

              {/* Título principal */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
                  Dossier de Viaje
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                    Coleccionista
                  </span>
                </h1>

                <div className="space-y-3">
                  <p className="text-2xl font-light text-amber-100/90 font-serif">
                    Real Betis Balompié vs Chelsea FC
                  </p>
                  <p className="text-lg text-amber-100/60 font-light tracking-wide">
                    UEFA Conference League Final • Wrocław 2025
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-lg text-amber-100/70 leading-relaxed font-light max-w-lg">
                Un viaje extraordinario documentado en un libro de lujo. Descubre la historia de una travesía europea inolvidable, desde Teruel hasta Wrocław, capturando cada momento de este encuentro histórico.
              </p>

              {/* Botones CTA Premium */}
              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <Link href="/flipbook" asChild>
                  <button className="group relative px-10 py-5 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-400/30 hover:border-amber-300/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <BookOpen size={22} className="relative" />
                    <span className="relative text-lg">Leer Dossier</span>
                    <ArrowRight size={20} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>

                <a href="#content" className="group relative px-10 py-5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-amber-100 hover:text-amber-50 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 backdrop-blur-md border border-amber-600/40 hover:border-amber-500/70 shadow-xl hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <span className="relative text-lg">Explorar Contenido</span>
                  <ChevronDown size={20} className="relative group-hover:translate-y-1 transition-transform duration-300" />
                </a>

                <Link href="/slideshow" asChild>
                  <button className="group relative px-10 py-5 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-400/30 hover:border-purple-300/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <span className="relative text-2xl">📊</span>
                    <span className="relative text-lg">Ver Presentación</span>
                    <ArrowRight size={20} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>

              {/* Stats elegantes */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-amber-900/20">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400 font-serif">22</div>
                  <div className="text-sm text-amber-100/60 font-light">Páginas Premium</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400 font-serif">2025</div>
                  <div className="text-sm text-amber-100/60 font-light">Final Histórica</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-amber-400 font-serif">∞</div>
                  <div className="text-sm text-amber-100/60 font-light">Memorias</div>
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

      {/* Contenido - Tarjetas Premium */}
      <section id="content" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-white mb-4">Explora el Viaje</h2>
            <p className="text-lg text-amber-100/60 font-light max-w-2xl mx-auto">
              Tres elementos que definen esta experiencia única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Ruta */}
            <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-600/40 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/gCKxwWWUiVQNokcC.jpg"
                  alt="La Ruta"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-amber-400" size={28} />
                  <h3 className="text-2xl font-serif font-bold text-white">La Ruta</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Descubre el viaje desde Teruel hasta Wrocław, pasando por los puntos más emblemáticos de Europa.
                </p>
              </div>
            </div>

            {/* Card 2 - Camiseta */}
            <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-600/40 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/opdBlWvbEXfOXkGD.jpg"
                  alt="Camiseta oficial"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="text-amber-400" size={28} />
                  <h3 className="text-2xl font-serif font-bold text-white">Camiseta Oficial</h3>
                </div>
                <p className="text-amber-100/70 font-light leading-relaxed">
                  Camiseta oficial Real Betis Final Conference League 2025. Edición limitada conmemorativa.
                </p>
              </div>
            </div>

            {/* Card 3 - Cartel */}
            <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-600/40 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/SAaCSqvckTkKvFBD.jpg"
                  alt="Cartel Final"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="text-amber-400" size={28} />
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
      <section className="relative py-32 px-4 flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-amber-900/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/aXeTynnZlQHxOybq.png"
              alt="Sello Final Conference League"
              className="relative w-full h-auto drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Final Premium */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-amber-900/20 p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
            <div className="relative z-10">
              <h2 className="text-5xl font-serif font-bold text-white mb-6">
                Comienza tu Lectura
              </h2>
              <p className="text-lg text-amber-100/70 font-light mb-10 max-w-2xl mx-auto">
                Sumérgete en las 22 páginas de este dossier de viaje exclusivo. Una experiencia de lectura inmersiva con efecto de página realista.
              </p>
              <Link href="/flipbook" asChild>
                <button className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-400/30 hover:border-amber-300/60">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <BookOpen size={26} className="relative" />
                  <span className="relative text-lg">Abrir Flipbook</span>
                  <ArrowRight size={22} className="relative group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="relative border-t border-amber-900/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-4">Dossier Interactivo</h3>
              <p className="text-amber-100/60 font-light">Una experiencia de lectura premium documentada en un libro de lujo.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-4">Evento</h3>
              <p className="text-amber-100/60 font-light">UEFA Conference League Final<br />Real Betis vs Chelsea<br />Wrocław, 28 de Mayo 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-4">Autor</h3>
              <p className="text-amber-100/60 font-light">Francisco de Borja<br />Espinola Vergara</p>
            </div>
          </div>
          <div className="border-t border-amber-900/10 pt-8 text-center text-amber-100/40 font-light text-sm">
            <p>© 2025 Dossier Interactivo • Real Betis Balompié vs Chelsea FC • UEFA Conference League Final</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

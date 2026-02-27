'use client';

import { useState } from 'react';
import { Link } from 'wouter';
import { BookOpen, ArrowRight, Sparkles, X } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/80 backdrop-blur-md border-b border-amber-700/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-xl font-serif font-bold text-slate-950">D</span>
            </div>
            <span className="text-xl font-serif font-bold text-white hidden sm:inline">Dossier</span>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link href="#inicio" className="text-amber-100/70 hover:text-amber-200 transition-colors font-light">Inicio</Link>
            <Link href="#contenido" className="text-amber-100/70 hover:text-amber-200 transition-colors font-light">Contenido</Link>
            <Link href="#evento" className="text-amber-100/70 hover:text-amber-200 transition-colors font-light">Evento</Link>
            <Link href="#autor" className="text-amber-100/70 hover:text-amber-200 transition-colors font-light">Autor</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Ultra Premium con Video de Fondo */}
      <section id="inicio" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
        {/* Video de Fondo */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/30 to-slate-950/40" />
        </div>

        {/* Botones en la esquina superior derecha - Ocultos en móvil, visibles en desktop */}
        <div className="hidden md:flex absolute top-32 right-8 z-20 flex-row gap-3">
          <Link href="/flipbook" asChild>
            <button className="group relative px-8 py-4 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/40 hover:border-amber-200/60 text-sm md:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <BookOpen size={20} className="relative" />
              <span className="relative">Leer Dossier</span>
            </button>
          </Link>

          <Link href="/slideshow" asChild>
            <button className="group relative px-8 py-4 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-400/40 hover:border-purple-300/60 text-sm md:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <span className="relative text-xl">📊</span>
              <span className="relative">Presentación</span>
            </button>
          </Link>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
            {/* Texto izquierdo */}
            <div className="space-y-16">
              {/* Badge ultra-premium */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-600/40 rounded-full backdrop-blur-sm hover:border-amber-500/60 transition-all duration-300">
                <Sparkles size={18} className="text-amber-300" />
                <span className="text-sm font-medium text-amber-200 tracking-wide">EDICIÓN LIMITADA 2025</span>
              </div>

              {/* Título principal - Tipografía refinada */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white leading-tight tracking-tight">
                  Dossier de
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                    Viaje
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-7xl text-amber-100/90 font-light">Coleccionista</span>
                </h1>

                <div className="space-y-4 pt-4 border-t border-amber-900/30">
                  <p className="text-xl md:text-2xl font-light text-amber-50 font-serif tracking-wide">
                    Real Betis Balompié vs Chelsea FC
                  </p>
                  <p className="text-sm md:text-base text-amber-100/60 font-light tracking-widest uppercase">
                    UEFA Conference League Final • Wrocław 2025
                  </p>
                </div>
              </div>

              {/* Descripción elegante */}
              <p className="text-base md:text-lg text-amber-100/70 leading-relaxed font-light max-w-xl">
                Un viaje extraordinario documentado en un libro de lujo. Descubre la historia de una travesía europea inolvidable, desde Teruel hasta Wrocław, capturando cada momento de este encuentro histórico.
              </p>

              {/* Botones en móvil - Visibles solo en móvil */}
              <div className="md:hidden flex flex-col gap-3 pt-8">
                <Link href="/flipbook" asChild>
                  <button className="group relative px-6 py-3 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-950 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-amber-300/40 hover:border-amber-200/60 text-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <BookOpen size={18} className="relative" />
                    <span className="relative">Leer Dossier</span>
                  </button>
                </Link>

                <Link href="/slideshow" asChild>
                  <button className="group relative px-6 py-3 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-purple-400/40 hover:border-purple-300/60 text-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <span className="relative text-lg">📊</span>
                    <span className="relative">Presentación</span>
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
          </div>
        </div>
      </section>

      {/* Bodegón debajo del video */}
      <section className="relative py-20 md:py-40 px-4 flex justify-center bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-transparent rounded-3xl blur-2xl" />
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-1_1771837337000_na1fn_ZG9zc2llci1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTFfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i8~6W4ATiR8V2W66K-5nVmrJPP-bUoRvEdFp5JoOma3v2iQ8Yzdr8lO0moB5AcX3oAvKzpFu6osZZ3Lfw4sEMA~8rO7YgVBDTttc5NTujUiMEZf8GksW9Pe7t6FkJmY0DCwac71kmyABwooMi2HUxsQ7KDUWOKWc7aE6MZ97WeyCt~iSdH3DHAWDtbsAZaBdMvFHHzC6BgBXGMth6sT3rAl3rz8ejEl8UmaGoNaepbBTevBwEBdaGCy1OILMfgSJCt9Mxmo5iYcOqlK3kvpzkMTs8BSYXDLJcjj8v-2uzCeJNstBkLoYG7hd1iUQemLGkL2dQffRGxZybXE2gthb5Q__"
              alt="Bodegón Dossier"
              className="relative w-full h-auto max-h-96 object-contain drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contenido - Tarjetas Ultra Premium */}
      <section id="contenido" className="relative py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white text-center mb-8">
            Explora el Viaje
          </h2>
          <p className="text-lg md:text-xl text-amber-100/60 text-center mb-20 max-w-3xl mx-auto">
            Tres elementos que definen esta experiencia única y exclusiva
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Tarjeta 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-amber-700/30 p-12 hover:border-amber-600/60 transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">La Ruta</h3>
                <p className="text-base md:text-lg text-amber-100/70 font-light leading-relaxed">
                  Descubre el viaje desde Teruel hasta Wrocław, pasando por los puntos más emblemáticos de Europa.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-12 hover:border-purple-600/60 transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" id="autor">El Autor</h3>
                <p className="text-base md:text-lg text-amber-100/70 font-light leading-relaxed">
                  Francisco de Borja Espínola Vergara. Coleccionista & Viajero. Documentador de experiencias únicas.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-transparent to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-green-700/30 p-12 hover:border-green-600/60 transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Final 2025</h3>
                <p className="text-base md:text-lg text-amber-100/70 font-light leading-relaxed">
                  Miércoles 28 de mayo de 2025. Estadio Wrocław Breslavia. Momento histórico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sello Premium */}
      <section className="relative py-20 md:py-40 px-4 flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-amber-900/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/SgAhpFLzdQcVXFPT.png"
              alt="Artefacto: Camiseta Oficial"
              className="relative w-full h-auto max-h-96 object-contain drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Entrada del Partido */}
      <section className="relative py-20 md:py-40 px-4 flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-amber-900/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-500" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/DUtKTATIIZaRETRq.png"
              alt="Entrada Final Conference League 2025"
              className="relative w-full h-auto max-h-96 object-contain drop-shadow-2xl group-hover:drop-shadow-3xl group-hover:scale-105 transition-all duration-500 rounded-2xl"
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
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                Comienza tu Lectura
              </h2>
              <p className="text-lg md:text-2xl text-amber-100/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
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
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Evento</h3>
              <div className="text-amber-100/60 font-light space-y-2">
                <p>UEFA Conference League Final</p>
                <p>Real Betis vs Chelsea</p>
                <p>28 de Mayo de 2025</p>
                <p>Wrocław, Polonia</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Contacto</h3>
              <p className="text-amber-100/60 font-light">Edición Limitada 2025</p>
              <p className="text-amber-100/60 font-light">Dossier Interactivo Premium</p>
            </div>
          </div>

          <div className="border-t border-amber-700/20 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-serif font-bold text-amber-300 mb-4">Derechos de Autor</h4>
                <p className="text-sm text-amber-100/60 font-light leading-relaxed">
                  © 2025 Francisco de Borja Espínola Vergara. Todos los derechos reservados. Este dossier interactivo está protegido por las leyes internacionales de derechos de autor.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-amber-300 mb-4">Aviso Legal</h4>
                <p className="text-sm text-amber-100/60 font-light leading-relaxed">
                  Creación original documentando el viaje de Real Betis Balompié a la UEFA Conference League Final 2025. Las marcas utilizadas pertenecen a sus respectivos propietarios.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-amber-700/20">
              <p className="text-xs text-amber-100/40 font-light">
                Edición Limitada 2025 • Dossier Interactivo • Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

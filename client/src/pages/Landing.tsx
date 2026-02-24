import { Link } from 'wouter';
import { ArrowRight, BookOpen, MapPin, Trophy, Facebook, Twitter, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Página de inicio - Landing page del dossier
 * Diseño: Elegante con imágenes temáticas y contenido atractivo
 * Tema: Viaje coleccionista Real Betis vs Chelsea UEFA Conference League Final 2025
 */

export default function Landing() {
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const shareTitle = 'Dossier de Viaje Coleccionista - Real Betis vs Chelsea';
  const shareText = 'Descubre el viaje extraordinario documentado en este dossier de lujo';

  const openShare = (platform: string) => {
    let url = '';
    if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    } else if (platform === 'twitter') {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    } else if (platform === 'linkedin') {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    }
    if (url) window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-50 leading-tight">
                Dossier de Viaje Coleccionista
              </h1>
              <p className="text-xl text-amber-100/80">
                Real Betis Balompié vs Chelsea FC
              </p>
              <p className="text-lg text-amber-100/60">
                UEFA Conference League Final • Wrocław 2025
              </p>
            </div>

            <p className="text-amber-100/70 text-lg leading-relaxed">
              Un viaje extraordinario documentado en un libro de lujo. Descubre la historia de una travesía europea inolvidable, desde Sevilla hasta Wrocław, capturando cada momento de este encuentro histórico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/flipbook" asChild>
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl px-8 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <BookOpen size={24} />
                  Leer Dossier
                  <ArrowRight size={20} />
                </button>
              </Link>
              <a href="#content" className="inline-block bg-transparent border border-amber-600 text-amber-100 hover:bg-amber-900/20 rounded-xl px-8 py-6 text-lg font-semibold">
                Explorar Contenido
              </a>
              <Link href="/slideshow" asChild>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl px-8 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <span>📊</span>
                  Ver Presentación
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-amber-900/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">22</div>
                <div className="text-sm text-amber-100/60">Páginas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">2025</div>
                <div className="text-sm text-amber-100/60">Final Histórica</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">∞</div>
                <div className="text-sm text-amber-100/60">Memorias</div>
              </div>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl" />
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-1_1771837337000_na1fn_ZG9zc2llci1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTFfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i8~6W4ATiR8V2W66K-5nVmrJPP-bUoRvEdFp5JoOma3v2iQ8Yzdr8lO0moB5AcX3oAvKzpFu6osZZ3Lfw4sEMA~8rO7YgVBDTttc5NTujUiMEZf8GksW9Pe7t6FkJmY0DCwac71kmyABwooMi2HUxsQ7KDUWOKWc7aE6MZ97WeyCt~iSdH3DHAWDtbsAZaBdMvFHHzC6BgBXGMth6sT3rAl3rz8ejEl8UmaGoNaepbBTevBwEBdaGCy1OILMfgSJCt9Mxmo5iYcOqlK3kvpzkMTs8BSYXDLJcjj8v-2uzCeJNstBkLoYG7hd1iUQemLGkL2dQffRGxZybXE2gthb5Q__"
              alt="Dossier de viaje coleccionista"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contenido destacado */}
      <section id="content" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
              Contenido Destacado
            </h2>
            <p className="text-amber-100/70 text-lg">
              Explora los momentos más importantes del viaje
            </p>
          </div>

          {/* Grid de contenido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Viaje desde Teruel */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/zf1Kpi2wDxh4AggSpXIZ2w-img-1_1771837692000_na1fn_ZG9zc2llci10cmF2ZWwtdGVydWVs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L3pmMUtwaTJ3RHhoNEFnZ1NwWElaMnctaW1nLTFfMTc3MTgzNzY5MjAwMF9uYTFmbl9aRzl6YzJsbGNpMTBjbUYyWld3dGRHVnlkV1ZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GBXYBClgEba~GknS7CCISpXBXq-E-T8bHjskw2v7si0cBl8agfR1k2UkffCKJmNCeEgtC3nSajcPPbiBgL3W81W~8yybAfGOQqRg76jU6Exd5pVWyzeGkrjr7BS0~Qdcloef6vcAcjxJsQgAC0Ey2kArMHdyWpG477CH51~8D540svwrUYF6W5W3I5dWA3aaTnjF5RqR80ksR2rgg2kSQg7nJjE6w0FUpsFryNjbEJfLGqai16TDzbODfSnOcb8-29rQFSmmHqe9XKTvG7qYEY4mAi7Gctf4MiGZHAFCE4ANCn7FraReXxJd80h8lX7N3ky6iXfpyq-V4dcERArJjA__"
                  alt="Ruta desde Teruel a Wrocław"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-amber-400" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-amber-50">
                    La Ruta
                  </h3>
                </div>
                <p className="text-amber-100/70">
                  Descubre el viaje desde Teruel hasta Wrocław, pasando por los puntos más emblemáticos de Europa.
                </p>
              </div>
            </div>

            {/* Card 2 - Partido */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/DZNYTFNVgfgzJiiY.jpg"
                  alt="Partido en vivo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="text-amber-400" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-amber-50">
                    El Partido
                  </h3>
                </div>
                <p className="text-amber-100/70">
                  Vive la intensidad del encuentro entre Real Betis y Chelsea en la final de la UEFA Conference League.
                </p>
              </div>
            </div>

            {/* Card 3 - Escudos Betis */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376214421/hNdqpTrSXkZuDQRt.jpg"
                  alt="Cartel Final Conference League"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="text-amber-400" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-amber-50">
                    Cartel Final Conference League
                  </h3>
                </div>
                <p className="text-amber-100/70">
                  Miércoles 28 de mayo de 2025. Estadio Wrocław Breslavia. Real Betis vs Chelsea en el partido decisivo de la UEFA Europa Conference League a las 9:00 de la noche.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen adicional - Final Wrocław */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/zf1Kpi2wDxh4AggSpXIZ2w-img-3_1771837684000_na1fn_d3JvY2xhdy1maW5hbC0yMDI1.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L3pmMUtwaTJ3RHhoNEFnZ1NwWElaMnctaW1nLTNfMTc3MTgzNzY4NDAwMF9uYTFmbl9kM0p2WTJ4aGR5MW1hVzVoYkMweU1ESTEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=juFJJeoPHpkQwCiZ0od6w8BlXHP-u-qaiC6r9Kl7ih5e899mS3M6ZgGnsOtHSLkSfzaS0dQqyraQ1OzvnhKrcvQ0OCguVl09U5dcJAuY3Qwx9QA5f2y1QYBl1kDAhSpzAIbLu-HMPXhFY-tLGVCkaHqqzg0dHTrhGO-pin4GFyqQC01S~FqZJ8Kx1232RFUwib~x6GUSPOmWcxnoRR-i6MSaINaKOQOHO4el8v3P7clc1A148MyqfK4Bp~CpSP-Z0fHEkPsI17r-NznMRlCIkvtxiCHaVViwjPCr5HbwJw6i0PTab-8i4Pd--J58WzTTy73STwCXpg43Yp7zFQFAww__"
              alt="Final Wrocław 2025 - Celebración"
              className="w-full h-96 object-cover"
            />
            <div className="bg-gradient-to-t from-slate-950 to-transparent p-8 absolute bottom-0 left-0 right-0">
              <h3 className="text-3xl font-serif font-bold text-amber-50 mb-2">
                Final 2025 en Wrocław
              </h3>
              <p className="text-amber-100/70 max-w-2xl">
                La plaza de Wrocław se llena de pasión: aficionados del Real Betis y Chelsea celebrando la UEFA Conference League Final en la histórica ciudad polaca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección con imagen compartida */}
      <section className="py-20 px-4 relative z-10" id="content">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-8 text-center">
            Explora el Contenido
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20 bg-slate-800">
            <img
              src="https://manus.im/share/70ybTYqTr5z1fmxoMObm6c"
              alt="Contenido adicional del dossier"
              className="w-full min-h-96 object-contain bg-slate-700"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-6">
            Comienza tu Lectura
          </h2>
          <p className="text-amber-100/70 text-lg mb-8 max-w-2xl mx-auto">
            Sumérgete en las 22 páginas de este dossier de viaje exclusivo. Una experiencia de lectura inmersiva con efecto de página realista.
          </p>
          <Link href="/flipbook" asChild>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl px-12 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all mx-auto">
              <BookOpen size={24} />
              Abrir Flipbook
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-amber-100/50 text-sm">
          <p>© 2025 Dossier Interactivo • Real Betis Balompié vs Chelsea FC • UEFA Conference League Final</p>
        </div>
      </footer>
    </div>
  );
}

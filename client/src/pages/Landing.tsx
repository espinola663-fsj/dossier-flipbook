import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, MapPin, Trophy } from 'lucide-react';

/**
 * Página de inicio - Landing page del dossier
 * Diseño: Elegante con imágenes temáticas y contenido atractivo
 * Tema: Viaje coleccionista Real Betis vs Chelsea UEFA Conference League Final 2025
 */

export default function Landing() {
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
              <Link href="/flipbook">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl px-8 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <BookOpen size={24} />
                  Leer Dossier
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <a href="#content" className="inline-block">
                <Button variant="outline" className="border-amber-600 text-amber-100 hover:bg-amber-900/20 rounded-xl px-8 py-6 text-lg font-semibold">
                  Explorar Contenido
                </Button>
              </a>
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
            {/* Card 1 - Viaje */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-2_1771837333000_na1fn_ZG9zc2llci10cmF2ZWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTJfMTc3MTgzNzMzMzAwMF9uYTFmbl9aRzl6YzJsbGNpMTBjbUYyWld3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ftN0XPsPsirIOx~1Gh5JjXt36aG~7BMJxVzutZvPVb9tQx5aJetAkgU-fJpUrFGvnPdzqI5ZLbE697VZN19CjJKHtXN79ZjTS-wvgwlJXjp2fpPi2y6pBbYyWlJfZbdpQTBRGWnY3jkE3I2Xfqm7Xx2MzqW2NYc-0IK97sXsuGepB6cgmvYbKQ-keLScJUXRtO017Jm~QJimaD2FLDEsz0HjLeGCQpqD02Lof-f9FSTkqBcllrxSAx3J~i9m3BiidnQE5oPcXxaOpB9ja6jdfx2kIcvxn0rK1J9r4NwhWmPANrgDkXumAyrj8twy-jRwShR9TNzh8vXt-ycTkktbeg__"
                  alt="Mapa del viaje"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                  Descubre el viaje desde Sevilla hasta Wrocław, pasando por los puntos más emblemáticos de Europa.
                </p>
              </div>
            </div>

            {/* Card 2 - Partido */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-3_1771837337000_na1fn_ZG9zc2llci1tYXRjaA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTNfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMXRZWFJqYUEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XwCP5c1Vc797rAruFtjgy1~4LfD44EjwvCiWxgoUT6uUKdmpfQPulHLUibw2k-AJkgomWDeVXl-1QEKKRbB7schNoXnO1MRtC3uvYZshMddSY2Uh-oJC1QUejDBFEGJ9f3SQPBoX4m5vV7x-lHeBc0QxlTNQXcutoe4QuGfrlT7oMXE4LLQbEazVJ43vuTC8UXP1slS0H4Wp6BmCMnNxuLGIi-lFBf6NMGPjXxwXxBBrqM9vPr4kh6OSGPhpRGMyGjPc2IPyqFr~PJ6rdY8Fs5BiwfkvlswzG1tWc~Vma-R~gdd9KtcG1c86wYI3kgMcXcMqw3qzE3csez9~yc56lQ__"
                  alt="Partido en vivo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

            {/* Card 3 - Colección */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-900/20 hover:border-amber-600/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-4_1771837337000_na1fn_ZG9zc2llci1jb2xsZWN0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTRfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMWpiMnhzWldOMGFXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ju3v0Wy0i1H7HvVI7vJtZ8RewsNorD-PfUFcuToQGUUjGKfj9mXTROFckWueYXzJ0XOksMTJTKrkHIwWP9CF2ua7k-GXU0kF3zngVx8FX1sQU5YgP~7kowfICTwBKP6PfOMcMrQQ-oWXkWIsIbZHSk2zsxjqHDN7NlNsyueyIIbErFlVhdI8gNMfVvZtLPx~T7lVkbr-o4xfXZB6L4OW9zHzPbz5UbsQfOr5QSFZel09J3M445oA~OVLE7vWlbxs~ypgJodTM0i2F11XdWplJG8~cp5P7an8Z7w88Bx8t6qha2ifXKUgH91GhHadQYzJgkbqholrdn2MeVhv6TgdXQ__"
                  alt="Colección de memorabilia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-amber-400" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-amber-50">
                    La Colección
                  </h3>
                </div>
                <p className="text-amber-100/70">
                  Memorabilia exclusiva: entradas oficiales, postales conmemorativas y artefactos únicos del viaje.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen adicional - Wrocław */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-amber-900/20">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/5PgCHrmlMsa9ihc1tSha2f/sandbox/aVlqpl3NAwW6NYGS8LgtKa-img-5_1771837337000_na1fn_ZG9zc2llci13cm9jbGF3.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVBnQ0hybWxNc2E5aWhjMXRTaGEyZi9zYW5kYm94L2FWbHFwbDNOQXdXNk5ZR1M4TGd0S2EtaW1nLTVfMTc3MTgzNzMzNzAwMF9uYTFmbl9aRzl6YzJsbGNpMTNjbTlqYkdGMy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J9GcswDOlP~wmHQwAj6w55x5jIfaYUOsYGh8TbqwCFnvn4Zu6dBpTHeiwmOHFRnZjPq85xsHjBUlttAPRJIYP00AYJ~3um4u46yjckYVfbeNNO~lc7k60bKKAHTHL9ylNsWl-cNM4qWPTM0rbvohz5ZM83fjGU1saNu8dc89DdJ3l0I1UgxHzDKMxHtpM27IhPc6iWZHYHtLkqYj4I00eRkvTRADTACBzLsRihDYZXdV1OikIzy34dF~bTCugHXAPVy6kwQCKaKlFDl6HRkOeXQ3C66Q-Em66kwKApyclGg6gTLxllceDerTLUNKKh77cLYuyjwRCPTgVVdykVsabw__"
              alt="Wrocław - Ciudad anfitriona"
              className="w-full h-96 object-cover"
            />
            <div className="bg-gradient-to-t from-slate-950 to-transparent p-8 absolute bottom-0 left-0 right-0">
              <h3 className="text-3xl font-serif font-bold text-amber-50 mb-2">
                Wrocław: La Ciudad Anfitriona
              </h3>
              <p className="text-amber-100/70 max-w-2xl">
                La histórica ciudad polaca de Wrocław acogió el encuentro más importante de la temporada, brindando un escenario europeo de ensueño para este dossier de viaje único.
              </p>
            </div>
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
          <Link href="/flipbook">
            <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl px-12 py-6 text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all mx-auto">
              <BookOpen size={24} />
              Abrir Flipbook
              <ArrowRight size={20} />
            </Button>
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

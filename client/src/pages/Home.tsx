import Flipbook from '@/components/Flipbook';

/**
 * Página principal - Flipbook del Dossier
 * Diseño: Elegante con fondo oscuro y efecto de libro físico
 * Total de páginas: 23 (extraídas del PDF)
 */

export default function Home() {
  return (
    <div className="w-full">
      <Flipbook totalPages={23} />
    </div>
  );
}

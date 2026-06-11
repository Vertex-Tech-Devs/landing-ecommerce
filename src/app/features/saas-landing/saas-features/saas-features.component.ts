import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAltaGamaComponent } from './components/card-alta-gama/card-alta-gama.component';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;      // Identificador para seleccionar el SVG/visual en el template
  gridClass: string; // Clase CSS para el tamaño en el Bento Grid (col-span-2, row-span-2, etc.)
  badge?: string;    // Etiqueta del badge
  badgeClass?: string; // Clase de estilo del badge
  iconClass?: string;  // Clase de estilo del contenedor del icono
  cardClass?: string;  // Clase identificadora de la tarjeta
}

@Component({
  selector: 'app-saas-features',
  standalone: true,
  imports: [CommonModule, CardAltaGamaComponent],
  templateUrl: './saas-features.component.html',
  styleUrl: './saas-features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasFeaturesComponent {
  // Arreglo de características premium de e-commerce que alimentará el Bento Grid
  features = signal<FeatureItem[]>([
    {
      id: 1,
      title: 'Navegación tipo App en Celulares',
      description: 'Más del 90% de tus clientes compra desde el teléfono. Ofréceles una experiencia ágil con menús intuitivos y un diseño elegante que responde al instante a sus toques.',
      icon: 'ai',
      gridClass: 'col-span-2',
      badge: 'Mobile-First',
      badgeClass: 'badge-purple',
      iconClass: 'icon-purple',
      cardClass: 'card-ai'
    },
    {
      id: 2,
      title: 'Tu Panel de Control sin Complicaciones',
      description: 'Modifica precios, sube fotos de tus productos y cambia los anuncios de tu portada con solo unos clics. Toma el control absoluto de tu negocio en tiempo real, sin depender de programadores.',
      icon: 'security',
      gridClass: '',
      badge: 'CMS Integrado',
      badgeClass: 'badge-cyan',
      iconClass: 'icon-cyan',
      cardClass: 'card-security'
    },
    {
      id: 3,
      title: 'Ventas en Piloto Automático con Mercado Pago',
      description: 'Recibe cobros de forma segura las 24 horas. El sistema descuenta el stock en el momento, confirma el pago tras la acreditación y, si tu cliente abandona la transacción, devuelve el producto al catálogo automáticamente.',
      icon: 'integrations',
      gridClass: 'row-span-2',
      badge: 'Nube & Pasarelas',
      badgeClass: 'badge-pink',
      iconClass: 'icon-pink',
      cardClass: 'card-integrations'
    },
    {
      id: 4,
      title: 'Visible y veloz en Google',
      description: 'Tus productos aparecen automáticamente en las búsquedas de Google. Las páginas se preparan en nuestro servidor para cargar de inmediato, evitando que tus clientes se vayan por lentitud.',
      icon: 'analytics',
      gridClass: 'col-span-2',
      badge: 'SEO & Velocidad',
      badgeClass: 'badge-blue',
      iconClass: 'icon-blue',
      cardClass: 'card-analytics'
    }
  ]);
}

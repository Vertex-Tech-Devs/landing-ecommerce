import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './saas-features.component.html',
  styleUrl: './saas-features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasFeaturesComponent {
  // Arreglo de características premium de e-commerce que alimentará el Bento Grid
  features = signal<FeatureItem[]>([
    {
      id: 1,
      title: 'Navegación tipo App',
      description: 'El 90% de tus clientes compra desde el teléfono. Ofréceles una navegación ultra-fluida y atractiva que se siente y responde igual que una aplicación móvil nativa.',
      icon: 'ai',
      gridClass: 'col-span-2',
      badge: 'Mobile-First',
      badgeClass: 'badge-purple',
      iconClass: 'icon-purple',
      cardClass: 'card-ai'
    },
    {
      id: 2,
      title: 'Autogestión sin Código',
      description: 'Sube productos, cambia los banners de la portada y actualiza tus precios tú mismo en tiempo real. Toma el control total de tu tienda sin pagarle a nadie más.',
      icon: 'security',
      gridClass: '',
      badge: 'CMS Integrado',
      badgeClass: 'badge-cyan',
      iconClass: 'icon-cyan',
      cardClass: 'card-security'
    },
    {
      id: 3,
      title: 'Ventas en Piloto Automático',
      description: 'Tu negocio abierto 24/7 sin caídas. Recibe cobros de forma segura con Mercado Pago y otras pasarelas integradas, mientras el sistema procesa cada pedido en la nube.',
      icon: 'integrations',
      gridClass: 'row-span-2',
      badge: 'Nube & Pasarelas',
      badgeClass: 'badge-pink',
      iconClass: 'icon-pink',
      cardClass: 'card-integrations'
    },
    {
      id: 4,
      title: 'Visible en Google',
      description: 'Atrae más visitas orgánicas y gratuitas. Tu catálogo se posiciona automáticamente en Google y carga en milisegundos para evitar que tus clientes se vayan por lentitud.',
      icon: 'analytics',
      gridClass: 'col-span-2',
      badge: 'SEO & Velocidad',
      badgeClass: 'badge-blue',
      iconClass: 'icon-blue',
      cardClass: 'card-analytics'
    }
  ]);
}

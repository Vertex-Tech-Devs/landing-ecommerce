import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saas-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saas-hero.component.html',
  styleUrls: ['./saas-hero.component.scss']
})
export class SaasHeroComponent {
  // Datos interactivos para las métricas premium del SaaS
  stats = [
    { value: '99.99%', label: 'Disponibilidad de Red', icon: 'uptime' },
    { value: '45M+', label: 'Transacciones Procesadas', icon: 'transactions' },
    { value: '< 100ms', label: 'Latencia Global API', icon: 'latency' }
  ];

  // Elementos activos en el dashboard simulado
  recentTransactions = [
    { id: 'tx-1049', user: 'Sophia Bennett', amount: '+$1,240.00', status: 'completed', time: 'Hace 2m' },
    { id: 'tx-1048', user: 'Liam Patterson', amount: '+$340.50', status: 'completed', time: 'Hace 5m' },
    { id: 'tx-1047', user: 'Marcus Vance', amount: '-$89.00', status: 'pending', time: 'Hace 12m' }
  ];

  activeCategory: string = 'analytics';

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
}

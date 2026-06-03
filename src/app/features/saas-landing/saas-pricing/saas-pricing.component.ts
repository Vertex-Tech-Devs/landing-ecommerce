import { Component, signal, computed, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  id: 'basic' | 'pro' | 'enterprise';
  name: string;
  price: number;
  basePrice: number;
  billingPeriodText: string;
  yearlySavingText?: string;
}

@Component({
  selector: 'app-saas-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saas-pricing.component.html',
  styleUrl: './saas-pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasPricingComponent {
  billingPeriod: WritableSignal<'monthly' | 'yearly'> = signal<'monthly' | 'yearly'>('monthly');
  toggleBilling(): void {
    this.billingPeriod.update(current => current === 'monthly' ? 'yearly' : 'monthly');
  }
  pricingPlans = computed<PricingPlan[]>(() => {
    const period = this.billingPeriod();
    const isYearly = period === 'yearly';
    const discount = isYearly ? 0.8 : 1.0;

    const basePlans = [
      { id: 'basic' as const, name: 'Basic', basePrice: 19 },
      { id: 'pro' as const, name: 'Pro', basePrice: 49 },
      { id: 'enterprise' as const, name: 'Enterprise', basePrice: 149 }
    ];

    return basePlans.map(plan => {

      const calculatedPrice = isYearly
        ? Math.round(plan.basePrice * discount)
        : plan.basePrice;

      return {
        id: plan.id,
        name: plan.name,
        price: calculatedPrice,
        basePrice: plan.basePrice,
        billingPeriodText: isYearly ? '/mes' : '/mes',
        yearlySavingText: isYearly ? `Facturado anualmente ($${calculatedPrice * 12}/año)` : 'Facturado mensualmente'
      };
    });
  });
}

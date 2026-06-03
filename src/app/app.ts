import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaasHeroComponent } from './features/saas-landing/saas-hero/saas-hero.component';
import { SaasFeaturesComponent } from './features/saas-landing/saas-features/saas-features.component';
import { SaasPricingComponent } from './features/saas-landing/saas-pricing/saas-pricing.component';
import { SaasCtaComponent } from './features/saas-landing/saas-cta/saas-cta.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaasHeroComponent, SaasFeaturesComponent, SaasPricingComponent, SaasCtaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-ecommerce');
}

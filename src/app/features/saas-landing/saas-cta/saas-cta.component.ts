import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saas-cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saas-cta.component.html',
  styleUrl: './saas-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasCtaComponent {
  email = signal<string>('');
  companyName = signal<string>('');

  isFormValid = computed<boolean>(() => {
    const emailVal = this.email();
    const companyVal = this.companyName();
    return emailVal.includes('@') && emailVal.includes('.') && companyVal.trim().length > 2;
  });

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Datos capturados:', {
        email: this.email(),
        companyName: this.companyName()
      });
      this.email.set('');
      this.companyName.set('');
    }
  }
}

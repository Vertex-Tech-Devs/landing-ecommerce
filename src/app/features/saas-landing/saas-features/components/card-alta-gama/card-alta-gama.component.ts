import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-alta-gama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-alta-gama.component.html',
  styleUrl: './card-alta-gama.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardAltaGamaComponent {}

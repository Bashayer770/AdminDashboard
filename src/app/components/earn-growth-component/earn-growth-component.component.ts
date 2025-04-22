import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-earn-growth-component',
  imports: [CommonModule],
  templateUrl: './earn-growth-component.component.html',
  styleUrl: './earn-growth-component.component.css',
})
export class EarnGrowthComponentComponent {
  @Input() percentage: number = 0;
  @Input() earnings: string = '';
}

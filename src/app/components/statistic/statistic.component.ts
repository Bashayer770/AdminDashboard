import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  imports: [CommonModule],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css',
})
export class StatisticComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() color = 'from-blue-500 to-purple-500';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaveLayoutComponent } from './layouts/wave-layout/wave-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WaveLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AdminDashboard';
}

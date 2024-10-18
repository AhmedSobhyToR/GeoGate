import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from './Components/shared/header/header.component';
import { MainComponent } from './Components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'ECommerce';
}

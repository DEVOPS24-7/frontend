import { Component, signal } from '@angular/core';
import { Header } from './screens/header/header';
import { Home } from './screens/home/home';
import { Footer } from './screens/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('saradhi');
}

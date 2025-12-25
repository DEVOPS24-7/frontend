import { AfterViewInit, Component, ElementRef, ViewChild, NgZone } from '@angular/core';

declare var bootstrap: any; // Declare bootstrap to avoid TypeScript errors

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home  {
  @ViewChild('reasonsCarousel') carouselElement!: ElementRef;

  constructor(private ngZone: NgZone) {}

 
}

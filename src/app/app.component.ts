import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uiDev';
  loading = true;

  @ViewChild('menu', { static: true }) data!: ElementRef;

  toggle() {
    this.data.nativeElement.classList.toggle("open");
  }

}

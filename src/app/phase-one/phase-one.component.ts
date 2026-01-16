import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-phase-one',
  templateUrl: './phase-one.component.html',
  styleUrl: './phase-one.component.scss'
})
export class PhaseOneComponent {
  title = 'uiDev';
  loading = true;

  @ViewChild('menu', { static: true }) data!: ElementRef;

  toggle() {
    this.data.nativeElement.classList.toggle("open");
  }
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}

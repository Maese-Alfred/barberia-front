import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,                // ✅ importante si usas `imports` aquí
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuAbierto = false;
  toggleMenu() { this.menuAbierto = !this.menuAbierto; }

  closeMenu() { this.menuAbierto = false; }
}
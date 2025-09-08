import { Component, Input } from '@angular/core';
import{ TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tabla',
  imports: [TitleCasePipe],
  standalone: true,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  // Los datos a mostrar
  @Input() datos: any[] = [];

  // Definir qué columnas mostrar
  @Input() columnas: string[] = [];
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  imports: [],
  templateUrl: './boton-agregar.component.html',
  styleUrl: './boton-agregar.component.scss'
})
export class BotonAgregarComponent {
  @Input() texto: string = 'Agregar';
}

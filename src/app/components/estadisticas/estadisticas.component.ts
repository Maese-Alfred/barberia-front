import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  @Input() titulo: string = '';
  @Input() dinero: number = 0;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  // esto se llama desde un servicio del backend
  titulo = 'Estadísticas';
  dinero = 120000;

}

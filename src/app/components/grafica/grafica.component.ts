import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [NgxChartsModule],   // 👈 aquí se importa como módulo normal
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent {
  view: [number, number] = [700, 400];  // tamaño [ancho, alto]

  // Datos de ejemplo
  data = [
    { name: 'Enero', value: 65 },
    { name: 'Febrero', value: 59 },
    { name: 'Marzo', value: 80 },
    { name: 'Abril', value: 81 },
    { name: 'Mayo', value: 56 }
  ];

  // Opciones
  showLegend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Mes';
  yAxisLabel = 'Ventas';
}
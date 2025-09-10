import { Component } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [NgxChartsModule],   // 👈 aquí se importa como módulo normal
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent {
  
  view: [number, number] = [1000, 400];  // tamaño [ancho, alto]

  // Datos de ejemplo
data = [
  {
    name: 'Ventas', // nombre de la serie
    series: [
      { name: 'Enero', value: 65 },
      { name: 'Febrero', value: 59 },
      { name: 'Marzo', value: 80 },
      { name: 'Abril', value: 81 },
      { name: 'Mayo', value: 56 }
    ]
  }
];

  // Opciones
 colorScheme: Color = {
    name: 'goldenScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#D4AF37', // dorado
      '#FFD700', // amarillo dorado
      '#B8860B', // oro oscuro
      '#DAA520', // goldenrod
      '#EEE8AA'  // dorado claro
    ]
  };
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
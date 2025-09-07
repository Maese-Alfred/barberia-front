import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafica',
  imports: [NgChartsModule],
  templateUrl: './grafica.component.html',
  styleUrl: './grafica.component.scss'
})
export class GraficaComponent {

  // ejemplo de datos para la gráfica, luego se pueden obtener de un servicio
   // Datos de ejemplo
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Ventas' },
      { data: [28, 48, 40, 19, 86], label: 'Gastos' }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GraficaComponent } from '../../components/grafica/grafica.component';
import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-inicio',
  imports: [GraficaComponent, EstadisticasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  datos: any[] = [];
  //ahora se usa un array de objetos para representar los datos financieros, luego se pediran a un servicio
  ngOnInit(): void {
    this.datos = [
      { id: 1, nombre: 'Servicio 1', precio: 100},
      { id: 2, nombre: 'Servicio 2', precio: 150},
      { id: 3, nombre: 'Servicio 3', precio: 200}
    ];
  }
}

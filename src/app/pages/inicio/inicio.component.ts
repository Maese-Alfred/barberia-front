import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GraficaComponent } from '../../components/grafica/grafica.component';
import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent, GraficaComponent, EstadisticasComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}

import { Component } from '@angular/core';
import{ Ventas } from '../../interface/ventas';
import { BotonAgregarComponent } from '../../components/boton-agregar/boton-agregar.component';


@Component({
  selector: 'app-ventas',
  imports: [BotonAgregarComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent {

}

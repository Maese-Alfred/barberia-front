import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { Gastos } from '../../interface/gastos';
import { BotonAgregarComponent } from '../../components/boton-agregar/boton-agregar.component';
import { ModalGastosComponent } from '../../components/modal-gastos/modal-gastos.component';

@Component({
  selector: 'app-gastos',
  imports: [TablaComponent,BotonAgregarComponent,ModalGastosComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss'
})
export class GastosComponent {
  datosGastos: Gastos[] = [
    { id: 1, hora: 10, categoria: 'Materiales', monto: 50, descripcion: 'Compra de tijeras' },
    { id: 2, hora: 12, categoria: 'Servicios', monto: 100, descripcion: 'Pago de luz' },
    { id: 3, hora: 14, categoria: 'Otros', monto: 30, descripcion: 'Agua y café' }
  ];

    modalVisible = false;
  
  openModal() {
    console.log("Abriendo modal");
    this.modalVisible = true;
  }
  closeModal() {
    this.modalVisible = false;
  }
  
}

import { Component } from '@angular/core';
import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { Estadisticas } from '../../interface/estadisticas';
import { TablaMonitoreo } from '../../interface/tablaMonitoreo';
import { BotonAgregarComponent } from '../../components/boton-agregar/boton-agregar.component';
import { ModalCierreComponent } from '../../components/modal-cierre/modal-cierre.component';

@Component({
  selector: 'app-gestion-financiera',
  imports: [EstadisticasComponent, TablaComponent,BotonAgregarComponent, ModalCierreComponent],
  templateUrl: './gestion-financiera.component.html',
  styleUrl: './gestion-financiera.component.scss'
})
export class GestionFinancieraComponent {
  //datos para las estadisticas en tiempo real
  datos: Estadisticas[] = [];
  ingresos: number = 350;
  gastos: number = 150;
  beneficios: number = this.ingresos - this.gastos;
  //datos para la tabla de monitoreo
  datosTabla: TablaMonitoreo[] = [];
  //ahora se usa un array de objetos para representar los datos financieros, luego se pediran a un servicio
  ngOnInit(): void {
    this.datos = [
      { id: 1, nombre: 'Ingresos Totales', precio: this.ingresos},
      { id: 2, nombre: 'Gastos Totales', precio: this.gastos},
      { id: 3, nombre: 'Beneficios Netos', precio: this.beneficios}
    ];
    this.datosTabla = [ 
      { id: 1, hora: 9, tipo: 'Ingreso', precio: 100, detalle: 'Pago por servicio A' },
      { id: 2, hora: 10, tipo: 'Gasto', precio: 50, detalle: 'Compra de insumos' },
      { id: 3, hora: 11, tipo: 'Ingreso', precio: 250, detalle: 'Pago por servicio B' },
      { id: 4, hora: 12, tipo: 'Gasto', precio: 100, detalle: 'Pago de servicios' }
  ];
  }
    modalVisible = false;
  
  openModal() {
    console.log("Abriendo modal");
    this.modalVisible = true;
  }
  closeModal() {
    this.modalVisible = false;
  }

}

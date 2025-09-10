import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { BotonAgregarComponent } from '../../components/boton-agregar/boton-agregar.component';
import { ModalBarberosComponent } from '../../components/modal-barberos/modal-barberos.component';



@Component({
  selector: 'app-barberos',
  imports: [TablaComponent, BotonAgregarComponent, ModalBarberosComponent],
  templateUrl: './barberos.component.html',
  styleUrl: './barberos.component.scss'
})
export class BarberosComponent {
  barberos: any[] = [];
  //ahora se usa un array de objetos para representar los barberos, luego se pediran a un servicio  
  ngOnInit(): void {
    this.barberos = [
      { id: 1, nombre: 'Barbero 1', comision: 100, ventas: 200, ganancias: 300, especialidad: 'Corte de cabello' },
      { id: 2, nombre: 'Barbero 2', comision: 150, ventas: 250, ganancias: 350, especialidad: 'Afeitado' }
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

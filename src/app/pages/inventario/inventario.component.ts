import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { Producto } from '../../interface/producto';
import { ModalProductosComponent } from '../../components/modal-productos/modal-productos.component';
import { BotonAgregarComponent } from '../../components/boton-agregar/boton-agregar.component';

@Component({
  selector: 'app-inventario',
  imports: [TablaComponent,ModalProductosComponent,BotonAgregarComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {
  productos: Producto[] = [
    { id: 1, producto: 'Cera para cabello', precio: 15, cantidad: 50, ganancia: 5, descripcion: 'Cera de alta calidad para peinados duraderos.' },
    { id: 2, producto: 'Shampoo', precio: 10, cantidad: 30, ganancia: 3, descripcion: 'Shampoo nutritivo para todo tipo de cabello.' },
    { id: 3, producto: 'Acondicionador', precio: 12, cantidad: 20, ganancia: 4, descripcion: 'Acondicionador hidratante para cabello suave y manejable.' },
    { id: 4, producto: 'Gel fijador', precio: 8, cantidad: 40, ganancia: 2, descripcion: 'Gel de fijación fuerte para estilos definidos.' },
    { id: 5, producto: 'Loción aftershave', precio: 18, cantidad: 15, ganancia: 6, descripcion: 'Loción refrescante para después del afeitado.' },
  ];

  displayedColumns: string[] = ['id', 'producto', 'precio', 'cantidad', 'ganancia', 'descripcion'];
 ngOnInit(): void {
  this.productos = this.productos;
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

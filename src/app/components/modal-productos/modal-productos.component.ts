import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-productos',
  imports: [],
  templateUrl: './modal-productos.component.html',
  styleUrl: './modal-productos.component.scss'
})
export class ModalProductosComponent {
 @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-gastos',
  imports: [],
  templateUrl: './modal-gastos.component.html',
  styleUrl: './modal-gastos.component.scss'
})
export class ModalGastosComponent {
 @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }
}

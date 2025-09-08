import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-barberos',
  imports: [],
  templateUrl: './modal-barberos.component.html',
  styleUrl: './modal-barberos.component.scss'
})
export class ModalBarberosComponent {
 @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }
}

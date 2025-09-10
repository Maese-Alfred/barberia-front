import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-cierre',
  imports: [],
  templateUrl: './modal-cierre.component.html',
  styleUrl: './modal-cierre.component.scss'
})
export class ModalCierreComponent {

  // luego se debe de hacer que en lugar de un formulario para enviar la informacion todo se extraiga de los servicios del backend
  // y se envie la informacion al backend para que se guarde en la base de datos
 @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }
}

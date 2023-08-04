import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faClose, faBars, faUser, faTag, faCheckSquare, faClock, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface inputData {
  todo: ToDo
}

interface outputData {
  rta: boolean
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare =faCheckSquare;
  faClock = faClock;
  todo!: ToDo;

  // @Inject ---> recibir info en el modal
  constructor(private dialogRef: DialogRef<outputData>, @Inject(DIALOG_DATA) data: inputData) {
    this.todo = data.todo
  }

  close() {
    this.dialogRef.close()
  }

  // Recibir info del modal
  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta })
  }
}

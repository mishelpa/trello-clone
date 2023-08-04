import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { faClose, faBars, faUser, faTag, faCheckSquare, faClock, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private dialogRef: DialogRef){}
  close() {
    this.dialogRef.close()
  }
}

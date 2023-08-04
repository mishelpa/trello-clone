import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent implements OnInit {

  formAdd!: UntypedFormGroup;
  formColumn!: UntypedFormGroup;
  faPlus = faPlus;
  faX = faX;
  show: boolean = false;
  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ],
      show: false
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ],
      show: false
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games'
        }
      ],
      show: false
    }
  ];

  todos: ToDo[] = [];

  doing: ToDo[] = [];

  done: ToDo[] = [];

  constructor(private fb: UntypedFormBuilder, private dialog: Dialog){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
      this.formAdd = this.fb.group({
        task: [''],
      });
      this.formColumn = this.fb.group({
        newColumn: [''],
    });
  }

  drop( event: CdkDragDrop<ToDo[]> ) {
    if( event.previousContainer == event.container) {
      moveItemInArray(this.todos, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  addColumn() {
    if(this.formColumn.controls['newColumn'].value) {
      this.columns.push({
        title: this.formColumn.controls['newColumn'].value,
        todos: [],
        show: false,
      })
      this.show = false;
      this.formColumn.controls['newColumn'].setValue('')
    }
  }

  addTask(col: Column) {
    if(this.formAdd.controls['task'].value) {
      col.todos.push(
        { id: (col.todos.length + 1).toString(),
          title: this.formAdd.controls['task'].value
        }
      );
      this.close(col)
    }
  }

  close(col: Column) {
    col.show = false;
    this.formAdd.controls['task'].setValue('');
  }

  closeColumn() {
    this.show = false;
    this.formColumn.controls['newColumn'].setValue('');
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false
    })
  }
}

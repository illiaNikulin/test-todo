import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ITodo) { }

}



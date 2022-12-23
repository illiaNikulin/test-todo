import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: ITodo;
  @Output() onRemoveTodo = new EventEmitter<ITodo>();
  @Output() onEditTodo = new EventEmitter<ITodo>();

  constructor() { }

  ngOnInit() {
  }

}

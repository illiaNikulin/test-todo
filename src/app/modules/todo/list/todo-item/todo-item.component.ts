import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() item: ITodo;
  @Output() onRemoveTodo = new EventEmitter<ITodo>();
  @Output() onEditTodo = new EventEmitter<ITodo>();
  @Output() onViewTodo = new EventEmitter<ITodo>();

}

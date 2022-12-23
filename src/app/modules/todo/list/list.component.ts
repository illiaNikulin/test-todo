import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';
import { TodoCreateModalComponent } from 'src/app/modals/todo-create-modal/todo-create-modal.component';
import { TodoModalComponent } from 'src/app/modals/todo-modal/todo-modal.component';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TodoService]
})
export class ListComponent implements OnInit {
  todoList: ITodo[];
  doneList: ITodo[];
  constructor(
    private todoService: TodoService,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.todoService.getTodoList().pipe(take(1)).subscribe(data => {
      this.todoList = data.filter(el => !el.done);
      this.doneList = data.filter(el => el.done);
      console.log('this.todoList', this.todoList);
      console.log('this.doneList', this.doneList);

      console.log('data', data);

    });
  }

  changeTodoDone(todo: ITodo, index: number) {
    todo.done = !todo.done;
    todo.index = index;
    this.todoService.changeTodoDone(todo.id, todo).subscribe(() => {
      this.matSnackBar.open(`Todo "${todo.title}" set as ${todo.done ? 'Done' : 'Not done'}!`, null, {
        duration: 1000,
      })
    });
  }

  drop(event: CdkDragDrop<ITodo[]>) {
    setTimeout(() => {
      this.changeTodoDone(event.container.data[event.currentIndex], event.currentIndex);
    }, 0);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  removeTodo(todo: ITodo) {
    this.todoService.removeTodo(todo.id).pipe(take(1)).subscribe(() => {
      this.matSnackBar.open(`Todo "${todo.title}" set as ${todo.done ? 'Done' : 'Not done'}!`, null, {
        duration: 1000,
      })
      this.loadData();
    });
  }

  openTodoDialog(todo: ITodo) {
    this.dialog.open(TodoModalComponent, {
      data: todo
    });
  }

  openTodoCreateDialog() {
    let dialog = this.dialog.open(TodoCreateModalComponent);
    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.todoService.postTodoDone({...res, done: false, createdAt: new Date().toISOString(), index: 0}).pipe(take(1)).subscribe(() => {
          this.loadData();
        })
      }
    })
  }


}

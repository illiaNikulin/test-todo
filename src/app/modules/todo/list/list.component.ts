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
  searchDone: string;
  searchTodo: string;

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
    });
  }

  changeTodoDone(todo: ITodo, index: number) {
    todo.done = !todo.done;
    todo.index = index;
    this.todoService.putTodo(todo.id, todo).subscribe(() => {
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
      this.matSnackBar.open(`Todo "${todo.title}" set as ${todo.done ? 'Done' : 'Todo'}!`, null, {
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

  openTodoCreateDialog(todo?: ITodo) {

    const config = todo ? {data: todo} : null;
    let dialog = this.dialog.open(TodoCreateModalComponent, config);

    dialog.afterClosed().subscribe(res => {
      if (res) {

        if (todo) {
          this.todoService.putTodo(todo.id, {...todo, ...res }).pipe(take(1)).subscribe((eTodo) => {
            this.matSnackBar.open(`Todo "${eTodo.title}" changed!`, null, {
              duration: 1000,
            })
            this.loadData();
          })
        } else {
          this.todoService.postTodoDone({...res, done: false, createdAt: new Date().toISOString(), index: 0}).pipe(take(1)).subscribe((nTodo) => {
            this.matSnackBar.open(`Todo "${nTodo.title}" created!`, null, {
              duration: 1000,
            })
            this.loadData();
          })
        }


      }
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TodoRoutingModule } from './todo-routing.module';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TodoItemComponent } from './list/todo-item/todo-item.component';



@NgModule({
  declarations: [ListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    DragDropModule,
    CommonModule,
    MatDialogModule
  ]
})
export class TodoModule { }

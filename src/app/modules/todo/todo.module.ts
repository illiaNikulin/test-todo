import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TodoRoutingModule } from './todo-routing.module';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TodoItemComponent } from './list/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';



@NgModule({
  declarations: [
    ListComponent,
    TodoItemComponent,
    FilterPipe
  ],
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
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ]
})
export class TodoModule { }

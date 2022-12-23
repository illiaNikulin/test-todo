import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-todo-create-modal',
  templateUrl: './todo-create-modal.component.html',
  styleUrls: ['./todo-create-modal.component.scss']
})
export class TodoCreateModalComponent {

  constructor(private dialogRef: MatDialogRef<TodoCreateModalComponent>, private fb: FormBuilder) { }
  todoForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
  });


  onSubmit() {
    if (this.todoForm.valid) {
      this.dialogRef.close(this.todoForm.value);
    }
  }

}

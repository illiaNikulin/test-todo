import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-create-modal',
  templateUrl: './todo-create-modal.component.html',
  styleUrls: ['./todo-create-modal.component.scss']
})
export class TodoCreateModalComponent implements OnInit {

  todoForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(
    private dialogRef: MatDialogRef<TodoCreateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.data) {
      this.todoForm.patchValue(this.data)
    }
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.dialogRef.close(this.todoForm.value);
    }
  }

}

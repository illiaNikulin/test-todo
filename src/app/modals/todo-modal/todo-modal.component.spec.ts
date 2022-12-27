import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoModalComponent } from './todo-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const testTodo = {
  id: 1,
  index: 0,
  title: 'Kitchen Cleanup',
  description: 'Clean my dirty kitchen',
  createdAt: '2022-12-23T13:40:39.258Z',
  done: true
};

describe('TodoModalComponent', () => {
  let component: TodoModalComponent;
  let fixture: ComponentFixture<TodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA, useValue: {
            data: testTodo
          }
        }
      ]
    }).compileComponents();
  }));


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

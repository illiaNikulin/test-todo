import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateModalComponent } from './todo-create-modal.component';
import { MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatDialogRef, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const testTodo = {
  id: 1,
  index: 0,
  title: 'Kitchen Cleanup',
  description: 'Clean my dirty kitchen',
  createdAt: '2022-12-23T13:40:39.258Z',
  done: true
};

describe('TodoCreateModalComponent', () => {
  let component: TodoCreateModalComponent;
  let fixture: ComponentFixture<TodoCreateModalComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCreateModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA, useValue: {
            data: testTodo
          }
        }
      ],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

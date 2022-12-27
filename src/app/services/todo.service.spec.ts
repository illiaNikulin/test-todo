import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';


describe('TodoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TodoService
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
   });

   it('should have getTodoList function', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service.getTodoList).toBeTruthy();
   });

});

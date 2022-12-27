import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITodo } from '../models/todo.interface';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private BASE_URL_TODO = `${environment.api_url}/tasks`;
  constructor(private http: HttpClient) { }


  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.BASE_URL_TODO);
  }

  putTodo(id: number, todo: ITodo) {
    return this.http.put<ITodo>(`${this.BASE_URL_TODO}/${id}`, todo);
  }

  postTodoDone(todo: ITodo) {
    return this.http.post<ITodo>(`${this.BASE_URL_TODO}`, todo);
  }

  removeTodo(id: number) {
    return this.http.delete(`${this.BASE_URL_TODO}/${id}`);
  }
}

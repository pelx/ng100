import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${ this.baseRoute }/${ id }`)
      .pipe(
        map((value) => new User(value))
      );
  }
}

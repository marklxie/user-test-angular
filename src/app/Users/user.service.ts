import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl: string = "http://localhost:61172/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http: HttpClient 
  ) { 

  }

  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  getUser(user: User): Observable<User>{
    return this.http.get(`${baseurl}/${user.id}`) as Observable<User>;
  }
}

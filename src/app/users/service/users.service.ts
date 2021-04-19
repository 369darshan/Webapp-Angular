import { Injectable } from '@angular/core';
import {Observable ,of} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/user';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  

  constructor(private http: HttpClient) { }

  // private async request(method: string, url: string, data?: any) {
  //   // const token = await this.oktaAuth.getAccessToken();

  //   //console.log( JSON.stringify(data));
  //   const result = this.http.request(method, url, {
  //     body: data,
  //     responseType: 'json',
  //     observe: 'body',
  //     headers: {
  //       // Authorization: `Bearer ${token}`
  //     }
  //   });
  //   // return new Promise<any>((resolve, reject) => {
  //   //   result.subscribe(resolve as any, reject as any);
  //   // });
  // }
 
  getUsers(): Observable<User[]> {
    
    // return this.request('get', `${baseUrl}/Users`);
    
     return this.http.get<User[]>(`${baseUrl}/users`)
    //  .pipe(
      
    //    map(res => res["User"])
    //   // shareReplay();
    //    );
    // this.users = this.http.get(`${baseUrl}/users`);
  }

  getUser(id: string) {
    // return this.request('get', `${baseUrl}/user/${id}`);
    return this.http.get<User[]>(`${baseUrl}/users/${id}`);
  }

  createUser(User: User) {
    console.log('createUser ' + JSON.stringify(User));
    // return this.request('post', `${baseUrl}/user`, User);
    return this.http.post(`${baseUrl}/user`, User);
  }

  updateUser(User: User) {
    console.log('updateUser ' + JSON.stringify(User));
    // return this.request('post', `${baseUrl}/user/${User.id}`, User);
    return this.http.post(`${baseUrl}/user/${User.id}`, User);

  }

  deleteUser(id: string) {
    // return this.request('delete', `${baseUrl}/user/${id}`);
        return this.http.delete(`${baseUrl}/user/${id}`);

  }

}

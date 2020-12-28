import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './../../models/user';

const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    // const token = await this.oktaAuth.getAccessToken();

    //console.log( JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        // Authorization: `Bearer ${token}`
      }
    });
    // return new Promise<any>((resolve, reject) => {
    //   result.subscribe(resolve as any, reject as any);
    // });
  }

getUsers() {
    console.log('getUsers called');
    // return this.request('get', `${baseUrl}/Users`);
    var udata = this.http.get( `${baseUrl}/Users`);
    console.log(udata);
    
  }

  getUser(id: string) {
    return this.request('get', `${baseUrl}/User/${id}`);
  }

  createUser(User: User) {
    console.log('createUser ' + JSON.stringify(User));
    return this.request('post', `${baseUrl}/User`, User);
  }

  updateUser(User: User) {
    console.log('updateUser ' + JSON.stringify(User));
    return this.request('post', `${baseUrl}/User/${User.id}`, User);
  }

  deleteUser(id: string) {
    return this.request('delete', `${baseUrl}/User/${id}`);
  }

  
  // getusers(data){
  //   data.get('/users',(req,res)=>{
  //     return this.request('get', `${baseUrl}/User`);
  //   })
  // }
}


import { Component, OnInit , Input } from '@angular/core';
import { UsersService } from './service/users.service';
import { User } from './../models/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Userlist = [];
  
  // @Input()
  users$: Observable<User[]>;

  constructor(private UsersService: UsersService) { }


  ngOnInit(): void {
    //const users$ = this.refresh();
    this.UsersService.getUsers().subscribe((data)=>this.Userlist = data);
  }

  getUser(id: string){
    console.log(id);
    this.UsersService.getUser(id).subscribe((data)=>this.Userlist = data);
    
  }

  deleteUser(id){
    this.UsersService.deleteUser(id).subscribe();

  }

  async refresh() {
    // this.loading = true;
      await this.UsersService.getUsers().subscribe((response)=>{
      console.log("Respose from user API: ", response);
      
    },(error)=>{
      console.log('Error is: ', error);
    })
   
  }

   

  }
  

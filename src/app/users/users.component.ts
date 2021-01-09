
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

  editUser(id){
    console.log(id);
    
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
  

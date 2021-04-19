import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userinfo=[];
  id=[];
  
  constructor(private UsersService: UsersService) {  }

  ngOnInit(): void {
    // this.UsersService.getUser(id).subscribe((user)=>this.userinfo = user);
  }

  getUser(id: string){
    this.UsersService.getUser(id).subscribe((data)=>this.userinfo = data);
  }

}

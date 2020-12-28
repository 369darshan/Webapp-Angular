
import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // dataSource = new MatTableDataSource<any>();
  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    // this.loading = true;
    const data = await this.UsersService.getUsers();
    // this.dataSource.data = data;
    // this.loading = false;
  }

  

  }
  

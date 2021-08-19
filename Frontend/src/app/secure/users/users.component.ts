import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  lastPage: number;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.usersService.delete(id)
        .subscribe(res => {
          this.users = this.users.filter(user => user.id !== id);
        })
    }
  }

  load(page = 1){
    this.usersService.all(page)
    .subscribe((res : {data: User[], meta: {page: number, last_page: number, total: number}}) => {
      this.users = res.data;
      this.lastPage = res.meta.last_page
    });
  }
}

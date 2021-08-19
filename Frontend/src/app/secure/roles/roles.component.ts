import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles = [];

  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.roleService.all()
      .subscribe((res: Role[]) => {
        this.roles = res;
      })
  }


  delete(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.roleService.delete(id)
        .subscribe(res => {
          this.roles = this.roles.filter(user => user.id !== id);
        })
    }
  }

}

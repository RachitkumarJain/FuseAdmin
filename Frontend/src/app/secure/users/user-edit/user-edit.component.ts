import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/interfaces/role';
import { User } from 'src/app/interfaces/user';
import { RoleService } from 'src/app/services/role.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];
  id: number

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      role_id: ''
    });

    this.roleService.all()
      .subscribe((res: Role[]) => {
        this.roles = res;
      });

    this.id = this.route.snapshot.params.id;

    this.userService.getSingle(this.id)
      .subscribe((user: User) => {
        this.form.patchValue({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          role_id: user.role.id
        });
      });
  }

  submit() {
    this.userService.update(this.id, this.form.getRawValue())
      .subscribe(res => {
        this.router.navigate(['/users']);
      })
  }

}

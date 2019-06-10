import {Component, OnInit} from '@angular/core';
import {ListUserService} from '../../services/list-user/list-user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: ListUserService) {
  }

  users = [];
  birthday = new Date(1988, 3, 15);
  page = 1;

  ngOnInit() {
    this.more();
  }
  more() {
    this.userService.getListUsers(this.page).subscribe((res: any) => {
      this.users = this.users.concat(res.data);
      console.log(this.users);
      this.page++;
    });
  }
}

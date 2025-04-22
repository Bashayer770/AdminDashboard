import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../data/user.data';

@Component({
  selector: 'app-users-joined-today',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-joined-today.component.html',
})
export class UsersJoinedTodayComponent implements OnInit {
  todayUsers: User[] = [];
  isExpanded = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const today = new Date().toISOString().slice(0, 10);
    const allUsers = this.userService.getUsers();

    this.todayUsers = allUsers.filter((user) =>
      user.createdAt.startsWith(today)
    );
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}

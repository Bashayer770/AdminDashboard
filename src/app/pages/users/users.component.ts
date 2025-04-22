import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../data/user.data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  suggestions: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];
  }

  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredUsers = [...this.users];
      this.suggestions = [];
      return;
    }

    this.suggestions = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    this.filteredUsers = [...this.suggestions];
  }

  selectSuggestion(name: string): void {
    this.searchTerm = name;
    this.suggestions = [];
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  updateStatus(userId: number, newStatus: string) {
    this.userService.updateUserStatus(userId, newStatus as any);
    this.onSearch();
  }

  softDelete(userId: number): void {
    this.userService.updateUserStatus(userId, 'inactive');
    this.filteredUsers = this.userService.getUsers();
  }
}

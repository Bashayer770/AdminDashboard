import { Injectable } from '@angular/core';
import { User, USERS } from '../data/user.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users: User[] = USERS;

  getUsers(): User[] {
    return this.users.filter((user) => user.status !== 'deleted');
  }

  updateUserStatus(id: number, newStatus: User['status']): void {
    const user = this.users.find((u) => u.id === id);
    if (user) user.status = newStatus;
  }

  softDeleteUser(id: number): void {
    this.updateUserStatus(id, 'deleted');
  }
}

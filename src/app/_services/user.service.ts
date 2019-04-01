import { Injectable } from '@angular/core';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {

  users: [User];
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
 }

  register(user: User) {
    console.log(user)
    user.id = this.users.length + 1;
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

}

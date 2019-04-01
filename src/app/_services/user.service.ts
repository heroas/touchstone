import { Injectable } from '@angular/core';
import { User,Hero } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  users: [User];
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
 }

  register(newUser: User) {

    let filteredUsers = this.users.filter(user => {
      return user.username === newUser.username
    });

    if(filteredUsers.length > 0)
      return null;


    newUser.id = this.users.length + 1;
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return newUser;
  }

  addHero(hero:Hero){
    let currentUser:User;
    this.authenticationService.currentUser.subscribe(x => currentUser = x);

    if(!currentUser.heroes)
      currentUser.heroes = []

    currentUser.heroes.push(hero);

    this.users.splice(this.users.findIndex(function(i){
        return i.id === currentUser.id;
    }), 1);

    this.users.push(currentUser)

    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

  }

  getHeroes(){
    let currentUser:User;
    this.authenticationService.currentUser.subscribe(x => currentUser = x);

    if(!currentUser.heroes)
      currentUser.heroes = []
    console.log(currentUser)

    return currentUser.heroes;
  }

}

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

  register(user: User) {
    console.log(user)
    user.id = this.users.length + 1;
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
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
      
    return currentUser.heroes;
  }

}

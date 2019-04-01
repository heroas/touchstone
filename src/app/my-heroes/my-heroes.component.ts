import { Component, OnInit } from '@angular/core';
import { Hero, User } from '../_models'
import { UserService,AuthenticationService } from '../_services';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {

  total: number;
  heroes: [Hero];

  constructor(root: AppComponent, private userService: UserService,  private authenticationService: AuthenticationService) {
    let currentUser:User;
    this.authenticationService.currentUser.subscribe(x => currentUser = x);

    root.page = currentUser.firstName + "'s Heroes"
  }

  ngOnInit() {
    var calcTotal = 0;
    this.heroes = this.userService.getHeroes();
    if(this.heroes != null && this.heroes.length>0){
      this.heroes.forEach(function(hero) {
        calcTotal = calcTotal + hero.price;
      });

      this.total = calcTotal;
    }
  }

}

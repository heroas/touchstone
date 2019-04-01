import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models'
import { HEROES } from '../_services';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroesList: Hero[]
  constructor() {
    this.heroesList = HEROES
   }

  ngOnInit() {
  }

}

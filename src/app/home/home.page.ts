import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../Service/heroes.service';
import { Heroes } from '../heroes/Entidades/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listaHeroes: Heroes[];

  constructor(private service: HeroesService, private router: Router) {}
  ngOnInit(): void {
    this.listaHeroes = this.service.getHeroes();
  }
  ionViewWillEnter() {
    this.listaHeroes = this.service.getHeroes();
  }

  goToHome() {}
  addNewPlace() {}
}

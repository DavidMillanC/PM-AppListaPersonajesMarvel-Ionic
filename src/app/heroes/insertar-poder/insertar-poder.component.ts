import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Heroes } from '../Entidades/Heroe';
import { ModalController } from '@ionic/angular';
import { HeroesService } from 'src/app/Service/heroes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-insertar-poder',
  templateUrl: './insertar-poder.component.html',
  styleUrls: ['./insertar-poder.component.scss'],
})
export class InsertarPoderComponent implements OnInit {
  Heroe: Heroes;
  power: string;
  constructor(
    private service: HeroesService,
    private actRoute: ActivatedRoute,
    private modal: ModalController,
    private ocont: AlertController
  ) {}
  @Input() Codigo: string;
  @Input() posicion: number;
  @Input() proceso: string;
  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      this.Heroe = this.service.getHeroeById(this.Codigo);
      for (let i = 0; i < this.Heroe.poderes.length; i++) {
        if (i === this.posicion) {
          this.power = this.Heroe.poderes[i];
        }
      }
    });
  }
  insertarPoder(poder) {
    this.service.insertarPoderes(this.Codigo, poder.value);
    this.modal.dismiss();
  }
  editarPower(poder) {
    this.service.editarPower(this.Codigo, this.posicion, poder.value);
    console.log(this.Codigo + ' - ' + this.posicion + ' - ' + poder.value);
    this.modal.dismiss();
  }
}

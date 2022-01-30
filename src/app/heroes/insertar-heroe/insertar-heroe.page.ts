import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Service/heroes.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-heroe',
  templateUrl: './insertar-heroe.page.html',
  styleUrls: ['./insertar-heroe.page.scss'],
})
export class InsertarHeroePage implements OnInit {
  constructor(
    private service: HeroesService,
    private router: Router,
    private modalController: ModalController
  ) {}

  option_selected: number;
  option_date: Date;
  nivelSeleccion(ev) {
    this.option_selected = ev.detail.value;
  }
  obtenerFecha(event) {
    this.option_date = event.detail.value;
  }
  ngOnInit() {}
  insertarHeroe(foto, nombre, alias, nacionalidad, residencia) {
    this.service.insertarHeroe(
      foto.value,
      nombre.value,
      alias.value,
      this.option_date,
      nacionalidad.value,
      residencia.value,
      this.option_selected
    );
    this.router.navigate(['/home']);
  }
}

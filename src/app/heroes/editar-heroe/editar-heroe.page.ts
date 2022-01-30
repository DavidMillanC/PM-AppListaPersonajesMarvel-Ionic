import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Heroes } from '../Entidades/Heroe';
import { ModalController } from '@ionic/angular';
import { HeroesService } from 'src/app/Service/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-heroe',
  templateUrl: './editar-heroe.page.html',
  styleUrls: ['./editar-heroe.page.scss'],
})
export class EditarHeroePage implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private oser: HeroesService,
    private modalComponent: ModalController
  ) {}

  @Input() idHeroe: string;
  Heroe: Heroes;

  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      this.Heroe = this.oser.getHeroeById(this.idHeroe);
    });
  }
  option_selected: number;
  nivelSeleccion(ev) {
    this.option_selected = ev.detail.value;
  }
  editarHeroe(foto, nombre, alias, fechaNacimiento, nacionalidad, residencia) {
    this.oser.editarHeroe(
      this.idHeroe,
      foto.value,
      nombre.value,
      alias.value,
      fechaNacimiento.value,
      nacionalidad.value,
      residencia.value,
      this.option_selected
    );
    this.modalComponent.dismiss();
  }

  dismissModal() {
    this.modalComponent.dismiss({
      dismissed: true,
    });
  }
  cerrar() {
    this.modalComponent.dismiss();
  }
}

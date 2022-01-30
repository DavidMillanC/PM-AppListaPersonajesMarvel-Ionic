import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../Entidades/Heroe';
import { HeroesService } from 'src/app/Service/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { InsertarPoderComponent } from '../insertar-poder/insertar-poder.component';
import { EditarHeroePage } from '../editar-heroe/editar-heroe.page';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.page.html',
  styleUrls: ['./detalle-heroe.page.scss'],
})
export class DetalleHeroePage implements OnInit {
  Heroe: Heroes;
  index: number;
  @Input() data: any;
  constructor(
    private servicio: HeroesService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private ocont: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('heroeId');
      this.Heroe = this.servicio.getHeroeById(id);
    });
  }
  getHeroeByCode() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('heroeId');
      this.Heroe = this.servicio.getHeroeById(id);
    });
  }
  async eliminarHeroe() {
    const alert = await this.ocont.create({
      header: 'Eliminar Heroe',
      message: 'Desea eliminar el Heroe?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.servicio.deleteHeroe(this.Heroe.idHeroe);
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InsertarPoderComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        Codigo: this.Heroe.idHeroe,
      },
    });

    return await modal.present();
  }

  ionViewWillEnter() {
    this.getHeroeByCode();
  }

  async presentModalEdit() {
    const modal = await this.modalController.create({
      component: EditarHeroePage,
      cssClass: 'my-custom-class',
      componentProps: {
        idHeroe: this.Heroe.idHeroe,
        foto: this.Heroe.foto,
        nombre: this.Heroe.nombre,
        alias: this.Heroe.alias,
        fechaNacimiento: this.Heroe.fechaNacimiento,
        nacionalidad: this.Heroe.nacionalidad,
        residencia: this.Heroe.residencia,
        nivel: this.Heroe.nivel,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
  async presentModalPowers(power) {
    for (let i = 0; i < this.Heroe.poderes.length; i++) {
      if (this.Heroe.poderes[i] == power) {
        this.index = i;
      }
    }
    const modal = await this.modalController.create({
      component: InsertarPoderComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        Codigo: this.Heroe.idHeroe,
        posicion: this.index,
        proceso: 'Edicion',
      },
    });

    return await modal.present();
  }
  async eliminarPowerHeroe(power) {
    for (let i = 0; i < this.Heroe.poderes.length; i++) {
      if (this.Heroe.poderes[i] == power) {
        this.index = i;
      }
    }
    const alert = await this.ocont.create({
      header: 'Eliminar Poder',
      message: 'Desea eliminar el poder?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.servicio.deletePowerHeroe(this.Heroe.idHeroe, this.index);
          },
        },
      ],
    });
    await alert.present();
  }
}

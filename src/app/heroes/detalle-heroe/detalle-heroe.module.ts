import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleHeroePageRoutingModule } from './detalle-heroe-routing.module';

import { DetalleHeroePage } from './detalle-heroe.page';
import { InsertarPoderModule } from '../insertar-poder/insertar-poder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleHeroePageRoutingModule,
    InsertarPoderModule,
  ],
  declarations: [DetalleHeroePage],
  exports: [],
})
export class DetalleHeroePageModule {}

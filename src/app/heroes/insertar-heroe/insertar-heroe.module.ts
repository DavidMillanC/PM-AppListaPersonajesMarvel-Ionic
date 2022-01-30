import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarHeroePageRoutingModule } from './insertar-heroe-routing.module';

import { InsertarHeroePage } from './insertar-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarHeroePageRoutingModule
  ],
  declarations: [InsertarHeroePage]
})
export class InsertarHeroePageModule {}

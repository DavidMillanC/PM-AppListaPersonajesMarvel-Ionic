import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarHeroePageRoutingModule } from './editar-heroe-routing.module';

import { EditarHeroePage } from './editar-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarHeroePageRoutingModule
  ],
  declarations: [EditarHeroePage]
})
export class EditarHeroePageModule {}

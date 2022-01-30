import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { InsertarPoderComponent } from './insertar-poder.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [InsertarPoderComponent],
  exports: [InsertarPoderComponent],
})
export class InsertarPoderModule {}

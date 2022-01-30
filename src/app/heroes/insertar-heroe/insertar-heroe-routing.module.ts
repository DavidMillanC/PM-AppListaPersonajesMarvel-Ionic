import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarHeroePage } from './insertar-heroe.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarHeroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarHeroePageRoutingModule {}

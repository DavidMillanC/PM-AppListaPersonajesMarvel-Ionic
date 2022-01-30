import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarHeroePage } from './editar-heroe.page';

const routes: Routes = [
  {
    path: '',
    component: EditarHeroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarHeroePageRoutingModule {}

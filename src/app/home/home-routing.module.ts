import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DetalleHeroePageModule } from '../heroes/detalle-heroe/detalle-heroe.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'detalle-heroe',
    loadChildren: () =>
      import('../heroes/detalle-heroe/detalle-heroe.module').then(
        (m) => m.DetalleHeroePageModule
      ),
  },
  {
    path: 'insertar-heroe',
    loadChildren: () =>
      import('../heroes/insertar-heroe/insertar-heroe.module').then(
        (m) => m.InsertarHeroePageModule
      ),
  },
  {
    path: 'editar-heroe',
    loadChildren: () =>
      import('../heroes/editar-heroe/editar-heroe.module').then(
        (m) => m.EditarHeroePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

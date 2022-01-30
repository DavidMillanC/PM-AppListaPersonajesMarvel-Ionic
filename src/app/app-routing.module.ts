import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: ':heroeId',
        loadChildren: () =>
          import('./heroes/detalle-heroe/detalle-heroe.module').then(
            (m) => m.DetalleHeroePageModule
          ),
      },
      {
        path: 'insertar-heroe',
        loadChildren: () =>
          import('./heroes/insertar-heroe/insertar-heroe.module').then(
            (m) => m.InsertarHeroePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

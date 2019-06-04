import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MenuComponent } from './menu/menu.component';
import { CrearReunionComponent } from './crear-reunion/crear-reunion.component';
import { BuscarReunionComponent } from './buscar-reunion/buscar-reunion.component';
import { ReunionComponent } from './reunion/reunion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'crear-reunion',
    component: CrearReunionComponent
  },
  {
    path: 'buscar-reunion',
    component: BuscarReunionComponent
  },
  {
    path: 'reunion',
    component: ReunionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarComponent } from './registrar/registrar.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CrearReunionComponent } from './crear-reunion/crear-reunion.component';
import { ReunionComponent } from './reunion/reunion.component';
import { BuscarReunionComponent } from './buscar-reunion/buscar-reunion.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    MenuComponent,
    RegistrarComponent,
    CrearReunionComponent,
    ReunionComponent,
    BuscarReunionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

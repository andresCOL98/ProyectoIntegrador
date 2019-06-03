import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private uri = 'http://' + window.location.hostname + ':9000/api/v1';
  private isUserLoggedIn ;
  public usserLogged: User;

  constructor(
    private http: HttpClient
  ) { this.isUserLoggedIn = false;
  }

  public registrarse(usuario) {
    return this.http.post(this.uri + '/registrar' , usuario);
  }

  public findAllUser(): Observable<any> {
    return this.http.get(this.uri + '/registrar/');
  }

  public findByUserName(nombreUsuario): Observable<any> {
    return this.http.get(this.uri + '/buscarUser/' + nombreUsuario);
  }

  public login(nombreUsuario, contrasena): Observable<any> {
      return this.http.get(this.uri + '/login/' + nombreUsuario + '/' + contrasena);
  }

  public setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}

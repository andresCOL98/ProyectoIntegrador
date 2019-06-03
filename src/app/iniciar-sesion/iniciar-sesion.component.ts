import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  public users;
  public username;
  public contrasena;
  public invalidLogin = false;

  constructor(
    private service: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.findAllUser()
        .subscribe(response => {
          console.log(response);
          this.users = response;
        });
  }

  public login() {
    this.service.login(this.username, this.contrasena)
      .subscribe(response => {
        this.service.findByUserName(this.username)
          .subscribe(data => {
            console.log(data);
            this.service.setUserLoggedIn(data);
          });
        this.router.navigate(['/menu']);
      }, error => {
        console.error(error.error);
      });
  }

}

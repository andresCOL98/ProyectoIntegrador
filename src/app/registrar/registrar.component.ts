import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public nombre;
  public apellido;
  public numeroIdentidad;
  public correo;
  public cargo;
  public nombreUsuario;
  public contrasena;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public registrarse() {
    const usuario = {
      'nombre': this.nombre,
      'apellido': this.apellido,
      'numeroIdentidad': this.numeroIdentidad,
      'correo': this.correo,
      'cargo': this.cargo,
      'nombreUsuario': this.nombreUsuario,
      'contraseña': this.contrasena
    };

    this.usuarioService.registrarse(usuario)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
      });

  }

}

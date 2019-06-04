import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-crear-reunion',
  templateUrl: './crear-reunion.component.html',
  styleUrls: ['./crear-reunion.component.css']
})
export class CrearReunionComponent implements OnInit {
  public nombreEntidad;
  public numeroReunion;
  public tituloReunion;
  public fecha;
  public hora;
  public lugar;
  public user: User;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public reunion() {

    const reunion = {
      'nombreEntidad': this.nombreEntidad,
      'numeroReunion': this.numeroReunion,
      'tituloReunion': this.tituloReunion,
      'lugar': this.lugar
    }

    this.usuarioService.getUserLoggedIn()
      .subscribe(data => {
        this.user = data;
        this.usuarioService.registrarReuniones(data.id, reunion)
        .subscribe(res => {
          this.router.navigate(['/menu']);
        });
      });

  }

}

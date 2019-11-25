import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectosService } from '../proyectos.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.scss']
})
export class ListaProyectosComponent implements OnInit {

  proyectos: Proyecto[];

  proyectoSeleccionado: Proyecto;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {;
    this.getproyectos()
  }

  getproyectos() : void {
    this.proyectoService.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }

  onSelect(proyectoSeleccionado: Proyecto): void {
    this.proyectoSeleccionado = proyectoSeleccionado;
  }
}

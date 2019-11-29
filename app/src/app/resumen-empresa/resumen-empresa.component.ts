import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Resumen} from '../resumen'
import { ProyectosService } from '../proyectos.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-resumen-empresa',
  templateUrl: './resumen-empresa.component.html',
  styleUrls: ['./resumen-empresa.component.scss']
})
export class ResumenEmpresaComponent implements OnInit {

  @Input() mostrarPersonas;
  @Output() mostrarPersonasChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() mostrarProyectos;
  @Output() mostrarProyectosChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  resumen: Resumen = {
    personas: 0,
    proyectos: 0
  }
  constructor(private proyectoService: ProyectosService, private personaService: PersonasService) { }

  ngOnInit() {;
    this.getproyectos();
    this.getPersonas();
  }

  getproyectos() : void {
    this.proyectoService.getProyectos().subscribe(proyectos => this.resumen.proyectos = proyectos.length);
  }

  getPersonas() : void {
    this.personaService.getPersonas().subscribe(personas => this.resumen.personas = personas.length);
  }

  togglePersonas(): void {
    this.mostrarPersonas = !this.mostrarPersonas;
    this.mostrarPersonasChange.emit(this.mostrarPersonas);
  }

  toggleProyectos(): void {
    this.mostrarProyectos = !this.mostrarProyectos;
    this.mostrarProyectosChange.emit(this.mostrarProyectos);
  }

}

import { Component } from '@angular/core';
import { Persona } from './persona';
import { PersonasRequeridas } from './personasRequeridas';
import { PersonasService } from './personas.service';
import { Proyecto } from './proyecto';
import { ProyectosService } from './proyectos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyectos y Personas';

  mostrarPersonas = false;
  mostrarProyectos = false;

  constructor(private personaService : PersonasService, private proyectoService : ProyectosService) {}

  nuevaPersona(): void {
    const persona = new Persona();
    this.personaService.personaSeleccionadaParaEdicion(persona);
  }

  nuevoProyecto(): void {
    const proyecto = new Proyecto();
    this.proyectoService.proyectoSeleccionadaParaEdicion(proyecto);
  }
}

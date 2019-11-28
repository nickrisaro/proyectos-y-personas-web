import { Component } from '@angular/core';
import { Persona } from './persona';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyectos y Personas';

  mostrarPersonas = false;
  mostrarProyectos = false;

  constructor(private personaService : PersonasService) {}

  nuevaPersona(): void {
    const persona = new Persona();
    this.personaService.personaSeleccionadaParaEdicion(persona);
  }
}

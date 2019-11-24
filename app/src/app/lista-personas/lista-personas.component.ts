import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {

  personas: Persona[];

  personaSeleccionada: Persona;

  constructor(private personaService: PersonasService) { }

  ngOnInit() {;
    this.getPersonas()
  }

  getPersonas() : void {
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
  }

  onSelect(personaSeleccionada: Persona): void {
    this.personaSeleccionada = personaSeleccionada;
  }
}

import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {

  personas: Persona[] = [new Persona("Nayla", 0, 0, 3), new Persona("Santiago", 2, 2, 3)]
  personaSeleccionada: Persona;

  constructor() { }

  ngOnInit() {
  }

  onSelect(personaSeleccionada: Persona): void {
    this.personaSeleccionada = personaSeleccionada;
  }
}

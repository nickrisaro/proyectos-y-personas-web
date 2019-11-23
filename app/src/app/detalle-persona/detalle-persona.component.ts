import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.scss']
})
export class DetallePersonaComponent implements OnInit {
  @Input() persona: Persona;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Resumen} from '../resumen'

@Component({
  selector: 'app-resumen-empresa',
  templateUrl: './resumen-empresa.component.html',
  styleUrls: ['./resumen-empresa.component.scss']
})
export class ResumenEmpresaComponent implements OnInit {

  @Input() mostrarPersonas;
  @Output() mostrarPersonasChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  resumen: Resumen = {
    personas: 2,
    proyectos: 2
  }

  constructor() { }

  ngOnInit() {
  }

  togglePersonas(): void {
    this.mostrarPersonas = !this.mostrarPersonas;
    this.mostrarPersonasChange.emit(this.mostrarPersonas);
  }
}

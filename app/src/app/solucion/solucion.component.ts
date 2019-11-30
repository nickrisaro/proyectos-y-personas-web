import { Component, OnInit, Input } from '@angular/core';
import { ResumenProyecto } from '../resumenProyecto'
import { SolucionesService } from '../soluciones.service';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.scss']
})
export class SolucionComponent implements OnInit {

  @Input() solucion: ResumenProyecto[];

  @Input() paraResumen: boolean

  constructor(private solucionService : SolucionesService) { }

  ngOnInit() {
    if (!this.paraResumen) {
      this.solucionService.solucionGenerada.subscribe((solucion) => {this.solucion = solucion});
    }
  }

  cerrar() {
    this.solucion = null;
  }

}

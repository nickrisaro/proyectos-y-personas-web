import { Component, OnInit } from '@angular/core';
import { ResumenProyecto } from '../resumenProyecto'
import { SolucionesService } from '../soluciones.service';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.scss']
})
export class SolucionComponent implements OnInit {

  solucion: ResumenProyecto[];

  constructor(private solucionService : SolucionesService) { }

  ngOnInit() {
    this.solucionService.solucionGenerada.subscribe((solucion) => {this.solucion = solucion});
  }

}

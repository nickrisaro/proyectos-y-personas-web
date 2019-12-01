import { Component, OnInit } from '@angular/core';
import { ResumenProyecto } from '../resumenProyecto';
import { SolucionesService } from '../soluciones.service';

@Component({
  selector: 'app-comparar-soluciones',
  templateUrl: './comparar-soluciones.component.html',
  styleUrls: ['./comparar-soluciones.component.scss']
})
export class CompararSolucionesComponent implements OnInit {

  soluciones: ResumenProyecto[][];

  constructor(private solucionesService : SolucionesService) { }

  ngOnInit() {
  }

  buscarSoluciones() {
    this.solucionesService.buscarSoluciones().subscribe((soluciones) => {this.soluciones = soluciones});
  }

}

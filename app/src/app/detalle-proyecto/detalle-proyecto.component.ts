import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectosService } from '../proyectos.service';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.scss']
})
export class DetalleProyectoComponent implements OnInit {
  @Input() proyecto: Proyecto;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
  }

  editar() {
    this.proyectoService.proyectoSeleccionadaParaEdicion(this.proyecto);
  }
}

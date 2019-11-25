import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.scss']
})
export class DetalleProyectoComponent implements OnInit {
  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit() {
  }

}

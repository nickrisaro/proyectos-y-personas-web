import { Component, OnInit } from '@angular/core';
import {Resumen} from '../resumen'

@Component({
  selector: 'app-resumen-empresa',
  templateUrl: './resumen-empresa.component.html',
  styleUrls: ['./resumen-empresa.component.scss']
})
export class ResumenEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resumen: Resumen = {
    personas: 10,
    proyectos: 2
  }

}

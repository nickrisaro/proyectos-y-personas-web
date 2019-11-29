import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectosService } from '../proyectos.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.scss']
})
export class FormProyectoComponent implements OnInit {

  proyecto: Proyecto;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit() {
    this.proyectoService.editarProyecto.subscribe(proyecto => {
      this.proyecto = proyecto;
    });
  }

  onSave(): void {
    this.proyectoService.guardar(this.proyecto).subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.proyecto = null;
  }

}

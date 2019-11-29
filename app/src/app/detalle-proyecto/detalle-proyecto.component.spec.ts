import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoComponent } from './detalle-proyecto.component';
import { Proyecto } from '../proyecto';

import {
  MatCardModule, MatIconModule, MatChipsModule, MatExpansionModule
} from '@angular/material';
import { ProyectosService } from '../proyectos.service';
import PersonasRequeridas from '../personasRequeridas';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockProyectosService extends ProyectosService {
  proyectoSeleccionada : Proyecto;
  constructor(){
    super(null);
  }
  proyectoSeleccionadaParaEdicion(proyecto : Proyecto) {
    this.proyectoSeleccionada = proyecto;
  }
}

describe('DetalleProyectoComponent', () => {
  let component: DetalleProyectoComponent;
  let fixture: ComponentFixture<DetalleProyectoComponent>;
  let proyectosService : MockProyectosService = new MockProyectosService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        BrowserAnimationsModule
      ],
      providers: [ProyectosService],
      declarations: [ DetalleProyectoComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      DetalleProyectoComponent,
      { set: { providers: [{ provide: ProyectosService, useValue: proyectosService }] } }
    );

    fixture = TestBed.createComponent(DetalleProyectoComponent);
  }));

  beforeEach(() => {

    const personasRequeridas: PersonasRequeridas = new PersonasRequeridas();
    personasRequeridas[0] = 1,
    personasRequeridas[1] = 2,
    personasRequeridas[2] = 3

    component = fixture.componentInstance;
    component.proyecto = new Proyecto();
    component.proyecto.nombre = "Banco";
    component.proyecto.presupuesto = 375000;
    component.proyecto.personasRequeridas = personasRequeridas;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show the project name`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-card-title').textContent).toContain('Banco');
  });

  it(`should emit edit event`, () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.mat-icon').click();
    expect(proyectosService.proyectoSeleccionada).toBe(component.proyecto);
  });
});

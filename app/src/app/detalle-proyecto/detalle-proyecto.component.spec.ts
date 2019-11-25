import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoComponent } from './detalle-proyecto.component';
import { Proyecto } from '../proyecto';

import {
  MatCardModule, MatIconModule
} from '@angular/material';


describe('DetalleProyectoComponent', () => {
  let component: DetalleProyectoComponent;
  let fixture: ComponentFixture<DetalleProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule
      ],
      declarations: [ DetalleProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    const personasRequeridas: Record<string, number> = {
      0: 1,
      1: 2,
      2: 3
    }

    fixture = TestBed.createComponent(DetalleProyectoComponent);
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
});

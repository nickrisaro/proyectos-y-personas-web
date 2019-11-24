import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonaComponent } from './detalle-persona.component';
import { Persona } from '../persona';

import {
  MatCardModule, MatIconModule
} from '@angular/material';


describe('DetallePersonaComponent', () => {
  let component: DetallePersonaComponent;
  let fixture: ComponentFixture<DetallePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule
      ],
      declarations: [ DetallePersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePersonaComponent);
    component = fixture.componentInstance;
    component.persona = new Persona();
    component.persona.nombre = "Santiago";
    component.persona.hardSkill = 2;
    component.persona.softSkill = 2;
    component.persona.seniority = 3;
    component.persona.sueldo = 75000;

    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show the person name`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-card-title').textContent).toContain('Santiago');
  });
});

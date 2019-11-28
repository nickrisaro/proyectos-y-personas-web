import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonaComponent } from './detalle-persona.component';
import { Persona } from '../persona';

import {
  MatCardModule, MatIconModule
} from '@angular/material';
import { PersonasService } from '../personas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockPersonasService extends PersonasService {
  personaSeleccionada : Persona;
  constructor(){
    super(null);
  }
  personaSeleccionadaParaEdicion(persona : Persona) {
    this.personaSeleccionada = persona;
  }
}

describe('DetallePersonaComponent', () => {
  let component: DetallePersonaComponent;
  let fixture: ComponentFixture<DetallePersonaComponent>;
  let personasService : MockPersonasService = new MockPersonasService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        HttpClientTestingModule
      ],
      providers: [PersonasService],
      declarations: [ DetallePersonaComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      DetallePersonaComponent,
      { set: { providers: [{ provide: PersonasService, useValue: personasService }] } }
    );


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

  it(`should emit edit event`, () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.mat-icon').click();
    expect(personasService.personaSeleccionada).toBe(component.persona);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaComponent } from './form-persona.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockPersonasService extends PersonasService {
  personaSeleccionada : Persona;
  constructor(){
    super(null);
  }
  guardar(persona : Persona) : Observable<any> {
    this.personaSeleccionada = persona;
    return of(persona);
  }
}

describe('FormPersonaComponent', () => {
  let component: FormPersonaComponent;
  let fixture: ComponentFixture<FormPersonaComponent>;
  let personasService : MockPersonasService = new MockPersonasService();
  let persona : Persona;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [PersonasService],
      declarations: [ FormPersonaComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      FormPersonaComponent,
      { set: { providers: [{ provide: PersonasService, useValue: personasService }] } }
    );
    fixture = TestBed.createComponent(FormPersonaComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    persona = new Persona();
    persona.nombre = "Santiago";
    persona.hardSkill = 2;
    persona.softSkill = 2;
    persona.seniority = 3;
    persona.sueldo = 75000;
    component.persona = persona;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save the person', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#btn-guardar').click();
    expect(personasService.personaSeleccionada).toBe(persona);
  });

  it('should clear the person on cancel', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#btn-cancelar').click();
    expect(component.persona).toBe(null);
  });
});

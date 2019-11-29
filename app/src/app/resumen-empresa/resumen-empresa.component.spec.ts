import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenEmpresaComponent } from './resumen-empresa.component';

import {
  MatCardModule, MatIconModule
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProyectosService } from '../proyectos.service';
import { Proyecto } from '../proyecto';
import { of } from 'rxjs';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona';

class MockProyectoService extends ProyectosService {
  getProyectos() {

    const proyecto = new Proyecto();
    const proyecto2 = new Proyecto();
    const proyectosEsperados = [proyecto, proyecto2];
    return of(proyectosEsperados)
  }
}

class MockPersonaService extends PersonasService {
  getPersonas() {

    const persona = new Persona();
    const persona2 = new Persona();
    const personasEsperados = [persona, persona2];
    return of(personasEsperados)
  }
}

describe('ResumenEmpresaComponent', () => {
  let component: ResumenEmpresaComponent;
  let fixture: ComponentFixture<ResumenEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        HttpClientTestingModule
      ],
      providers: [ProyectosService, PersonasService],
      declarations: [ ResumenEmpresaComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      ResumenEmpresaComponent,
      { set: { providers: [{ provide: ProyectosService, useClass: MockProyectoService },
                           { provide: PersonasService, useClass: MockPersonaService }] } }
    );

    fixture = TestBed.createComponent(ResumenEmpresaComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a paragraph with the persons`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#personas').textContent).toContain('Cantidad de personas: 2');
  });

  it(`should have a paragraph with the projects`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#proyectos').textContent).toContain('Cantidad de proyectos: 2');
  });
});

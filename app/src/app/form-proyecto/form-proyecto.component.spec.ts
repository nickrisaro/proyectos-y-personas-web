import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyectoComponent } from './form-proyecto.component';
import { ProyectosService } from '../proyectos.service';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Proyecto } from '../proyecto';
import { Observable, of } from 'rxjs';

class MockProyectosService extends ProyectosService {
  proyectoSeleccionado : Proyecto;
  constructor(){
    super(null);
  }
  guardar(proyecto : Proyecto) : Observable<any> {
    this.proyectoSeleccionado = proyecto;
    return of(proyecto);
  }
}

describe('FormProyectoComponent', () => {
  let component: FormProyectoComponent;
  let fixture: ComponentFixture<FormProyectoComponent>;
  let proyectoService: MockProyectosService = new MockProyectosService();
  let proyecto: Proyecto;

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
      providers: [ProyectosService],
      declarations: [ FormProyectoComponent ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      FormProyectoComponent,
      { set: { providers: [{ provide: ProyectosService, useValue: proyectoService }] } }
    );
    fixture = TestBed.createComponent(FormProyectoComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    proyecto = new Proyecto();
    proyecto.nombre = "Banco";
    component.proyecto = proyecto;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save the project', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#btn-guardar').click();
    expect(proyectoService.proyectoSeleccionado).toBe(proyecto);
  });

  it('should clear the project on cancel', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#btn-cancelar').click();
    expect(component.proyecto).toBe(null);
  });
});

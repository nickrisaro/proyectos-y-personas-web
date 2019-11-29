import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SolucionComponent } from './solucion.component';
import { MatCardModule } from '@angular/material';
import { SolucionesService } from '../soluciones.service';
import { ResumenProyecto } from '../resumenProyecto';

describe('SolucionComponent', () => {
  let component: SolucionComponent;
  let fixture: ComponentFixture<SolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        HttpClientTestingModule
      ],
      providers: [SolucionesService],
      declarations: [ SolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolucionComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    const resumen = new ResumenProyecto();
    resumen.PersonasRequeridas = {};
    resumen.HardSkills = {};
    resumen.SoftSkills = {};
    resumen.Seniorities = {};
    component.solucion = [resumen];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

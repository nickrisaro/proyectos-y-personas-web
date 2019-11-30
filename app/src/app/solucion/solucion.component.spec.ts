import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SolucionComponent } from './solucion.component';
import { MatCardModule, MatExpansionModule, MatIcon, MatIconModule } from '@angular/material';
import { SolucionesService } from '../soluciones.service';
import { ResumenProyecto } from '../resumenProyecto';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SolucionComponent', () => {
  let component: SolucionComponent;
  let fixture: ComponentFixture<SolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatIconModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
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

  it('should close on click', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.boton-cerrar').click();
    fixture.detectChanges();
    expect(compiled.querySelector('.solucion-card')).toBeFalsy();
  });
});

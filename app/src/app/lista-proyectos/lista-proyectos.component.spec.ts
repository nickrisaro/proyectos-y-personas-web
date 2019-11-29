import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaProyectosComponent } from './lista-proyectos.component';
import { DetalleProyectoComponent } from '../detalle-proyecto/detalle-proyecto.component';

import {
  MatCardModule, MatIconModule
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { ProyectosService } from '../proyectos.service';
import { Proyecto } from '../proyecto';
import { of } from 'rxjs';
import PersonasRequeridas from '../personasRequeridas';

class MockProyectoService extends ProyectosService {
  getProyectos() {
    const personasRequeridas: PersonasRequeridas = new PersonasRequeridas();
    personasRequeridas[0] = 1,
    personasRequeridas[1] = 2,
    personasRequeridas[2] = 3

    const proyecto = new Proyecto();
    proyecto.nombre = "Banco 1";
    proyecto.presupuesto = 75000;
    const proyecto2 = new Proyecto();
    proyecto2.nombre = "Banco 2";
    proyecto2.presupuesto = 75000;
    proyecto2.personasRequeridas = personasRequeridas;
    const proyectosEsperados = [proyecto, proyecto2];

    return of(proyectosEsperados)
  }
}

describe('ListaProyectosComponent', () => {
  let component: ListaProyectosComponent;
  let fixture: ComponentFixture<ListaProyectosComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        HttpClientTestingModule
      ],
      providers: [ProyectosService],
      declarations: [ListaProyectosComponent, DetalleProyectoComponent]
    });

    TestBed.overrideComponent(
      ListaProyectosComponent,
      { set: { providers: [{ provide: ProyectosService, useClass: MockProyectoService }] } }
    );

    fixture = TestBed.createComponent(ListaProyectosComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 2 projects', (() => {

    const items = fixture.debugElement.queryAll(By.css('.proyectos li'));
    expect(items.length).toBe(2)
    expect(items[0].nativeElement.textContent).toContain('Banco 1');
    expect(items[1].nativeElement.textContent).toContain('Banco 2');
    fixture.whenStable().then(() => {

    });
  }));

  it('should show project details on click', () => {
    const items = fixture.debugElement.queryAll(By.css('.proyectos li'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.proyecto-card')).toBeTruthy();
  });
});

import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaPersonasComponent } from './lista-personas.component';
import { DetallePersonaComponent } from '../detalle-persona/detalle-persona.component';

import {
  MatCardModule, MatIconModule
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona';
import { of } from 'rxjs';

class MockPersonaService extends PersonasService {
  getPersonas() {
    const persona = new Persona();
    persona.nombre = "Nayla";
    persona.hardSkill = 1;
    persona.softSkill = 0;
    persona.seniority = 1;
    persona.sueldo = 75000;
    const persona2 = new Persona();
    persona2.nombre = "Santiago";
    persona2.hardSkill = 1;
    persona2.softSkill = 0;
    persona2.seniority = 1;
    persona2.sueldo = 75000;
    const persona3 = new Persona();
    persona3.nombre = "Ariel";
    persona3.hardSkill = 0;
    persona3.softSkill = 1;
    persona3.seniority = 2;
    persona3.sueldo = 75000;
    const personasEsperadas = [persona, persona2, persona3];

    return of(personasEsperadas)
  }
}

describe('ListaPersonasComponent', () => {
  let component: ListaPersonasComponent;
  let fixture: ComponentFixture<ListaPersonasComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        HttpClientTestingModule
      ],
      providers: [PersonasService],
      declarations: [ListaPersonasComponent, DetallePersonaComponent]
    });

    TestBed.overrideComponent(
      ListaPersonasComponent,
      { set: { providers: [{ provide: PersonasService, useClass: MockPersonaService }] } }
    );

    fixture = TestBed.createComponent(ListaPersonasComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 persons', (() => {

    const items = fixture.debugElement.queryAll(By.css('.personas li'));
    expect(items.length).toBe(3)
    expect(items[0].nativeElement.textContent).toContain('Nayla');
    expect(items[1].nativeElement.textContent).toContain('Santiago');
    expect(items[2].nativeElement.textContent).toContain('Ariel');
    fixture.whenStable().then(() => {

    });
  }));

  it('should show person details on click', () => {
    const items = fixture.debugElement.queryAll(By.css('.personas li'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.persona-card')).toBeTruthy();
    expect(compiled.querySelector('.nombre-persona').textContent).toContain('Nayla');

    items[2].nativeElement.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.persona-card')).toBeTruthy();
    expect(compiled.querySelector('.nombre-persona').textContent).toContain('Ariel');
  });
});

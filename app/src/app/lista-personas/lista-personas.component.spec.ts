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
    const personasEsperadas = [persona, persona2];

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

  it('should show 2 persons', (() => {

    const items = fixture.debugElement.queryAll(By.css('.personas li'));
    expect(items.length).toBe(2)
    expect(items[0].nativeElement.textContent).toContain('Nayla');
    expect(items[1].nativeElement.textContent).toContain('Santiago');
    fixture.whenStable().then(() => {

    });
  }));

  it('should show person details on click', () => {
    const items = fixture.debugElement.queryAll(By.css('.personas li'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.persona-card')).toBeTruthy();
  });
});

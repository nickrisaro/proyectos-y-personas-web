import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonasComponent } from './lista-personas.component';
import { DetallePersonaComponent } from '../detalle-persona/detalle-persona.component';

import {
  MatCardModule, MatIconModule
} from '@angular/material';
import { By } from '@angular/platform-browser';

describe('ListaPersonasComponent', () => {
  let component: ListaPersonasComponent;
  let fixture: ComponentFixture<ListaPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule
      ],
      declarations: [ ListaPersonasComponent, DetallePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 2 persons', () => {
    const items= fixture.debugElement.queryAll(By.css('.personas li'));
    expect(items.length).toBe(2)
    expect(items[0].nativeElement.textContent).toContain('Nayla');
    expect(items[1].nativeElement.textContent).toContain('Santiago');
  });

  it('should show person details on click', () => {
    const items= fixture.debugElement.queryAll(By.css('.personas li'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.persona-card')).toBeTruthy();
  });
});

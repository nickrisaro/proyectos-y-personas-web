import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonaComponent } from './detalle-persona.component';
import { Persona } from '../persona';

import {
  MatCardModule, MatIconModule
} from '@angular/material';

describe('DetallePersonaComponent', () => {
  let component: DetallePersonaComponent;
  let fixture: ComponentFixture<DetallePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule
      ],
      declarations: [ DetallePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePersonaComponent);
    component = fixture.componentInstance;
    component.persona = new Persona();
    component.persona.nombre = "Santiago";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show the person name`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-card-title').textContent).toContain('Santiago');
  });
});

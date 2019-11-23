import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenEmpresaComponent } from './resumen-empresa.component';

import {
  MatCardModule, MatIconModule
} from '@angular/material';

describe('ResumenEmpresaComponent', () => {
  let component: ResumenEmpresaComponent;
  let fixture: ComponentFixture<ResumenEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
      ],
      declarations: [ ResumenEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a paragraph with the persons`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#personas').textContent).toContain('Cantidad de personas 10');
  });

  it(`should have a paragraph with the projects`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#proyectos').textContent).toContain('Cantidad de proyectos 2');
  });
});

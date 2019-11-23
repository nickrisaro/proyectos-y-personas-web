import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResumenEmpresaComponent } from './resumen-empresa/resumen-empresa.component'
import { ListaPersonasComponent } from './lista-personas/lista-personas.component'
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        RouterTestingModule
      ],
      declarations: [
        ResumenEmpresaComponent,
        ListaPersonasComponent,
        DetallePersonaComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Proyectos y Personas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Proyectos y Personas');
  });

  it(`should have a toolbar with title 'Proyectos y Personas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#pyp-toolbar').textContent).toContain('Proyectos y Personas');
  });
});

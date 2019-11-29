import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResumenEmpresaComponent } from './resumen-empresa/resumen-empresa.component'
import { ListaPersonasComponent } from './lista-personas/lista-personas.component'
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component'
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { PersonasService } from './personas.service';
import { ProyectosService } from './proyectos.service';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [PersonasService, ProyectosService],
      declarations: [
        ResumenEmpresaComponent,
        ListaPersonasComponent,
        DetallePersonaComponent,
        ListaProyectosComponent,
        DetalleProyectoComponent,
        FormPersonaComponent,
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

  it(`should show persons info on click`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const item= fixture.debugElement.query(By.css('#personas'));
    item.nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.personas-card')).toBeTruthy();

  });

  it(`should show projects info on click`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const item= fixture.debugElement.query(By.css('#proyectos'));
    item.nativeElement.click();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.proyectos-card')).toBeTruthy();

  });

  it(`should show form to create person on click`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const fixtureForm = TestBed.createComponent(FormPersonaComponent);

    fixture.detectChanges();
    fixtureForm.detectChanges();
    const item= fixture.debugElement.query(By.css('.boton-alta'));
    item.nativeElement.click();
    fixture.detectChanges();
    fixtureForm.detectChanges();

    const compiled = fixtureForm.debugElement.nativeElement;
    expect(compiled.querySelector('.edicion-persona-card')).toBeTruthy();

  });
});

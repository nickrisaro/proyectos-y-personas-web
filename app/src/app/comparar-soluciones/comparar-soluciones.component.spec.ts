import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararSolucionesComponent } from './comparar-soluciones.component';
import { MatCardModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolucionesService } from '../soluciones.service';
import { SolucionComponent } from '../solucion/solucion.component';

describe('CompararSolucionesComponent', () => {
  let component: CompararSolucionesComponent;
  let fixture: ComponentFixture<CompararSolucionesComponent>;

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
      declarations: [ CompararSolucionesComponent, SolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararSolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

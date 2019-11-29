import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionComponent } from './solucion.component';
import { MatCardModule } from '@angular/material';

describe('SolucionComponent', () => {
  let component: SolucionComponent;
  let fixture: ComponentFixture<SolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      declarations: [ SolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

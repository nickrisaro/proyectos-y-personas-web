import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SolucionesService } from './soluciones.service';
import { ResumenProyecto } from './resumenProyecto';

describe('SolucionesService', () => {
  let httpTestingController: HttpTestingController;
  let service: SolucionesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      SolucionesService,
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(SolucionesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a solution', () => {

    const resumenProyecto = new ResumenProyecto();
    resumenProyecto.Nombre = "Una empresa";
    resumenProyecto.PersonasRequeridas = {"0": 2, "1": 3, "2": 4};
    resumenProyecto.Presupuesto = 1234567;
    resumenProyecto.Sueldos = 120000;
    resumenProyecto.HardSkills = {"0": 2, "1": 3, "2": 4};
    resumenProyecto.SoftSkills = {"0": 3, "1": 3, "2": 3};
    resumenProyecto.Seniorities = {"1": 1, "2": 2, "3": 6};

    const solucion = [resumenProyecto];

    service.solucionGenerada.subscribe(
      mensaje => expect(mensaje).toEqual(solucion, 'should return solution'),
      fail
    );
    service.solucionar()

    const req = httpTestingController.expectOne(service.solucionesUrl);
    expect(req.request.method).toEqual('POST');

    req.flush(solucion);
  });
});

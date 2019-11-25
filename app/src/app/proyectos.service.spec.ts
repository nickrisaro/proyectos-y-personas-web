import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProyectosService } from './proyectos.service';
import { Proyecto } from './proyecto';

describe('ProyectosService', () => {
  let proyectosService: ProyectosService;
  let httpTestingController: HttpTestingController;
  let proyectosEsperadas: Proyecto[];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      ProyectosService,
    ]
  }));

  beforeEach(() => {
    proyectosService = TestBed.get(ProyectosService);
    httpTestingController = TestBed.get(HttpTestingController);
    const proyecto = new Proyecto();
    proyecto.nombre = "Banco";
    const personasRequeridas: Record<string, number> = {
      0: 1,
      1: 2,
      2: 3
    }
    proyecto.personasRequeridas = personasRequeridas;
    proyecto.presupuesto = 375000;
    proyectosEsperadas = [proyecto];
  });

  it('should be created', () => {
    const service: ProyectosService = TestBed.get(ProyectosService);
    expect(service).toBeTruthy();
  });

  it('should return expected projects', () => {

    proyectosService.getProyectos().subscribe(
      proyectos => expect(proyectos).toEqual(proyectosEsperadas, 'should return expected persons'),
      fail
    );

    const req = httpTestingController.expectOne(proyectosService.proyectosUrl);
    expect(req.request.method).toEqual('GET');

    req.flush([{ nombre: "Banco", "personasRequeridas": { "0": 1, "1": 2, "2": 3 }, presupuesto: 375000 }]);
  });
});

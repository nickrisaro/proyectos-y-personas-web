import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProyectosService } from './proyectos.service';
import { Proyecto } from './proyecto';
import PersonasRequeridas from './personasRequeridas';

describe('ProyectosService', () => {
  let proyectosService: ProyectosService;
  let httpTestingController: HttpTestingController;
  let proyectosEsperados: Proyecto[];
  let proyecto = new Proyecto();

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      ProyectosService,
    ]
  }));

  beforeEach(() => {
    proyectosService = TestBed.get(ProyectosService);
    httpTestingController = TestBed.get(HttpTestingController);
    proyecto.nombre = "Banco";
    const personasRequeridas: PersonasRequeridas = new PersonasRequeridas();
    personasRequeridas[0] = 1,
    personasRequeridas[1] = 2,
    personasRequeridas[2] = 3
    proyecto.personasRequeridas = personasRequeridas;
    proyecto.presupuesto = 375000;
    proyectosEsperados = [proyecto];
  });

  it('should be created', () => {
    const service: ProyectosService = TestBed.get(ProyectosService);
    expect(service).toBeTruthy();
  });

  it('should return expected projects', () => {

    proyectosService.getProyectos().subscribe(
      proyectos => expect(proyectos).toEqual(proyectosEsperados, 'should return expected persons'),
      fail
    );

    const req = httpTestingController.expectOne(proyectosService.proyectosUrl);
    expect(req.request.method).toEqual('GET');

    req.flush([proyecto]);
  });

  it('should create project', () => {

    const proyecto: Proyecto = new Proyecto();
    proyectosService.guardar(proyecto).subscribe(
      mensaje => expect(mensaje).toEqual("1 proyectos dadas de alta", 'should return expected projects'),
      fail
    );

    const req = httpTestingController.expectOne(proyectosService.proyectosUrl);
    expect(req.request.method).toEqual('POST');

    req.flush("1 proyectos dadas de alta");
  });

  it('should update project', () => {

    const proyecto: Proyecto = new Proyecto();
    proyecto.id = 0;
    proyectosService.guardar(proyecto).subscribe(
      mensaje => expect(mensaje).toEqual("Proyecto 0 modificado", 'should return expected projects'),
      fail
    );

    const req = httpTestingController.expectOne(proyectosService.proyectoUrl + "/0");
    expect(req.request.method).toEqual('PUT');

    req.flush("Proyecto 0 modificado");
  });

  it('should send a message on selected project', () => {

    const proyecto: Proyecto = new Proyecto();
    proyectosService.editarProyecto.subscribe(
      proyectoSeleccionada => expect(proyectoSeleccionada).toEqual(proyecto),
      fail
    );

    proyectosService.proyectoSeleccionadaParaEdicion(proyecto);

  });
});

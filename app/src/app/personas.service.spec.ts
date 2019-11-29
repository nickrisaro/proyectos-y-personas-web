import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonasService } from './personas.service';
import { Persona } from './persona';

describe('PersonasService', () => {
  let personasService: PersonasService;
  let httpTestingController: HttpTestingController;
  let personasEsperadas: Persona[];

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      PersonasService,
    ]
  })});

  beforeEach(() => {
    personasService = TestBed.get(PersonasService);
    httpTestingController = TestBed.get(HttpTestingController);
    const persona = new Persona();
    persona.nombre = "Santiago";
    persona.hardSkill = 1;
    persona.softSkill = 0;
    persona.seniority = 1;
    persona.sueldo = 75000;
    personasEsperadas = [persona];
  });

  it('should be created', () => {
    expect(personasService).toBeTruthy();
  });

  it('should return expected persons', () => {

    personasService.getPersonas().subscribe(
      personas => expect(personas).toEqual(personasEsperadas, 'should return expected persons'),
      fail
    );

    const req = httpTestingController.expectOne(personasService.personasUrl);
    expect(req.request.method).toEqual('GET');

    req.flush([{nombre: "Santiago", hardSkill: 1, softSkill: 0, seniority: 1, sueldo: 75000}]);
  });

  it('should create person', () => {

    const persona: Persona = new Persona();
    personasService.guardar(persona).subscribe(
      mensaje => expect(mensaje).toEqual("1 personas dadas de alta", 'should return expected persons'),
      fail
    );

    const req = httpTestingController.expectOne(personasService.personasUrl);
    expect(req.request.method).toEqual('POST');

    req.flush("1 personas dadas de alta");
  });

  it('should update person', () => {

    const persona: Persona = new Persona();
    persona.id = 0;
    personasService.guardar(persona).subscribe(
      mensaje => expect(mensaje).toEqual("Persona 0 modificada", 'should return expected persons'),
      fail
    );

    const req = httpTestingController.expectOne(personasService.personaUrl + "/0");
    expect(req.request.method).toEqual('PUT');

    req.flush("Persona 0 modificada");
  });

  it('should send a message on selected person', () => {

    const persona: Persona = new Persona();
    personasService.editarPersona.subscribe(
      personaSeleccionada => expect(personaSeleccionada).toEqual(persona),
      fail
    );

    personasService.personaSeleccionadaParaEdicion(persona);

  });
});

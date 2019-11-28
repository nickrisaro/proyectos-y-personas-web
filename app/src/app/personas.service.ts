import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Persona } from './persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  @Output() editarPersona: EventEmitter<Persona> = new EventEmitter();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  personasUrl = 'http://localhost:8080/personas';
  personaUrl = 'http://localhost:8080/persona';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl)
    .pipe(
      map(data => data.map(data => new Persona().deserialize(data)))
    );
  }

  guardar(persona: Persona) : Observable<any> {
    if (persona.esNueva()) {
      const personas : Persona[] = [persona];
      return this.http.post(this.personasUrl, personas, this.httpOptions);
    } else {
      const url = `${this.personaUrl}/${persona.id}`;
      return this.http.put(url, persona, this.httpOptions);
    }
  }

  personaSeleccionadaParaEdicion(persona: Persona) {
    this.editarPersona.emit(persona);
  }
}

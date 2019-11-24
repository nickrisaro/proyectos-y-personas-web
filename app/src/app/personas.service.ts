import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Persona } from './persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personasUrl = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl)
    .pipe(
      map(data => data.map(data => new Persona().deserialize(data)))
    );
  }

  log(message: string): void {
    console.log(message);
  }
}

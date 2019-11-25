import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Proyecto } from './proyecto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosUrl = 'http://localhost:8080/proyectos';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectosUrl)
    .pipe(
      map(data => data.map(data => new Proyecto().deserialize(data)))
    );
  }
}

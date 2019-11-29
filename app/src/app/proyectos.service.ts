import { Injectable, EventEmitter, Output } from '@angular/core';
import { map} from 'rxjs/operators';
import { Proyecto } from './proyecto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Output() editarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  proyectosUrl = 'http://localhost:8080/proyectos';
  proyectoUrl = 'http://localhost:8080/proyecto';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectosUrl)
    .pipe(
      map(data => data.map(data => new Proyecto().deserialize(data)))
    );
  }

  guardar(proyecto: Proyecto) : Observable<any> {
    if (proyecto.esNuevo()) {
      const proyectos : Proyecto[] = [proyecto];
      return this.http.post(this.proyectosUrl, proyectos, this.httpOptions);
    } else {
      const url = `${this.proyectoUrl}/${proyecto.id}`;
      return this.http.put(url, proyecto, this.httpOptions);
    }
  }

  proyectoSeleccionadaParaEdicion(proyecto: Proyecto) {
    this.editarProyecto.emit(proyecto);
  }
}

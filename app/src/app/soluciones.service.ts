import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolucionesService {

  solucionesUrl = "http://localhost:8080/solucionar";
  resumenUrl = "http://localhost:8080/soluciones";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Output() solucionGenerada: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  solucionar() : Observable<any> {
    let observable = this.http.post(this.solucionesUrl, null, this.httpOptions);
    return observable;
  }

  buscarSoluciones() : Observable<any> {
    return this.http.get(this.resumenUrl);
  }
}

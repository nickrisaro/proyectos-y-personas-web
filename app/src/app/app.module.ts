import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatIconModule } from '@angular/material';
import { ResumenEmpresaComponent } from './resumen-empresa/resumen-empresa.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenEmpresaComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    ListaProyectosComponent,
    DetalleProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

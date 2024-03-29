import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule } from '@angular/material';
import { ResumenEmpresaComponent } from './resumen-empresa/resumen-empresa.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { FormsModule } from '@angular/forms';
import { FormProyectoComponent } from './form-proyecto/form-proyecto.component';
import { SolucionComponent } from './solucion/solucion.component';
import { CompararSolucionesComponent } from './comparar-soluciones/comparar-soluciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenEmpresaComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    ListaProyectosComponent,
    DetalleProyectoComponent,
    FormPersonaComponent,
    FormProyectoComponent,
    SolucionComponent,
    CompararSolucionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

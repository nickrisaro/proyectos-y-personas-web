import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonasService) { }

  ngOnInit() {
    this.personaService.editarPersona.subscribe(persona => {
      this.persona = persona;
    });
  }

  onSave(): void {
    this.personaService.guardar(this.persona).subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.persona = null;
  }
}

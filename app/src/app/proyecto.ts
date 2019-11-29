import { PersonasRequeridas } from './personasRequeridas';
import { Persona } from './persona';

export class Proyecto {

    id: number;
    nombre: string;
    presupuesto: number;
    personasRequeridas: PersonasRequeridas;
    personasAsignadas: Persona[];

    constructor() {
        this.personasRequeridas = new PersonasRequeridas();
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    public esNuevo(): boolean {
        return this.id == undefined;
    }
}
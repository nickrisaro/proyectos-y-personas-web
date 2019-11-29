import PersonasRequeridas from './personasRequeridas';

export class Proyecto {

    id: number;
    nombre: string;
    presupuesto: number;
    personasRequeridas: PersonasRequeridas;

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
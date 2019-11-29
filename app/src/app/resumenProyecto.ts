import PersonasRequeridas from './personasRequeridas';

export class ResumenProyecto {

    Nombre: string;
    Presupuesto: number;
    Sueldos: number;
    PersonasRequeridas: Record<string, number>;
    HardSkills: Record<string, number>;
    SoftSkills: Record<string, number>;
    Seniorities: Record<string, number>;


    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}
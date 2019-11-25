export class Proyecto {
    nombre: string;
    presupuesto: number;
    personasRequeridas: Record<string, number>;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    public personasDesarrolloNecesarias() : number {
        return this.personasRequeridas["0"];
    }

    public personasDisenioNecesarias() : number {
        return this.personasRequeridas["1"];
    }

    public personasOperacionesNecesarias() : number {
        return this.personasRequeridas["2"];
    }
}
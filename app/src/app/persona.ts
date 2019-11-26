export class Persona {
    nombre: string;
    sueldo: number;
    hardSkill: number;
    softSkill: number;
    seniority: number;
    nueva: boolean;

    constructor(){
        this.nueva = false;
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    public habilidadDuraDescripcion(): string {
        switch (this.hardSkill) {
            case 0: return "Dessarrollo";
            case 1: return "Diseño";
            case 2: return "Operaciones";
        }
    }

    public habilidadBlandaDescripcion(): string {
        switch (this.softSkill) {
            case 0: return "Negociación";
            case 1: return "Mentoreo";
            case 2: return "Investigación";
        }
    }

    public seniorityDescripcion(): string {
        switch (this.seniority) {
            case 1: return "Junior";
            case 2: return "SemiSenior";
            case 3: return "Senior";
        }
    }
}
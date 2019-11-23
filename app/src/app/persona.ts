export class Persona {
    nombre: string;
    habilidadDura: number;
    habilidadBlanda: number;
    seniority: number;

    constructor(nombre: string, habilidadDura: number, habilidadBlanda: number, seniority: number) {
        this.nombre = nombre;
        this.habilidadDura = habilidadDura;
        this.habilidadBlanda = habilidadBlanda;
        this.seniority = seniority;
    }

    public habilidadDuraDescripcion() : string {
        switch (this.habilidadDura) {
            case 0: return "Dessarrollo";
            case 1: return "Diseño";
            case 2: return "Operaciones";
        }
    }

    public habilidadBlandaDescripcion() : string {
        switch (this.habilidadBlanda) {
            case 0: return "Negociación";
            case 1: return "Mentoreo";
            case 2: return "Investigación";
        }
    }

    public seniorityDescripcion() : string {
        switch (this.seniority) {
            case 1: return "Junior";
            case 2: return "SemiSenior";
            case 3: return "Senior";
        }
    }
    /*

Seniority
	Junior      1
	SemiSenior  2
	Senior      3
    */
}
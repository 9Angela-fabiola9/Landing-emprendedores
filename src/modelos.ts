import { TipoUsuario } from "./tipos.js";

// Clase principal
export class Persona {
    constructor(
        public nombre: string,
        protected tipo: TipoUsuario
    ) {}

    presentar(): string {
        return `${this.nombre} es un ${this.tipo}.`;
    }
}

// Herencia
export class Emprendedor extends Persona {
    #proyecto: string;

    constructor(nombre: string, proyecto: string) {
        super(nombre, "emprendedor");
        this.#proyecto = proyecto;
    }

    get proyecto(): string {
        return this.#proyecto;
    }

    set proyecto(nuevoProyecto: string) {
        this.#proyecto = nuevoProyecto;
    }

    presentar(): string {
        return `${this.nombre} tiene un emprendimiento llamado ${this.#proyecto}.`;
    }
}

// Segunda clase hija
export class Visitante extends Persona {
    constructor(nombre: string) {
        super(nombre, "visitante");
    }

    presentar(): string {
        return `${this.nombre} está conociendo Impulsa tu Idea.`;
    }
}
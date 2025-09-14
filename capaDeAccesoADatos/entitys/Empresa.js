class Empresa {
    constructor(nit, nombre, direccion) {
        this.nit = nit;
        this.nombre = nombre;
        this.direccion = direccion;
    }

    toString() {
        return `${this.nombre} (${this.nit}) - ${this.direccion}`;
    }
}

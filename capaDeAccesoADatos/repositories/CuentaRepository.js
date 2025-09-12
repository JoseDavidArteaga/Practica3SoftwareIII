// Aqui va la implementacion de la clase CuentaRepository
class CuentaRepository{
    // Simulamos una base de datos con un array de cuentas
    constructor(){
        this.cuentas = [];
    }

    // Metodo para agregar una cuenta al "repositorio"
    agregar(cuenta){
        this.cuentas.push(cuenta);
    }

    // Metodo para obtener todas las cuentas
    obtenerTodas(){
        return this.cuentas;
    }
}

// Exportamos una instancia de la clase CuentaRepository
const cuentaRepo = new CuentaRepository();
// aqui va la logica de negocio para manejar las cuentas
const cuentaRepository = new CuentaRepository();

class GestionarCuentas {
    // Inyectamos el repositorio y el servicio de personas
    constructor(repo, gestionarPersonas) {
        this.repo = repo; // instancia de CuentaRepository
        this.gestionarPersonas = gestionarPersonas; // instancia de GestionarPersonasServices
    }

    registrarCuenta(numeroCuenta, saldo , tipo , personaId) {
        const persona = this.gestionarPersonas.buscarPersona(personaId);
        if (!persona) {
            throw new Error('Persona no encontrada');
        }
        const cuenta = new Cuenta(numeroCuenta, saldo , tipo , persona);
        this.repo.agregar(cuenta);
        return cuenta;
    }

    listarCuentas() {
        return this.repo.obtenerTodas();
    }
}

const gestionarCuentas = new GestionarCuentas(cuentaRepository, gestionarPersonas);
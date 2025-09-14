const personaRepo = new PersonaRepository();

class GestionarPersonas{
    constructor(repo){
        this.repo = repo; // instancia de PersonaRepository
    }

    registrarPersona(nombre, apellido, empresa = null) {
        const id = this.repo.siguienteId();
        const persona = new Persona(id, nombre, apellido, empresa);
        this.repo.agregar(persona);
        return persona;
    }


    listarPersonas() {
        return this.repo.obtenerTodas();
    }

    buscarPersona(id) {
        return this.repo.buscarPorId(id);
    }

}

const gestionarPersonas = new GestionarPersonas(personaRepo);
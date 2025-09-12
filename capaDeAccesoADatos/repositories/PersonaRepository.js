// aqui va la logica para manejar los datos de las personas
class PersonaRepository {
    // Simulamos una base de datos con un array de personas
    constructor() {
        this.personas = [];
    }

    // Metodo para agregar una persona al "repositorio"
    agregar(persona) {
        this.personas.push(persona);
    }

    // Metodo para obtener todas las personas
    obtenerTodas() {
        return this.personas;
    }

    // Metodo para obtener una persona por su ID
    buscarPorId(id) {
        return this.personas.find(p => p.id === id);
    }

    // Metodo para generar un ID unico (simple incremento)
    siguienteId() {
        return this.personas.length + 1;
    }

}
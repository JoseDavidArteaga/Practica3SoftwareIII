class EmpresaRepository {
    constructor() {
        this.empresas = [];
    }

    agregar(empresa) {
        this.empresas.push(empresa);
    }

    obtenerTodas() {
        return this.empresas;
    }

    buscarPorNit(nit) {
        return this.empresas.find(e => e.nit === nit);
    }
}

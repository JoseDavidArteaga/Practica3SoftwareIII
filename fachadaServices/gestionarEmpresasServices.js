const empresaRepo = new EmpresaRepository();

class GestionarEmpresas {
    constructor(repo) {
        this.repo = repo;
    }

    registrarEmpresa(nit, nombre, direccion) {
        if (this.repo.buscarPorNit(nit)) {
            throw new Error("Ya existe una empresa con ese NIT");
        }
        const empresa = new Empresa(nit, nombre, direccion);
        this.repo.agregar(empresa);
        return empresa;
    }

    listarEmpresas() {
        return this.repo.obtenerTodas();
    }

    buscarEmpresa(nit) {
        return this.repo.buscarPorNit(nit);
    }
}

const gestionarEmpresas = new GestionarEmpresas(empresaRepo);

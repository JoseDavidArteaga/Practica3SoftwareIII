const formEmpresa = document.getElementById('formEmpresa');
const empresaSelectPersona = document.getElementById("empresaSelectPersona");

formEmpresa.addEventListener("submit", (e) => {
    e.preventDefault();
    const nit = document.getElementById("nit").value;
    const nombre = document.getElementById("empresaNombre").value;
    const direccion = document.getElementById("empresaDireccion").value;

    try {
        const nuevaEmpresa = gestionarEmpresas.registrarEmpresa(nit, nombre, direccion);

        const option = document.createElement("option");
        option.value = nuevaEmpresa.nit;
        option.textContent = nuevaEmpresa.toString();
        empresaSelectPersona.appendChild(option);

        formEmpresa.reset();
    } catch (error) {
        alert(error.message);
    }
});
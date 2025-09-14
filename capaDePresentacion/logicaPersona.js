const formPersona = document.getElementById('formPersona');
const personaSelect = document.getElementById('personaSelect');

formPersona.addEventListener("submit", (e) => { // capturar el evento submit del formulario
    e.preventDefault();
    const nombre = document.getElementById("personaNombre").value;
    const apellido = document.getElementById("personaApellido").value;

    const empresaNit = empresaSelectPersona.value;

    const empresa = empresaNit ? gestionarEmpresas.buscarEmpresa(empresaNit) : null;
    
    const nuevaPersona = gestionarPersonas.registrarPersona(nombre, apellido, empresa);

    const option = document.createElement("option");
    option.value = nuevaPersona.id;
    option.textContent = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
    personaSelect.appendChild(option);

    formPersona.reset();
});
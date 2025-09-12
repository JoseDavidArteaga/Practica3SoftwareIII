const formPersona = document.getElementById('formPersona');
const personaSelect = document.getElementById('personaSelect');

formPersona.addEventListener("submit", (e) => { // capturar el evento submit del formulario
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    
    const nuevaPersona = gestionarPersonas.registrarPersona(nombre, apellido);

    const option = document.createElement("option");
    option.value = nuevaPersona.id;
    option.textContent = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
    personaSelect.appendChild(option);

    formPersona.reset();
});
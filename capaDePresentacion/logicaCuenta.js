const formCuenta = document.getElementById('formCuenta'); 
const tablaCuentas = document.getElementById('tablaCuentas');

formCuenta.addEventListener("submit", (e) => { // capturar el evento submit del formulario
    e.preventDefault();// evitar que se recargue la pagina
    // obtener los valores del formulario
    const numeroCuenta = document.getElementById("numeroCuenta").value;
    const saldo = parseFloat(document.getElementById("saldo").value);
    const tipo = document.getElementById("tipo").value;
    const personaId = parseInt(personaSelect.value);
    console.log({ numeroCuenta, saldo, tipo, personaId });
    // llamar al servicio para registrar la cuenta
    try {
        const nuevaCuenta = gestionarCuentas.registrarCuenta(numeroCuenta, saldo, tipo, personaId);
        
        // mostrar la nueva cuenta en la tabla
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nuevaCuenta.numeroCuenta}</td>
            <td>${nuevaCuenta.saldo.toFixed(2)}</td>
            <td>${nuevaCuenta.tipo}</td>
            <td>
                ${nuevaCuenta.persona.nombre} ${nuevaCuenta.persona.apellido}
                ${nuevaCuenta.persona.empresa ? " - " + nuevaCuenta.persona.empresa.toString() : ""}
            </td>
        `;
        tablaCuentas.appendChild(fila);

        formCuenta.reset();

        actualizarEstadisticas();

    } catch (error) {
        alert(error.message);
    }
});
const estadisticasDiv = document.getElementById('estadisticas');

function actualizarEstadisticas() {
    // 1. Obtener todas las cuentas del servicio.
    const cuentas = gestionarCuentas.listarCuentas();

    // 2. Inicializar contadores y saldos.
    let cantidadAhorro = 0;
    let cantidadCorriente = 0;
    let totalSaldo = 0;
    let totalSaldoAhorro = 0;
    let totalSaldoCorriente = 0;

    // 3. Iterar sobre las cuentas para calcular los valores.
    cuentas.forEach(cuenta => {
        totalSaldo += cuenta.saldo;
        if (cuenta.tipo === "Ahorro") {
            cantidadAhorro++;
            totalSaldoAhorro += cuenta.saldo;
        } else if (cuenta.tipo === "Corriente") {
            cantidadCorriente++;
            totalSaldoCorriente += cuenta.saldo;
        }
    });

    // 4. Actualizar los elementos en el HTML.
    document.getElementById('cantidadCuentas').textContent = cuentas.length;
    document.getElementById('cantidadAhorro').textContent = cantidadAhorro;
    document.getElementById('cantidadCorriente').textContent = cantidadCorriente;
    document.getElementById('totalSaldo').textContent = totalSaldo.toFixed(2);
    document.getElementById('totalSaldoAhorro').textContent = totalSaldoAhorro.toFixed(2);
    document.getElementById('totalSaldoCorriente').textContent = totalSaldoCorriente.toFixed(2);
}
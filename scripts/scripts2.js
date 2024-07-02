// Función para calcular el valor futuro en capitalización continua
function calcularCapitalizacionContinua() {
    // Obtener los valores de los campos de entrada
    let valorPresente = parseFloat(document.getElementById('monto-inicial').value);
    let tasaInteresContinua = parseFloat(document.getElementById('tasa-interes-continua').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);

    // Validar que los valores no sean NaN y que la tasa de interés y el tiempo sean positivos
    if (isNaN(valorPresente) || isNaN(tasaInteresContinua) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Calcular el valor futuro usando la fórmula de capitalización continua: VF = VP * e^(ic * T)
    let valorFuturo = valorPresente * Math.exp(tasaInteresContinua * tiempo);

    // Mostrar el resultado en el campo de valor futuro
    document.getElementById('monto-futuro').value = valorFuturo.toFixed(2);
}

// Función para limpiar los campos de entrada en Capitalización Continua
function limpiarCamposContinua() {
    document.getElementById('monto-inicial').value = '';
    document.getElementById('tasa-interes-continua').value = '';
    document.getElementById('tiempo').value = '';
    document.getElementById('monto-futuro').value = '';
}

// Asignar eventos a los botones específicos de Capitalización Continua
document.getElementById('calcular-continua').addEventListener('click', calcularCapitalizacionContinua);
document.getElementById('limpiar-continua').addEventListener('click', limpiarCamposContinua);





// Función para calcular el valor futuro en capitalización discreta
function calcularCapitalizacionDiscreta() {
    // Obtener los valores de los campos de entrada
    let capital = parseFloat(document.getElementById('capital-discreta').value);
    let tasaInteres = parseFloat(document.getElementById('tasa-interes-discreta').value);
    let periodoTiempo = parseFloat(document.getElementById('periodo-tiempo-discreta').value);

    // Validar que los valores no sean NaN y que sean positivos
    if (isNaN(capital) || isNaN(tasaInteres) || isNaN(periodoTiempo)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Calcular el valor futuro usando la fórmula de capitalización discreta: VF = P * (1 + r/m)^(mt)
    let valorFuturo = capital * Math.pow(1 + tasaInteres, periodoTiempo);

    // Mostrar el resultado en el campo de valor futuro
    document.getElementById('monto-futuro-discreta').value = valorFuturo.toFixed(2);
}

// Función para limpiar los campos de entrada en Capitalización Discreta
function limpiarCamposDiscreta() {
    document.getElementById('capital-discreta').value = '';
    document.getElementById('tasa-interes-discreta').value = '';
    document.getElementById('periodo-tiempo-discreta').value = '';
    document.getElementById('monto-futuro-discreta').value = '';
}

// Asignar eventos a los botones específicos de Capitalización Discreta
document.getElementById('calcular-discreta').addEventListener('click', calcularCapitalizacionDiscreta);
document.getElementById('limpiar-discreta').addEventListener('click', limpiarCamposDiscreta);





// Función para calcular el Valor Presente Neto (VPN)
function calcularVPN() {
    // Obtener los valores de los campos de entrada
    let flujoEfectivo = parseFloat(document.getElementById('flujo-efectivo-vpn').value);
    let tasaInteres = parseFloat(document.getElementById('tasa-interes-vpn').value);
    let periodos = parseInt(document.getElementById('periodos-vpn').value);
    let inversionInicial = parseFloat(document.getElementById('inversion-inicial-vpn').value);

    // Validar que los valores no sean NaN y que sean positivos
    if (isNaN(flujoEfectivo) || isNaN(tasaInteres) || isNaN(periodos) || isNaN(inversionInicial)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Inicializar el valor del VPN
    let vpn = 0;

    // Calcular la suma de los flujos de efectivo descontados
    for (let t = 1; t <= periodos; t++) {
        vpn += flujoEfectivo / Math.pow((1 + tasaInteres), t);
    }

    // Restar la inversión inicial
    vpn -= inversionInicial;

    // Mostrar el resultado en el campo de valor presente neto
    document.getElementById('valor-presente-neto').value = vpn.toFixed(2);
}

// Función para limpiar los campos de entrada en VPN
function limpiarCamposVPN() {
    document.getElementById('valor-presente-neto').value = '';
    document.getElementById('flujo-efectivo-vpn').value = '';
    document.getElementById('tasa-interes-vpn').value = '';
    document.getElementById('periodos-vpn').value = '';
    document.getElementById('inversion-inicial-vpn').value = '';
}

// Asignar eventos a los botones específicos de VPN
document.getElementById('calcular-vpn').addEventListener('click', calcularVPN);
document.getElementById('limpiar-vpn').addEventListener('click', limpiarCamposVPN);




// Función para calcular el análisis incremental
function calcularIncremental() {
    // Obtener los valores de los campos de entrada
    let flujosB = parseFloat(document.getElementById('flujos-proyecto-b').value);
    let flujosA = parseFloat(document.getElementById('flujos-proyecto-a').value);

    // Validar que los valores no sean NaN
    if (isNaN(flujosB) || isNaN(flujosA)) {
        alert("Por favor, ingrese valores válidos en ambos campos.");
        return;
    }

    // Calcular el valor incremental
    let incremental = flujosB - flujosA;

    // Mostrar el resultado en el campo de Incremental
    document.getElementById('incremental-valor').value = incremental.toFixed(2);
}

// Función para limpiar los campos de entrada en el análisis incremental
function limpiarCamposIncremental() {
    document.getElementById('flujos-proyecto-b').value = '';
    document.getElementById('flujos-proyecto-a').value = '';
    document.getElementById('incremental-valor').value = '';
}

// Asignar eventos a los botones específicos de Incremental
document.getElementById('calcular-incremental').addEventListener('click', calcularIncremental);
document.getElementById('limpiar-incremental').addEventListener('click', limpiarCamposIncremental);

/* -----------interés simple --------------------- */ 

function calcularInteresSimple() {
    // Obtener los valores de los campos de entrada
    let capital = parseFloat(document.getElementById('capital').value);
    let tasaInteres = parseFloat(document.getElementById('tasa-interes').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);

    // Validar que los valores no sean NaN
    if (isNaN(capital) || isNaN(tasaInteres) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Calcular el interés simple
    let interes = capital * tasaInteres * tiempo;

    // Mostrar el resultado en el campo de interés
    document.getElementById('interes').value = interes.toFixed(2);
}


function limpiarCampos() {
    document.getElementById('capital').value = '';
    document.getElementById('tasa-interes').value = '';
    document.getElementById('tiempo').value = '';
    document.getElementById('interes').value = '';
}


document.getElementById('calcular').addEventListener('click', calcularInteresSimple);
document.getElementById('limpiar').addEventListener('click', limpiarCampos);




/* -----------Interés Compuesto --------------------- */

function calcularCapitalFinal() {
    // Obtener los valores de los campos de entrada
    let capitalInicial = parseFloat(document.getElementById('capital-inicial').value);
    let tasaInteres = parseFloat(document.getElementById('tasa-interes').value);
    let numeroPeriodo = parseFloat(document.getElementById('numero-periodo').value);

    // Validar que los valores no sean NaN y que la tasa de interés sea en forma decimal
    if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(numeroPeriodo)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    // Calcular el capital final usando la fórmula de interés compuesto
    let capitalFinal = capitalInicial * Math.pow(1 + (tasaInteres / 100), numeroPeriodo);

    // Mostrar el resultado en el campo de capital final
    document.getElementById('capital-final').value = capitalFinal.toFixed(2);
}

// Función para limpiar los campos de entrada en Interés Compuesto
function limpiarCamposCompuesto() {
    document.getElementById('capital-inicial').value = '';
    document.getElementById('tasa-interes').value = '';
    document.getElementById('numero-periodo').value = '';
    document.getElementById('capital-final').value = '';
}

// Asignar eventos a los botones específicos de Interés Compuesto
document.getElementById('calcular-compuesto').addEventListener('click', calcularCapitalFinal);
document.getElementById('limpiar-compuesto').addEventListener('click', limpiarCamposCompuesto);


/* -----------Tasa nominal --------------------- */
function calcularTasaNominal() {
    
    let capitalInicial = parseFloat(document.getElementById('capital-inicial-nominal').value);
    let tasaInteresNominal = parseFloat(document.getElementById('tasa-interes-nominal').value);
    let numeroCapitalizaciones = parseInt(document.getElementById('numero-capitalizaciones-nominal').value);
    let tiempo = parseFloat(document.getElementById('tiempo-nominal').value);

    
    if (isNaN(capitalInicial) || isNaN(tasaInteresNominal) || isNaN(numeroCapitalizaciones) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    
    let capitalFinal = capitalInicial * Math.pow((1 + tasaInteresNominal / numeroCapitalizaciones), numeroCapitalizaciones * tiempo);

    
    document.getElementById('capital-final-nominal').value = capitalFinal.toFixed(2);
}


function limpiarCamposNominal() {
    document.getElementById('capital-inicial-nominal').value = '';
    document.getElementById('tasa-interes-nominal').value = '';
    document.getElementById('numero-capitalizaciones-nominal').value = '';
    document.getElementById('tiempo-nominal').value = '';
    document.getElementById('capital-final-nominal').value = '';
}


document.getElementById('calcular-nominal').addEventListener('click', calcularTasaNominal);
document.getElementById('limpiar-nominal').addEventListener('click', limpiarCamposNominal);



/* -----------tasa efectiva --------------------- */

function calcularTasaEfectiva() {
    
    let tasaInteresNominal = parseFloat(document.getElementById('tasa-interes-anual-efectiva').value);
    let numeroCapitalizaciones = parseInt(document.getElementById('numero-periodo-efectiva').value);

    
    if (isNaN(tasaInteresNominal) || isNaN(numeroCapitalizaciones)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    
    let tasaEfectiva = Math.pow(1 + tasaInteresNominal / numeroCapitalizaciones, numeroCapitalizaciones) - 1;

    
    document.getElementById('tasa-efectiva-resultado').value = (tasaEfectiva * 100).toFixed(2) + '%';
}


function limpiarCamposEfectiva() {
    document.getElementById('tasa-interes-anual-efectiva').value = '';
    document.getElementById('numero-periodo-efectiva').value = '';
    document.getElementById('tasa-efectiva-resultado').value = '';
}


document.getElementById('calcular-efectiva').addEventListener('click', calcularTasaEfectiva);
document.getElementById('limpiar-efectiva').addEventListener('click', limpiarCamposEfectiva);



/* -----------presupuesto del proyecto --------------------- */

function calcularPresupuestoProyecto() {
  
    let costosEntradas = parseFloat(document.getElementById('entradas').value);
    let costosProcesos = parseFloat(document.getElementById('procesos').value);
    let costosSalidas = parseFloat(document.getElementById('salidas').value);

    
    if (isNaN(costosEntradas) || isNaN(costosProcesos) || isNaN(costosSalidas)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    
    let presupuestoProyecto = costosEntradas + costosProcesos + costosSalidas;

    document.getElementById('presupuestoPro').value = presupuestoProyecto.toFixed(2);
}


function limpiarCamposPresupuesto() {
    document.getElementById('entradas').value = '';
    document.getElementById('procesos').value = '';
    document.getElementById('salidas').value = '';
    document.getElementById('presupuestoPro').value = '';
}


document.getElementById('calcular-presupuesto').addEventListener('click', calcularPresupuestoProyecto);
document.getElementById('limpiar-presupuesto').addEventListener('click', limpiarCamposPresupuesto);



/* -----------financiamiento --------------------- */

function calcularFinanciamiento() {
    
    let presupuestoNegocio = parseFloat(document.getElementById('presupuestoNegocio').value);
    let presupuestoProyecto = parseFloat(document.getElementById('presupuestoProyecto').value);

    
    if (isNaN(presupuestoNegocio) || isNaN(presupuestoProyecto)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    
    let financiamiento = presupuestoNegocio - presupuestoProyecto;

    
    document.getElementById('financiamiento').value = financiamiento.toFixed(2);
}


function limpiarCamposFinanciamiento() {
    document.getElementById('presupuestoNegocio').value = '';
    document.getElementById('presupuestoProyecto').value = '';
    document.getElementById('financiamiento').value = '';
}


document.getElementById('calcular-financiamiento').addEventListener('click', calcularFinanciamiento);
document.getElementById('limpiar-financiamiento').addEventListener('click', limpiarCamposFinanciamiento);

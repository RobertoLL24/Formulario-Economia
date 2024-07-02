
document.addEventListener('DOMContentLoaded', () => {

    // --------------------"Interes simple" ----------------------------
    
    const botonCalcular = document.getElementById('calcular');
    const botonLimpiar = document.getElementById('limpiar');

    // Función para calcular la tasa de interés
    botonCalcular.addEventListener('click', () => {
        // Obtén los valores de los campos de entrada
        const interes = parseFloat(document.getElementById('interes').value);
        const capital = parseFloat(document.getElementById('capital').value);

        // Verifica que los valores no sean NaN
        if (isNaN(interes) || isNaN(capital) || capital === 0) {
            alert('Por favor, ingresa valores válidos y asegúrate de que el capital no sea cero.');
            return;
        }

        // Calcula la tasa de interés
        const tasaInteres = interes / capital;

        // Muestra el resultado en el campo de la tasa de interés
        document.getElementById('tasa-interes').value = tasaInteres.toFixed(2);
    });

    // Función para limpiar los campos de entrada
    botonLimpiar.addEventListener('click', () => {
        document.getElementById('tasa-interes').value = '';
        document.getElementById('interes').value = '';
        document.getElementById('capital').value = '';
    });

      // --------------------"Monto Final" ----------------------------

      const botonCalcularMontoFinal = document.getElementById('calcular-monto-final');
      const botonLimpiarMontoFinal = document.getElementById('limpiar-monto-final');
  
      botonCalcularMontoFinal.addEventListener('click', () => {
          const capitalMontoFinal = parseFloat(document.getElementById('capital-monto-final').value);
          const interesMontoFinal = parseFloat(document.getElementById('interes-monto-final').value);
  
          if (isNaN(capitalMontoFinal) || isNaN(interesMontoFinal)) {
              alert('Por favor, ingresa valores válidos.');
              return;
          }
  
          const montoFinal = capitalMontoFinal + interesMontoFinal;
          document.getElementById('monto-valor-f').value = montoFinal.toFixed(2);
      });
  
      botonLimpiarMontoFinal.addEventListener('click', () => {
          document.getElementById('monto-valor-f').value = '';
          document.getElementById('capital-monto-final').value = '';
          document.getElementById('interes-monto-final').value = '';
      });

       
      // --------------------"Interes ganado" ----------------------------
    const botonCalcularInteresGanado = document.getElementById('calcular-interes-ganado');
    const botonLimpiarInteresGanado = document.getElementById('limpiar-interes-ganado');

    botonCalcularInteresGanado.addEventListener('click', () => {
        const capital = parseFloat(document.getElementById('capital-interes-ganado').value);
        const tasaInteres = parseFloat(document.getElementById('tasa-interes-ganado').value);
        const tiempo = parseFloat(document.getElementById('tiempo-interes-ganado').value);

        if (isNaN(capital) || isNaN(tasaInteres) || isNaN(tiempo)) {
            alert('Por favor, ingresa valores válidos.');
            return;
        }

        const interesGanado = capital * tasaInteres * tiempo;
        document.getElementById('intereses-ganados').value = interesGanado.toFixed(2);
    });

    botonLimpiarInteresGanado.addEventListener('click', () => {
        document.getElementById('intereses-ganados').value = '';
        document.getElementById('tasa-interes-ganado').value = '';
        document.getElementById('capital-interes-ganado').value = '';
        document.getElementById('tiempo-interes-ganado').value = '';
    });

    
     // --------------------"Monto con Interés Simple" ----------------------------
     const botonCalcularMontoInteres = document.getElementById('calcular-monto-interes');
     const botonLimpiarMontoInteres = document.getElementById('limpiar-monto-interes');
 
     botonCalcularMontoInteres.addEventListener('click', () => {
         const capital = parseFloat(document.getElementById('capital-monto').value);
         const tasaInteres = parseFloat(document.getElementById('tasa-interes-monto').value);
         const tiempo = parseFloat(document.getElementById('tiempo-monto').value);
 
         if (isNaN(capital) || isNaN(tasaInteres) || isNaN(tiempo)) {
             alert('Por favor, ingresa valores válidos.');
             return;
         }
 
         // Calculando el Monto (Valor Futuro) usando la fórmula: M = C * (1 + i * t)
         const valorFuturo = capital * (1 + tasaInteres * tiempo);
         document.getElementById('valor-futuro').value = valorFuturo.toFixed(2);
     });
 
     botonLimpiarMontoInteres.addEventListener('click', () => {
         document.getElementById('valor-futuro').value = '';
         document.getElementById('capital-monto').value = '';
         document.getElementById('tasa-interes-monto').value = '';
         document.getElementById('tiempo-monto').value = '';
     });


     // --------------------"Ventas a Plazo" ----------------------------
    const botonCalcularVentasPlazos = document.getElementById('calcular-ventas-plazos');
    const botonLimpiarVentasPlazos = document.getElementById('limpiar-ventas-plazos');

    botonCalcularVentasPlazos.addEventListener('click', () => {
        const periodos = parseFloat(document.getElementById('periodos').value);
        const interes = parseFloat(document.getElementById('intereses').value);
        const saldoInsoluto = parseFloat(document.getElementById('saldo-insoluto').value);
        const tiempo = parseFloat(document.getElementById('tiempo').value);

        if (isNaN(periodos) || isNaN(interes) || isNaN(saldoInsoluto) || isNaN(tiempo)) {
            alert('Por favor, ingresa valores válidos.');
            return;
        }

        // Aplicando la fórmula: i = (2 * m * l) / (B * (t + 1) - l * (t - 1))
        const tasaInteres = (2 * periodos * interes) / (saldoInsoluto * (tiempo + 1) - interes * (tiempo - 1));
        
        document.getElementById('tasa-interes').value = tasaInteres.toFixed(6);
    });

    botonLimpiarVentasPlazos.addEventListener('click', () => {
        document.getElementById('tasa-interes').value = '';
        document.getElementById('periodos').value = '';
        document.getElementById('intereses').value = '';
        document.getElementById('saldo-insoluto').value = '';
        document.getElementById('tiempo').value = '';
    });

    // --------------------"Ventas a Plazo (Interés)" ----------------------------
    const botonCalcularPlazosIntereses = document.getElementById('calcular-plazos-intereses');
    const botonLimpiarPlazosIntereses = document.getElementById('limpiar-plazos-intereses');

    botonCalcularPlazosIntereses.addEventListener('click', () => {
        const valorPago = parseFloat(document.getElementById('valor-pago').value);
        const tiempo = parseFloat(document.getElementById('plazos-tiempo').value);
        const saldoInsoluto = parseFloat(document.getElementById('plazos-saldo-insoluto').value);

        if (isNaN(valorPago) || isNaN(tiempo) || isNaN(saldoInsoluto)) {
            alert('Por favor, ingresa valores válidos.');
            return;
        }

        // Aplicando la fórmula: l = R * t - B
        const interes = (valorPago * tiempo) - saldoInsoluto;
        
        document.getElementById('plazos-intereses').value = interes.toFixed(2);
    });

    botonLimpiarPlazosIntereses.addEventListener('click', () => {
        document.getElementById('plazos-intereses').value = '';
        document.getElementById('valor-pago').value = '';
        document.getElementById('plazos-tiempo').value = '';
        document.getElementById('plazos-saldo-insoluto').value = '';
    });


    // --------------------"Ventas a Plazo (Saldo Insoluto)" ----------------------------
    const botonCalcularPlazosInsoluto = document.getElementById('calcular-plazos-insoluto');
    const botonLimpiarPlazosInsoluto = document.getElementById('limpiar-plazos-insoluto');

    botonCalcularPlazosInsoluto.addEventListener('click', () => {
        const precioContado = parseFloat(document.getElementById('precio-contado').value);
        const cuotaInicial = parseFloat(document.getElementById('cuota-inicial').value);

        if (isNaN(precioContado) || isNaN(cuotaInicial)) {
            alert('Por favor, ingresa valores válidos.');
            return;
        }

        // Aplicando la fórmula: B = Pc - Ci
        const saldoInsoluto = precioContado - cuotaInicial;
        
        document.getElementById('saldo-insoluto').value = saldoInsoluto.toFixed(2);
    });

    botonLimpiarPlazosInsoluto.addEventListener('click', () => {
        document.getElementById('saldo-insoluto').value = '';
        document.getElementById('precio-contado').value = '';
        document.getElementById('cuota-inicial').value = '';
    });

    

    // --------------------"Valor futuro" ----------------------------
    const botonCalcularFuturo = document.getElementById('calcular-futuro');
    const botonLimpiarFuturo = document.getElementById('limpiar-futuro');

    botonCalcularFuturo.addEventListener('click', () => {
        const valorPresente = parseFloat(document.getElementById('valor-presente').value);
        const tasaInteres = parseFloat(document.getElementById('tasa-interes-futuro').value);
        const numeroPeriodos = parseFloat(document.getElementById('no-periodos').value);

        if (isNaN(valorPresente) || isNaN(tasaInteres) || isNaN(numeroPeriodos)) {
            alert('Por favor, ingresa valores válidos.');
            return;
        }

        // Aplicando la fórmula: F = P * (1 + i)^n
        const valorFuturo = valorPresente * Math.pow((1 + tasaInteres), numeroPeriodos);

        document.getElementById('valor-final').value = valorFuturo.toFixed(2);
    });

    botonLimpiarFuturo.addEventListener('click', () => {
        document.getElementById('valor-final').value = '';
        document.getElementById('valor-presente').value = '';
        document.getElementById('tasa-interes-futuro').value = '';
        document.getElementById('no-periodos').value = '';
    });

});

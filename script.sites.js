document.addEventListener('DOMContentLoaded', function() {
    const btnRegresar = document.getElementById('btnRegresar');
    
    btnRegresar.addEventListener('click', function() {
        window.history.back();
    });
});

function limpiarBuscador() {
    const inputBuscador = document.querySelector('.input-busqueda');
    
    if (inputBuscador) {
        inputBuscador.value = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {   

    limpiarBuscador(); 

    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            limpiarBuscador();
        }
    });

    configurarModal7Pilares();
});

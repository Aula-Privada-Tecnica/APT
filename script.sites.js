document.addEventListener('DOMContentLoaded', function() {
    const btnRegresar = document.getElementById('btnRegresar');
    
    btnRegresar.addEventListener('click', function() {
        window.history.back();
    });
});

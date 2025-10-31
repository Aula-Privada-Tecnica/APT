function toggleMenu() {
    const menuBtn = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    const isHidden = menu.classList.contains("oculto");

    if (isHidden) {
        menu.classList.remove("oculto");
        menuBtn.textContent = "✖";
    } else {
        menu.classList.add("oculto");
        menuBtn.textContent = "☰";
    }
}

function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("oculto");

    const contenido = modal.querySelector(".modal-contenido, .contenido-modal");
    if (contenido) {
        contenido.style.animation = "aparecer 0.4s forwards";
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    const contenido = modal.querySelector(".modal-contenido, .contenido-modal");
    if (contenido) {
        contenido.style.animation = "desaparecer 0.3s forwards";
        setTimeout(() => {
            modal.classList.add("oculto");

            if (id === "clubModal") {
                const pinInput = document.getElementById("pinClub");
                const resultado = document.getElementById("resultadoClub");
                if (pinInput) pinInput.value = "";
                if (resultado) resultado.innerText = "";
            }

            if (id === "formularioModal") {
                const formulario = document.getElementById("formularioRegistro");
                if (formulario) formulario.reset();
            }
        }, 300);
    } else {
        modal.classList.add("oculto");
    }
}

function validarFormulario() {
    const fechaInicio = new Date(document.getElementById("fechaInicio").value);
    const fechaMinima = new Date("2026-02-03");

    if (fechaInicio <= fechaMinima) {
        alert("La fecha de inicio debe ser posterior al 2 de febrero de 2026.");
        return false;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const mes = document.getElementById("mesNacimiento").value.padStart(2, '0');
    const dia = document.getElementById("diaNacimiento").value.padStart(2, '0');

    const codigo = `${nombre[0] || 'X'}${apellido[0] || 'X'}-${mes}${dia}-${Math.floor(Math.random() * 900 + 100)}`;
    alert(`Formulario enviado correctamente.\nTu código estudiantil es: ${codigo}`);

    cerrarModal("formularioModal");
    return false;
}

function validarPin() {
    const pinInput = document.getElementById('pinClub');
    const resultado = document.getElementById('resultadoClub');
    const pin = pinInput.value.trim();

    const aplicarEstilosBase = (color) => {
        resultado.style.color = color;
        resultado.style.padding = '1vh';
        resultado.style.backgroundColor = 'transparent';
        resultado.style.border = 'none';
        resultado.style.borderRadius = '0';
    };

    if (pin.length !== 12) {
        resultado.innerText = "❌ El PIN debe tener exactamente 12 dígitos.";

        aplicarEstilosBase('#051020');
        return;
    }

    if (estudiantesClub.hasOwnProperty(pin)) {
        const estudiante = estudiantesClub[pin];
        resultado.innerText = `✅ ¡Bienvenido ${estudiante.nombre} ${estudiante.apellido}! Acceso concedido al Club.`;
        aplicarEstilosBase('green');


    } else {
        resultado.innerText = "❌ PIN incorrecto. Acceso denegado. Inténtalo de nuevo.";
        aplicarEstilosBase('red');
    }
}

const estudiantesClub = {
    "24263242631": { nombre: "ZXC", apellido: "VBN" },
    "13215": { nombre: "QWE", apellido: "RTY" },
    "1104": { nombre: "ASD", apellido: "FGH" },
};

function mostrarBotonClub() {
    document.getElementById("seccionClubes").classList.remove("oculto");
}

function configurarModal7Pilares() {
    const abrirBtn = document.getElementById('abrirBloquesBtn');
    const cerrarBtn = document.getElementById('cerrarBloquesBtn');
    const bloquesModal = document.getElementById('bloquesAlternadosModal');

    if (abrirBtn) {
        abrirBtn.addEventListener('click', function() {
            if(bloquesModal) bloquesModal.classList.remove('oculto'); 
        });
    }

    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', function() {
            if(bloquesModal) bloquesModal.classList.add('oculto'); 
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const anuncio = document.getElementById('anuncioModal');
    const botonCerrar = document.getElementById('cerrarAnuncio');
    
    if (anuncio) {
        anuncio.style.display = 'flex';
    }

    if (botonCerrar) {
        botonCerrar.addEventListener('click', function() {
            if (anuncio) {
                anuncio.style.display = 'none';
            }
        });
    }

    configurarModal7Pilares();
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


document.addEventListener('keydown', function(e) {

    if (e.key === 'F12') {
        e.preventDefault();
    }

    if ((e.ctrlKey || e.metaKey) && (e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
    }
});


function limpiarBuscador() {
    const inputBuscador = document.querySelector('.input-busqueda');
    if (inputBuscador) {
        inputBuscador.value = "";
    }
}


document.addEventListener('DOMContentLoaded', function() {

    configurarModal7Pilares(); 
    
    limpiarBuscador();

    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            limpiarBuscador();
        }
    });
    
});



     let indice = 0;
const imagenes = ['./img/cid.jpg', './img/MasterShadow.jpg', './img/john smith.png'];
const fondo = document.querySelector("#carrusel");
const selectCarrusel = document.getElementById("selectCarrusel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Llenar el select con opciones basadas en las imágenes
for (let i = 0; i < imagenes.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `Imagen ${i + 1}`;
    selectCarrusel.appendChild(option);
}

// Función para cambiar la imagen en función de la selección del select
selectCarrusel.addEventListener("change", () => {
    indice = parseInt(selectCarrusel.value);
    mostrarImagenSeleccionada();
});

// Función para mostrar la imagen actual
function mostrarImagenSeleccionada() {
    let imagenActual = imagenes[indice];
    fondo.style.backgroundImage = `url('${imagenActual}')`;
    fondo.style.backgroundSize = "cover";
}

prev.addEventListener("click", () => {
    if (indice === 0) {
        indice = imagenes.length - 1;
    } else {
        indice--;
    }
    mostrarImagenSeleccionada();
});

next.addEventListener("click", () => {
    if (indice === imagenes.length - 1) {
        indice = 0;
    } else {
        indice++;
    }
    mostrarImagenSeleccionada();
});

// Mostrar la imagen inicial
mostrarImagenSeleccionada();

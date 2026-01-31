function saludar() {
    var nombre = document.getElementById("nombre").value;
    var resultado = document.getElementById("resultado");

    if (nombre.trim() === "") {
        resultado.textContent = "Por favor escribe tu nombre";
    } else {
        resultado.textContent = "Bienvenido al mejor sitio web "  + nombre;
    }
}

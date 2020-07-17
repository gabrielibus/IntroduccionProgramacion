let contenido = {
  "1": {
    pregunta: "¿Qué es programar?",
    respuesta: "",
  },
  "2": {
    pregunta: "¿Qué vamos a aprender?",
    respuesta: "",
  },
  "3": {
    pregunta: "¿Durante cuánto tiempo?",
    respuesta: "",
  },
  "4": {
    pregunta: "¿Por qué razón debes aprender a programar?",
    respuesta: "",
  },
}

let cajonDeRespuesta = document.getElementById("respuesta")

function revelarRespuesta() {
  cajonDeRespuesta.innerHTML = "respuesta revelada"
}

function reiniciarNavegador() {
  window.location.reload(true)
}

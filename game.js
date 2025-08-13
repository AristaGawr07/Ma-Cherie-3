// Datos del juego en español
const niveles = [
  {
    id: 1,
    tiempoLimite: 180, // 3 minutos
    preguntas: [
      {
        pregunta: "¿Qué color de rosas prefiero?",
        opciones: ["Rojas", "Blancas", "Moradas", "Amarillas"],
        respuesta: 2,
        mensajeRomantico: "Las rosas rosas representan el cariño y la admiración que siento por ti"
      },
      {
        pregunta: "¿Dónde fue nuestro primer beso?",
        opciones: ["En tu casa", "En el cine", "Bajo la lluvia", "En el parque"],
        respuesta: 0,
        mensajeRomantico: "Nunca olvidaré cómo temblaban tus labios cuando nos besamos por primera vez"
      },
      {
        pregunta: "¿Cuál es mi postre favorito?",
        opciones: ["Helado", "Tus piernas", "Flan", "Tus patitas"],
        respuesta: 1,
        mensajeRomantico: "Eres más dulce que cualquier postre que pueda existir"
      },
      {
        pregunta: "¿Qué hice que te hizo sonreír por primera vez?",
        opciones: ["Un poema", "Un regalo inesperado", "Una carta", "Mi timidez"],
        respuesta: 0,
        mensajeRomantico: "Tu sonrisa es mi mayor tesoro y haría lo que fuera por verla cada día"
      },
      {
        pregunta: "¿En qué mes celebramos nuestro aniversario?",
        opciones: ["Marzo", "Julio", "Noviembre", "Mayo"],
        respuesta: 3,
        mensajeRomantico: "Cada mes que pasa a tu lado es un regalo que atesoro"
      },
      {
        pregunta: "¿Qué canción asocias con nuestro amor?",
        opciones: ["Brillas", "Te quiero", "Perfecta", "Sin documentos"],
        respuesta: 3,
        mensajeRomantico: "Nuestra canción perfecta aún no está escrita, porque se crea cada día que estamos juntos"
      },
      {
        pregunta: "¿Qué animal dice que me representa?",
        opciones: ["Un Machapa", "Un cocodrilo", "Un lobo domesticado", "Un gato"],
        respuesta: 0,
        mensajeRomantico: "Como un machapa, quiero robarte y abrazarte siempre"
      },
      {
        pregunta: "¿Qué película vimos juntos en nuestra primera cita?",
        opciones: ["Un lugar en silencio", "Interestelar", "Deadpool", "No vimos película"],
        respuesta: 3,
        mensajeRomantico: "Prefiero mil veces mirar tus ojos que cualquier película"
      },
      {
        pregunta: "¿Qué me gusta hacer los domingos por la mañana?",
        opciones: ["Dormir hasta tarde", "Ver una serie", "Comprarnos el desayuno", "Estar acostado contigo"],
        respuesta: 3,
        mensajeRomantico: "Cada mañana a tu lado es un regalo que atesoro"
      },
      {
        pregunta: "¿Qué ciudad soñamos con visitar juntos?",
        opciones: ["Japón", "Venecia", "Nueva York", "Brazil"],
        respuesta: 0,
        mensajeRomantico: "El lugar más hermoso del mundo es donde estés tú"
      }
    ],
    poema: "Como las olas al mar, mi amor por ti fluye sin cesar..."
  },
  {
    id: 2,
    tiempoLimite: 240, // 4 minutos
    preguntas: [
      {
        pregunta: "¿Qué recuerdo de nuestra primera cita menciono más?",
        opciones: ["La hora que fue", "Lo que tomamos", "Cómo me vestí", "Lo nerviosos que estába"],
        respuesta: 3,
        mensajeRomantico: "Ese día supe que habías llegado para cambiar mi vida"
      },
      {
        pregunta: "¿Qué película puedeee que me haga llorar?",
        opciones: ["Cómo entrenar a tu dragón 2", "Guardianes de la galaxia 3", "Cómo entrenar a tu dragón", "Titanes del pacífico"],
        respuesta: 0,
        mensajeRomantico: "Las películas pueden que no me hagan llorar, pero tú mi vida me haces feliz"
      },
      {
        pregunta: "¿Qué recuerdo nuestro guardo en mi billetera?",
        opciones: ["Una foto tuya", "Un ticket de cine", "Un papelito tuyo", "Un papelito de la suerte"],
        respuesta: 0,
        mensajeRomantico: "Llevo tu imagen conmigo como el tesoro más valioso"
      },
      {
        pregunta: "¿Qué deporte hemos practicado juntos?",
        opciones: ["Tenis", "Senderismo", "Cardio", "Dormir todo el día"],
        respuesta: 2,
        mensajeRomantico: "Con el cardio siempre mejoramos nuestra condición vida mía"
      },
      {
        pregunta: "¿Qué flor plantamos juntos simbólicamente?",
        opciones: ["Un cactus", "Una azucena", "Una piña", "Una lavanda"],
        respuesta: 1,
        mensajeRomantico: "Cuánto costó conseguirlas todas, aún así nuestro amor crece y florece cada día"
      },
      {
        pregunta: "¿Qué frase mía te hace sonreír siempre?",
        opciones: ["Eres mi mundo", "Te amo", "Eres mi todo", "Eres mi vida entera"],
        respuesta: 3,
        mensajeRomantico: "Tu sonrisa es mi motivación cada día"
      },
      {
        pregunta: "¿Qué tradición hemos creado juntos?",
        opciones: ["Cenas los viernes", "Paseos mensuales", "Estar juntos fines de semana", "Fotos en cada lugar nuevo"],
        respuesta: 2,
        mensajeRomantico: "Las tradiciones más bellas son las que creamos juntos"
      },
      {
        pregunta: "¿Qué me gusta cocinarte especialmente?",
        opciones: ["Pastel de chocolate", "Galletas", "Pasta", "Boneles"],
        respuesta: 3,
        mensajeRomantico: "Cocinar para ti es mi manera de decir te amo sin palabras"
      },
      {
        pregunta: "¿Qué hábito tuyo he adoptado?",
        opciones: ["Tu forma de dormir", "Tu forma de no ser mal hecha", "Tu comida preferida", "Tu rutina matutina"],
        respuesta: 0,
        mensajeRomantico: "Poco a poco me vuelvo más como tú, y me encanta"        
      },
      {
       pregunta: "¿Qué me hace falta cuando no estás?",
       opciones: ["Tu voz", "Tu olor", "Tu calor", "Todo de ti"],
       respuesta: 3,
       mensajeRomantico: "Hasta el aire sabe diferente cuando no estás conmigo"
      }
    ],
    poema: "Eres el sol que ilumina mis días más grises..."
  },
  {
    id: 3,
    tiempoLimite: 300, // 5 minutos
    preguntas: [
      {
        pregunta: "¿Qué recuerdo de la infancia compartí contigo?",
        opciones: ["Mi juguete favorito", "Un accidente familiar", "Mi mayor travesura", "Como se quemo mi casa"],
        respuesta: 3,
        mensajeRomantico: "Eres el tan caliente como el mismo"
      },
      {
        pregunta: "¿Qué deporte hemos practicado juntos?",
        opciones: ["Tenis", "Ciclismo", "Senderismo", "Ninguno"],
        respuesta: 2,
        mensajeRomantico: "Cada paso a tu lado es una aventura"
      },
      {
        pregunta: "¿Qué apodo cariñoso te digo en privado?",
        opciones: ["Cariño", "Amor", "Mi vida", "Ma chérie"],
        respuesta: 3,
        mensajeRomantico: "Ninguna palabra basta para expresar lo que siento por ti"
      },
      {
        pregunta: "¿Qué detalle tuyo me sorprendió gratamente?",
        opciones: ["Tu paciencia", "Tu generosidad", "Tu creatividad", "Tu forma de escuchar y ver las cosas"],
        respuesta: 3,
        mensajeRomantico: "Eres una caja de sorpresas maravillosas"
      },
      {
        pregunta: "¿Qué lugar visitado juntos es nuestro favorito?",
        opciones: ["La alverca", "Aquel café pequeño", "El cerro", "la casa de morelos"],
        respuesta: 1,
        mensajeRomantico: "El cafe como el Hermoso cafe de tus ojos"
      },
      {
        pregunta: "¿Qué detalle nuestro guardo en mi celular?",
        opciones: ["Nuestras conversaciones", "Tus fotos", "Tus audios", "Nuestra playlist"],
        respuesta: 3,
        mensajeRomantico: "Todos, pero con las canciones te siento en mi cabeza cantando"
      },
      {
      pregunta: "¿Qué me gusta susurrarte al oído?",
      opciones: ["Te amo", "Eres mía", "Te voy a comer", "Todas las anteriores"],
      respuesta: 3,
      mensajeRomantico: "Mis susurros son promesas que durarán toda la vida"
      },
      {
        pregunta: "¿Qué actividad cotidiana disfruto más hacer contigo?",
        opciones: ["Hacer el quehacer", "HAcer la comida", "IR al centro", "Hacer la compra"],
        respuesta: 1,
        mensajeRomantico: "Los momentos más simples se convierten en especiales cuando estás tú"
      },
      {
        pregunta: "¿Qué parte de tu cuerpo beso más?",
        opciones: ["Los labios", "La frente", "Las manos", "La nariz"],
        respuesta: 2,
        mensajeRomantico: "Tocarte es mi forma de reconectar contigo"
      },
      {
        pregunta: "¿Qué cualidad tuya admiro más?",
        opciones: ["Tu valentía", "Tu honestidad", "Tu sentido del humor", "Tu capacidad de amar"],
        respuesta: 3,
        mensajeRomantico: "Eres la persona más completa que conozco"
      }
    ],
    poema: "Si el amor fuese un viaje, contigo sería eterno..."
  }
];

// Variables del juego
let nivelActual = 0;
let corazonesGanados = 0;
let tiempoRestante = 0;
let temporizador;
let intentosRestantes = 2;
let preguntaActual = null;
let preguntasDisponibles = [];

// Elementos del DOM
const contenedorPregunta = document.getElementById('pregunta-container');
const opcionesContainer = document.getElementById('opciones-container');
const tiempoEl = document.getElementById('tiempo');
const nivelEl = document.getElementById('nivel');
const corazonesEl = document.getElementById('corazones');

// Iniciar juego
function iniciarJuego() {
  corazonesGanados = 0;
  actualizarCorazones();
  cargarNivel(nivelActual);
}

function cargarNivel(nivelIndex) {
  if (nivelIndex >= niveles.length) {
    // Juego completado
    contenedorPregunta.innerHTML = `
      <div class="mensaje-final">
        <h2>¡Felicidades!</h2>
        <p>Has completado todos los niveles del juego</p>
        <p class="poema">Eres el amor de mi vida y este juego es solo un pequeño reflejo de lo que siento por ti</p>
        <button onclick="reiniciarJuego()" class="btn-opcion">Jugar de nuevo</button>
      </div>
    `;
    opcionesContainer.innerHTML = '';
    clearInterval(temporizador);
    return;
  }
  
  const nivel = niveles[nivelIndex];
  nivelEl.textContent = nivel.id;
  tiempoRestante = nivel.tiempoLimite;
  actualizarTemporizador();
  
  // Reiniciar preguntas disponibles para este nivel
  preguntasDisponibles = [...nivel.preguntas];
  
  if (temporizador) clearInterval(temporizador);
  temporizador = setInterval(actualizarTemporizador, 1000);
  
  mostrarNuevaPregunta();
}

function mostrarNuevaPregunta() {
  if (preguntasDisponibles.length === 0) {
    // No hay más preguntas en este nivel
    mostrarMensajeRomantico();
    return;
  }
  
  // Seleccionar una pregunta aleatoria de las disponibles
  const randomIndex = Math.floor(Math.random() * preguntasDisponibles.length);
  preguntaActual = preguntasDisponibles[randomIndex];
  
  // Eliminar la pregunta seleccionada para que no se repita
  preguntasDisponibles.splice(randomIndex, 1);
  
  intentosRestantes = 2;
  
  contenedorPregunta.innerHTML = `<h3>${preguntaActual.pregunta}</h3>`;
  opcionesContainer.innerHTML = '';
  
  preguntaActual.opciones.forEach((opcion, index) => {
    const boton = document.createElement('button');
    boton.className = 'btn-opcion';
    boton.textContent = opcion;
    boton.addEventListener('click', () => verificarRespuesta(index));
    opcionesContainer.appendChild(boton);
  });
}

function verificarRespuesta(indiceOpcion) {
  // Deshabilitar todos los botones
  const botones = document.querySelectorAll('.btn-opcion');
  botones.forEach(boton => {
    boton.disabled = true;
    boton.style.pointerEvents = 'none';
  });

  if (indiceOpcion === preguntaActual.respuesta) {
    // Respuesta correcta
    corazonesGanados++;
    actualizarCorazones();
    mostrarRetroalimentacion(true);
    
    setTimeout(() => {
      if (corazonesGanados >= 5) { // Requiere 5 corazones para pasar de nivel
        mostrarMensajeRomantico();
      } else {
        mostrarNuevaPregunta();
      }
    }, 1500);
  } else {
    // Respuesta incorrecta
    corazonesGanados = Math.max(0, corazonesGanados - 1);
    actualizarCorazones();
    intentosRestantes--;
    
    if (intentosRestantes <= 0) {
      mostrarRetroalimentacion(false);
      setTimeout(reiniciarNivel, 2000);
    } else {
      mostrarRetroalimentacion('intento');
      setTimeout(() => {
        // Volver a habilitar los botones para el siguiente intento
        botones.forEach(boton => {
          boton.disabled = false;
          boton.style.pointerEvents = 'auto';
        });
        // Mostrar la misma pregunta para el nuevo intento
        contenedorPregunta.innerHTML = `<h3>${preguntaActual.pregunta}</h3>`;
      }, 1000);
    }
  }
}

function actualizarCorazones() {
  corazonesEl.textContent = corazonesGanados;
}

function mostrarRetroalimentacion(resultado) {
  const mensajes = {
    true: `<p class='correcto'>¡Correcto! ${preguntaActual.mensajeRomantico}</p>`,
    false: `<p class='incorrecto'>¡Oh no! Perdiste un corazón</p>`,
    intento: `<p class='intento'>Intenta de nuevo, te quedan ${intentosRestantes} intentos</p>`
  };
  
  contenedorPregunta.innerHTML += mensajes[resultado];
}

function reiniciarNivel() {
  corazonesGanados = 0;
  actualizarCorazones();
  cargarNivel(nivelActual);
}

function reiniciarJuego() {
  nivelActual = 0;
  iniciarJuego();
}

function mostrarMensajeRomantico() {
  clearInterval(temporizador);
  const nivel = niveles[nivelActual];
  
  contenedorPregunta.innerHTML = `
    <div class="mensaje-final">
      <h2>¡Nivel ${nivel.id} Completado!</h2>
      <p class="poema">${nivel.poema}</p>
      <p>Has ganado ${corazonesGanados} corazones</p>
      <button onclick="siguienteNivel()" class="btn-opcion">Siguiente Nivel</button>
    </div>
  `;
  
  opcionesContainer.innerHTML = '';
}

function siguienteNivel() {
  nivelActual++;
  corazonesGanados = 0;
  actualizarCorazones();
  cargarNivel(nivelActual);
}

function actualizarTemporizador() {
  tiempoRestante--;
  
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  tiempoEl.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    mostrarRetroalimentacion(false);
    setTimeout(reiniciarNivel, 2000);
  }
  
  // Cambiar color cuando quede poco tiempo
  if (tiempoRestante <= 15) {
    tiempoEl.style.color = '#dc3545';
    tiempoEl.style.fontWeight = 'bold';
  } else {
    tiempoEl.style.color = '';
    tiempoEl.style.fontWeight = '';
  }
}
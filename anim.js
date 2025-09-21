// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Yo soy tuyo, mi amor", time: 0 },
  { text: "Y tú eres mío, mi vida", time: 5 },
  { text: "Juntos vamos a luchar", time: 10 },
  { text: "Contra el mundo, mi corazón", time: 15 },
  { text: "Tu sonrisa ilumina mi día", time: 20 },
  { text: "Tu amor me da fuerza y valentía", time: 25 },
  { text: "Contigo soy feliz", time: 30 },
  { text: "Y nada nos puede separar", time: 35 },
  { text: "Yo soy tuyo, mi amor", time: 40 },
  { text: "Y tú eres mío, mi vida", time: 45 },
  { text: "Juntos vamos a luchar", time: 50 },
  { text: "Contra el mundo, mi corazón", time: 55 },
  { text: "Tu presencia me da paz", time: 60 },
  { text: "Y con tu amor, nada temo ya", time: 65 },
  { text: "Contigo soy feliz", time: 70 },
  { text: "Y nada nos puede separar", time: 75 },
  { text: "Yo soy tuyo, mi amor", time: 80 },
  { text: "Y tú eres mío, mi vida", time: 85 },
  { text: "Juntos vamos a luchar", time: 90 },
  { text: "Contra el mundo, mi corazón", time: 95 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
function createNewGame() {
    // Generar número random de 4 dígitos (1000 a 9999)
    const codigo = Math.floor(1000 + Math.random() * 9000);
  
    // Redirigir a otra página, pasando el código como parámetro en la URL
    window.location.href = `bank.html?codigo=${codigo}`;
  }

// Referencias a los botones
const btnCrear = document.getElementById('createGame');
const btnUnirse = document.getElementById('joinGame');

// Crear partida
btnCrear.addEventListener('click', () => {
  const nombrePartida = document.getElementById('name').value;

  if (!nombrePartida) {
    alert('Por favor, ingresa un nombre para la partida.');
    return;
  }
  createNewGame()
});

// Unirse a partida
btnUnirse.addEventListener('click', () => {
  const codigoPartida = document.getElementById('joinCode').value;

  if (!codigoPartida) {
    alert('Por favor, ingresa el código de la partida.');
    return;
  }
  const nombreJugador = prompt('Ingresa tu nombre para unirte a la partida:');
  window.location.href = `player.html?codigo=${codigoPartida}`;
});
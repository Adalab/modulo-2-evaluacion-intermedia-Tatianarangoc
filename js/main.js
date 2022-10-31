const select_element = document.querySelector('.select');
const btn_element = document.querySelector('.js_btn');
const result_element = document.querySelector('.container_text');
const mensajePc_element = document.querySelector('.mensajepc');
const puntos_element = document.querySelector('.puntos');

let puntosJugador = 0;
let puntosPc = 0;

function validarGanador(razaJugador, pc) {
  if (razaJugador > pc) {
    puntosJugador = puntosJugador + 1;
    return 'Ha Ganado el ejercito del bien! En horabuena.';
  } else if (razaJugador < pc) {
    puntosPc = puntosPc + 1;
    return ' Ha ganado el ejercito del mal';
  } else {
    return 'Empate';
  }
}
function razaPcMensaje(raza) {
  switch (raza) {
    case 1:
      return 'Sureños malos con fuerza';
    case 2:
      return 'Orcos con fuerza';
    case 3:
      return 'Goblins con fuerza';
    case 4:
      return 'Huargos con fuerza';
    case 5:
      return 'Trolls con fuerza';
  }
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function handleClick(event) {
  event.preventDefault(event);
  const razaJugador = select_element.value;
  const razaPc = getRandomNumber(1, 5);
  const mensajePc = razaPcMensaje(razaPc);
  const mensaje = validarGanador(razaJugador, razaPc);
  mensajePc_element.innerHTML = 'El pc ha seleccionado: ' + mensajePc;
  result_element.innerHTML = mensaje;
  puntos_element.innerHTML =
    'Los puntos del jugador son: ' +
    puntosJugador +
    ' y los puntos del pc son:' +
    puntosPc;
}

btn_element.addEventListener('click', handleClick);

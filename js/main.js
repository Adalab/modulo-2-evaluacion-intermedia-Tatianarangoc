const select_element = document.querySelector('.select');
const btn_element = document.querySelector('.js_btn');
const result_element = document.querySelector('.result');

function validarGanador(razaJugador, pc) {
  if (razaJugador > pc) {
    return 'Ha Ganado el ejercito del bien! En horabuena.';
  } else if (razaJugador < pc) {
    return ' Ha ganado el ejercito del mal';
  } else {
    return 'Empate';
  }
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}
function handleClick(event) {
  event.preventDefault(event);
  const razaJugador = select_element.value;
  const razaPc = getRandomNumber(1, 6);
  const mensaje = validarGanador(razaJugador, razaPc);
  result_element.innerHTML = mensaje;
}

btn_element.addEventListener('click', handleClick);

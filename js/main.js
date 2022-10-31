const select_element = document.querySelector('.select');
const btn_element = document.querySelector('.js_btn');
const result_element = document.querySelector('.result');
const mensajePc_element = document.querySelector('.mensajepc');

function validarGanador(razaJugador, pc) {
  if (razaJugador > pc) {
    return 'Ha Ganado el ejercito del bien! En horabuena.';
  } else if (razaJugador < pc) {
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
  return Math.round(Math.random() * (max - min + 1) + min);
}
function handleClick(event) {
  event.preventDefault(event);
  const razaJugador = select_element.value;
  const razaPc = getRandomNumber(1, 5);
  console.log(razaPc);
  const mensajePc = razaPcMensaje(razaPc);
  console.log(mensajePc);
  const mensaje = validarGanador(razaJugador, razaPc);
  mensajePc_element.innerHTML = 'El pc ha seleccionado: ' + mensajePc;
  result_element.innerHTML = mensaje;
}

btn_element.addEventListener('click', handleClick);

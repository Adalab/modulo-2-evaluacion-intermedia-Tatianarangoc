const select_element = document.querySelector('.select');
const btn_element = document.querySelector('.js_btn');
const result_element = document.querySelector('.result');

btn_element.addEventListener('click', (event) => {
  event.preventDefault();
});

function razaJugador() {
  const selectRaza = select_element.value;
  if (selectRaza === raza1) {
    ('Peloso con fuerza 1');
  } else if (selectRaza === raza2) {
    (' Sureños buenos con fuerza 2');
  } else if (selectRaza === raza3) {
    ('Enanos con fuerza 3');
  } else if (selectRaza === raza4) {
    ('Númenóreanos con fuerza (4)3');
  } else if (selectRaza === raza5) {
    ('Elfos con fuerza 5');
  }
}

function validarGanador(razaJugador, pc) {}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}
const razasMalvadas = () => {
  const razasMalvadas = getRandomNumber(1, 6);
  const malvados = razasMalvadas;
};

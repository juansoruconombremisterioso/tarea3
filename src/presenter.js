import { sumar, multiplicar } from './sumador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const form = document.querySelector('#sumar-form');
const form2 = document.querySelector('#multiplicar-form');
const div = document.querySelector('#resultado-div');
const divMultiplicar = document.querySelector('#resultado-multiplicar-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = '<p>' + sumar(firstNumber, secondNumber) + '</p>';
});

form2.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  divMultiplicar.innerHTML = '<p>' + multiplicar(firstNumber, secondNumber) + '</p>';
});

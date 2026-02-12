import { sumar, multiplicar } from './sumador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const form = document.querySelector('#sumar-form');
const div = document.querySelector('#resultado-div');
const divMultiplicar = document.querySelector('#resultado-multiplicar-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const botonPresionado = event.submitter.id;

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  if(botonPresionado === 'sumar-button') { div.innerHTML = '<p>' + sumar(firstNumber, secondNumber) + '</p>'; }
  if(botonPresionado === 'multiplicar-button') { div.innerHTML = '<p>' + multiplicar(firstNumber, secondNumber) + '</p>'; }


  
});

form.addEventListener('submit2', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  divMultiplicar.innerHTML = '<p>' + multiplicar(firstNumber, secondNumber) + '</p>';
});

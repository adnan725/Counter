'use strict';

const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

increase.addEventListener('click', function () {
  count = count + 1;
  number.textContent = count;
});

decrease.addEventListener('click', function () {
  count = count - 1;
  number.textContent = count;
});

reset.addEventListener('click', function () {
  count = 0;
  number.textContent = count;
});

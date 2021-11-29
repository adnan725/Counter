'use strict';

const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

const colors = function () {
  if (count > 0) {
    number.style.color = 'green';
  }
  if (count < 0) {
    number.style.color = '#940505';
  }
  if (count === 0) {
    number.style.color = 'black';
  }
};

increase.addEventListener('click', function () {
  count = count + 1;
  number.textContent = count;
  colors();
});

decrease.addEventListener('click', function () {
  count = count - 1;
  number.textContent = count;
  colors();
});

reset.addEventListener('click', function () {
  count = 0;
  number.textContent = count;
  colors();
});

'use strict';

const box = document.querySelector('.code-div');
const labelTimer = document.querySelectorAll('.input');

const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const input3 = document.querySelector('#input-3');
const input4 = document.querySelector('#input-4');

input1.focus();
input2.disabled = true;
input3.disabled = true;
input4.disabled = true;

const scrtCode = '4965';

let counter = 1;
labelTimer.forEach((input) => {
  input.addEventListener('input', function (e) {
    counter++;
    e.target.disabled = true;
    if (counter > 4) return;
    document.querySelector(`#input-${counter}`).disabled = false;
    document.querySelector(`#input-${counter}`).focus();
  });
});

const addClass = function (className) {
  labelTimer.forEach((input) => {
    input.classList.add(className);
  });
};

const translator = function (time, direction, value) {
  setTimeout(function () {
    box.style.transform = `Translate${direction}(${value}px)`;
  }, time * 1000);
};

input4.addEventListener('input', function () {
  const inputCode = input1.value + input2.value + input3.value + input4.value;
  if (inputCode === scrtCode) {
    console.log('finish');
    addClass('finish');
    box.style.transform = 'TranslateY(-20px)';
    translator(0.7, 'Y', 0);
  } else {
    addClass('error');
    box.style.transform = 'TranslateX(-20px)';
    translator(0.3, 'X', 20);
    translator(0.6, 'X', 0);
  }
});

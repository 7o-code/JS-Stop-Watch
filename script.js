'use strict';
//heeellooo
//timers
const miliSeconds = document.getElementById('mili-sec');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

// other elements
const body = document.querySelector('body');

//buttons
const start = document.getElementById('start');
const Stop = document.getElementById('stop');

//initial values
let mili = 0;
let second = 0;
let minute = 0;
let stopClicks = 0;

//start function
const timer = function () {
  mili += 1;
  miliSeconds.textContent = mili < 10 ? `0${mili}` : `${mili}`;

  if (mili >= 99) {
    mili = 0;
    second += 1;
    seconds.textContent = second < 10 ? `0${second}` : `${second}`;

    if (second >= 59) {
      second = 0;
      minute += 1;
      minutes.textContent = minute < 10 ? `0${minute}` : `${minute}`;
    }
  }
};

//ID returned by setInterval which is used by clearInterval to stop it
let intervalId;

//start function
function starting() {
  intervalId = setInterval(timer, 10);
}

//stop function (by clearInterval)
function stoping() {
  clearInterval(intervalId);
}

//style resetting function
function Reset() {
  Stop.style.backgroundColor = '#dc3545';
  Stop.style.borderColor = '#dc3545';
  body.style.backgroundColor = 'rgb(236, 175, 61)';
  Stop.textContent = 'Stop';
}

//start button
start.addEventListener('click', () => {
  Stop.textContent = 'Stop';
  stopClicks = 0;

  Reset();

  body.style.backgroundColor = '#28a745';
  start.style.backgroundColor = 'rgb(236, 175, 61)';
  start.style.borderColor = 'rgb(236, 175, 61)';

  starting();
});

//stop button
Stop.addEventListener('click', () => {
  stoping();

  Stop.textContent = 'Reset';
  Stop.style.backgroundColor = 'grey';
  Stop.style.borderColor = 'grey';
  Stop.style.boxShadow = 'grey';

  body.style.backgroundColor = '#dc3545';
  start.style.backgroundColor = '#28a745';
  start.style.borderColor = '#28a745';
  stopClicks += 1;

  if (stopClicks > 1) {
    mili = second = minute = 0;
    miliSeconds.textContent = seconds.textContent = minutes.textContent = '00';

    Reset();

//another dirty way to restart the timer
    // window.location.reload();
  }
});

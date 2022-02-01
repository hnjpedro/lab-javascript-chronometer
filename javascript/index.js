const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.className = 'btn start';
  btnRightElement.className = 'btn reset';
  btnLeftElement.innerHTML = 'START';
  btnRightElement.innerHTML = 'RESET';
  chronometer.stop();
}

function setSplitBtn() {
  let splitList = document.getElementById('splits');
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.split();
  splitList.appendChild(newSplit);
}

function setStartBtn() {
  btnLeftElement.className = 'btn stop';
  btnRightElement.className = 'btn split';
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT';
  chronometer.start(printTime);
}

function setResetBtn() {
  chronometer.reset();
  printTime();
  clearSplits()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className == 'btn start') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className == 'btn reset') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

const chronometer2 = new Chronometer();

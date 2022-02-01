class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback.toString().length != 0) {
      callback;
      setInterval(callback,1000);
      console.log(callback);
      console.log(callback.toString().length)
    }
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    if (this.currentTime == 0) {
      return 0;
    } else {
      const minutesInSeconds = 60 * Math.floor(this.currentTime / 60);
      return this.currentTime - minutesInSeconds;
    }
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length == 1) {
      let twoDigitNumber = '0' + `${value}`;
      return twoDigitNumber;
    } else {
      let twoDigitNumber = `${value}`;
      return twoDigitNumber;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let lap = `${this.computeTwoDigitNumber(this.getMinutes())}` + ':' + `${this.computeTwoDigitNumber(this.getSeconds())}`;
    return lap
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

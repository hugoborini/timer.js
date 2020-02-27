var $start_button = document.querySelector(".button__start");
var $stop_button = document.querySelector(".button__stop");
var $reset_button = document.querySelector(".button__reset");
var $seconde_display = document.querySelector(".timer__seconde");
var seconde = 0;
var $minute_display = document.querySelector(".timer__minute");
var minute = 0;
console.log($start_button);

console.log($seconde_display);

function timer() {
  var seconde_int = setInterval(() => {
    seconde = seconde + 1;
    if (seconde < 10) {
      $seconde_display.innerHTML = "0" + seconde;
    } else {
      $seconde_display.innerHTML = seconde;
    }
  }, 1000);

  var minute_int = setInterval(() => {
    if (seconde === 60) {
      seconde = 0;
      minute = minute + 1;
      $seconde_display.innerHTML = seconde;
      if (minute_int < 10) {
        $minute_display.innerHTML = "0" + minute;
      } else {
        $minute_display.innerHTML = minute;
      }
    }
  }, 60000);
  $stop_button.addEventListener("click", function() {
    clearInterval(seconde_int);
    clearInterval(minute_int);
  });

  $reset_button.addEventListener("click", function() {
    minute = 0;
    seconde = 0;
    $minute_display.innerHTML = "00";
    $seconde_display.innerHTML = "00";
  });
}

function start_timer() {
  $start_button.addEventListener("click", function() {
    timer();
  });
}

start_timer();

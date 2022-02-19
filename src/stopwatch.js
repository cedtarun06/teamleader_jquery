$(document).ready(function(){
    $(document).click('start')

}
const $timer = ('stopwatch');

var $$hour = 0;
var $$minute = 0;
var $$second = 0;
var $stoptime = true;
// made this function to check stopwatch is running or not.
function startTimer() {
  if ($stoptime == true) {
        $stoptime = false;
        timerCycle();
    }
}
//if the stopwatch is running ,turn it off(by pressing stop button)
function $stoptimer() {
  if ($stoptime == false) {
     $stoptime = true;
  }
}

function timerCycle() {
    if ($stoptime == false) {
    $second = parseInt($second);
    $minute = parseInt($minute);
    $hour = parseInt($hour);

    $second = $second + 1;
// if the timer value(sec,min,$hour) are lower than 10,add a 0 in front because we need to parse everything in beginning
    if ($second == 60) {
      $minute = $minute + 1;
      $second = 0;
    }
    if ($minute == 60) {
      $hour = $hour + 1;
      $minute = 0;
      $second = 0;
    }

    if ($second < 10 || $second == 0) {
      $second = '0' + $second;
    }
    if ($minute < 10 || $minute == 0) {
      $minute = '0' + $minute;
    }
    if ($hour < 10 || $hour == 0) {
      $hour = '0' + $hour;
    }

    timer.innerHTML = $hour + ':' + $minute + ':' + $second;
// before repeating the timer it confirm that the timeout of ("1000ms=1s")
    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    // used to reset the timer
    timer.innerHTML = '00:00:00';
}
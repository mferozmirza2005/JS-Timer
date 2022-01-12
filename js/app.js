var TStart = document.getElementById("TStart");
var TPause = document.getElementById("TPause");
var TReset = document.getElementById("TReset");

var Seconds = document.getElementById("Seconds");
var Minutes = document.getElementById("Minutes");
var Hours = document.getElementById("Hours");

var Sec = 0;
var Min = 0;
var Hrs = 0;

var interVal;

function StartTimer() {
  
  TStart.style.display = "none";
  TPause.style.display = "inline-block";

  Seconds.disabled = true;
  Minutes.disabled = true;
  Hours.disabled = true;
  
  Sec = Seconds.value;
  Min = Minutes.value;
  Hrs = Hours.value;
  
  interVal = setInterval(() => {
    
    Sec--;
    Seconds.value = Sec;
    if (Sec == 0) {
      Sec = 60;
      Min--;
      Minutes.value = Min;
      if (Min == 0) {
        Min = 60;
        Hrs--;
        Hours.value = Hrs;
        if (Hrs == 0) {
          PauseTimer();
          Hours.value = 0;
        }
      }
    }
  }, 1000);
}

function PauseTimer() {
  TStart.style.display = "inline-block";
  TPause.style.display = "none";
  clearInterval(interVal);
}

function ResetTimer() {

  PauseTimer();

  Seconds.disabled = false;
  Minutes.disabled = false;
  Hours.disabled = false;

  Sec = 0;
  Seconds.value = Sec;
  
  Min = 0;
  Minutes.value = Min;
  
  Hrs = 0;
  Hours.value = Hrs;
}
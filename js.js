
function name(){
  var event = document.getElementById("nameOfEvent").value;
  document.getElementById("Name").innerHTML = event;

}
function timer(){
  var eventTime = document.getElementById("eventTime").value;
  eventTime = eventTime.split("-");

  var time = new Date(parseInt(eventTime[0]), (parseInt(eventTime[1])-1) , parseInt(eventTime[2]) , 0);

  var now = new Date();
  var timeDif = time - now;
  var seconds = Math.floor(timeDif/1000);
  var minutes = Math.floor(seconds/60);
  var hour = Math.floor(minutes/60);
  var days = Math.floor(hour/24);
  console.log(timeDif);
  seconds %= 60;
  minutes %=60;
  hour %= 24;

  days = (days < 10 && days>= 0 ) ? "0" + days : days;
  hour = (hour < 10 && hour >= 0 ) ? "0" + hour : hour;
  minutes = (minutes < 10 && minutes >= 0) ? "0" + minutes : minutes;
  seconds = (seconds < 10 && seconds >= 0) ? "0" + seconds : seconds;
document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hour;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
name();
setTimeout(timer, 1000);
if(timeDif <= 0){
  var event = document.getElementById("nameOfEvent").value;
  document.getElementById("counter").innerHTML = "<tr><td colspan='4'> IT IS  "+ event +"!!!<td/><tr/>";

}
}

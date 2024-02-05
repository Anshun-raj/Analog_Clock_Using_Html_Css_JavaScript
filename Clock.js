var min = 0;
var hr = 0;
var sec = 0;
var d = new Date();
setInterval(function () {
  d = new Date();
  sec = d.getSeconds() * 6;
  min = d.getMinutes() * 6;
  hr = d.getHours() * 30 + Math.round(min / 12);

  document.getElementById("secondHand").style.transform =
    "rotate(" + sec + "deg)";

  document.getElementById("minuteHand").style.transform =
    "rotate(" + min + "deg)";

  document.getElementById("hourHand").style.transform = "rotate(" + hr + "deg)";
}, 1000);

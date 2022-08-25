var min = 00
var sec = 00
var msec = 00
var milisec = document.getElementById('msec')
var seconds = document.getElementById('sec')
var minutes = document.getElementById('min')
var interval;

function start(){
    
interval = setInterval(function(){
    msec++
    milisec.innerHTML = msec
if(msec >= 100){
  sec++
  seconds.innerHTML = sec
msec = 00
}
else if(sec >= 60){
  min++
  minutes.innerHTML = min
  sec = 00

}
},12)
document.getElementById('a').disabled = true
}
function stop(){
    clearInterval(interval)
document.getElementById('a').disabled = false

}
function reset (){
min = 00
sec = 00
msec = 00
minutes.innerHTML = min
seconds.innerHTML = sec
milisec.innerHTML = msec
}
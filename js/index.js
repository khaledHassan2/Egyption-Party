var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector('.days').innerHTML=days + "d ";
  document.querySelector('.h').innerHTML=hours + "h ";
  document.querySelector('.m').innerHTML=minutes + "m ";
  document.querySelector('.s').innerHTML=seconds + "s ";
 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
let char =100;
let inputChars =document.getElementById("chars");
document.querySelector('textarea').addEventListener('input',function(e){
  if(e.data !=null){
    char = char-1;
  }
  else{
    char = char + 1;

  }
  console.log(e);
  inputChars.innerHTML=char;

})

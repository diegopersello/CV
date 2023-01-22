document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 350) {/*350*/
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

  setInterval(function(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("derechos_autor").style.backgroundColor = randomColor;
    document.getElementById("clock").style.color = randomColor;
  }, 5000);

 function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}

// Actualizar el reloj cada segundo
setInterval(function() {
  document.getElementById("clock").innerHTML = getTime();
}, 1000);

// detectar el scroll
window.onscroll = function() {
  var clock = document.getElementById("clock");
  clock.style.top = window.pageYOffset + "px";
};
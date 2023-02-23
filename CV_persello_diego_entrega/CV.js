
/*cambia el color del reloj y el final de la página*/
  setInterval(function(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("derechos_autor").style.backgroundColor = randomColor;
    document.getElementById("reloj").style.color = randomColor;
  }, 5000);

/*obtiene el tiempo para el reloj*/
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
  document.getElementById("reloj").innerHTML = getTime();
}, 1000);

// detectar el scroll
window.onscroll = function() {
  var reloj = document.getElementById("reloj");
  reloj.style.top = window.pageYOffset + "px";
};

/* funcion para scrolear el navbar y que los href se coloquen en la posicion 
correcta para no ser tapados */
document.addEventListener("DOMContentLoaded", function(){
  // Obtener el tamaño del navbar
  var navbar = document.querySelector(".navbar");
  var navbar_height = navbar.offsetHeight;

  // Agregar un evento click a todos los enlaces con href
  var links = document.querySelectorAll("a[href^='#']");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e){
      e.preventDefault();
      var target = this.getAttribute("href");
      var target_element = document.querySelector(target);
      var offset = target_element.offsetTop;

      // Desplazarse hasta el elemento con un margen de tamaño del navbar
      window.scrollTo({
        top: offset - navbar_height,
        behavior: "smooth"
      });
    });
  }
});
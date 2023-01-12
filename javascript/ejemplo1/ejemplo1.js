//console.log("Hola Mundo");
/*
document.getElementById('botoncito').onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("etiqueta").innerHTML = "Cambio el contenido!";
}

*/


const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };



let contador=0;

document.getElementById('botoncito').onclick= function (){
    if (contador==1){
        contador--;
    }
    if (contador>0 && contador!=1){
        contador-=2;
    }
}

document.getElementById('color_fondo').onclick= function (){
        
        document.body.style.backgroundColor = getRandomColor();
}

document.addEventListener("click", function(){
    contador++;
    console.log("Numero de clicks: ", contador);
});


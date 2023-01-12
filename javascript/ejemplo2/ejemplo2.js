document.getElementById('sumar').addEventListener('click',function (){
    let A=document.getElementById('numero1').value;
    let B=document.getElementById('numero2').value;

    let resultado=sumar(parseInt(A),parseInt(B));
    console.log('El resultado de la suma es: ',resultado);

    document.getElementById('resultado').innerHTML=resultado;
    document.getElementById('muestra').style.display= 'block';
})
function sumar(num1,num2){
    return (num1+num2);
}
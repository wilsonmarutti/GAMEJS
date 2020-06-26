let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//começar a desenhar
ctx.beginPath();
//na posição (20,40) desenhe um quadrado 50x50
ctx.rect(20,40,50,50); 

ctx.fillStyle = "#ff0000"; //cor vermelho
ctx.fill(); //pinte o quadrado
ctx.closePath();

ctx.beginPath();
// no ponto (240,160) com raio 20, angulo inicial 0
//desenhe um circulo de 2PI radianos, sentido horario
ctx.arc(240,160,20,0, Math.PI*2,false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// desenho sem cor 
ctx.beginPath();
ctx.rect(160,10,100,40);
ctx.strokeStyle = "rgba(0,0,255,0.5)"
ctx.stroke();
ctx.closePath();
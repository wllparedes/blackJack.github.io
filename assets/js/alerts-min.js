document.addEventListener("DOMContentLoaded",()=>{let e;Swal.fire({title:"Bienvenido, vamos a jugar BlackJack!",imageUrl:"/assets/img/fondo-game.png",imageWidth:400,imageHeight:200,html:" Comenzar\xe1 en <b></b> segundos.",timer:6e3,timerProgressBar:!0,didOpen(){Swal.showLoading();let a=Swal.getHtmlContainer().querySelector("b");e=setInterval(()=>{a.textContent=Math.round(Swal.getTimerLeft()/1e3)},100)},willClose(){clearInterval(e)}}).then(e=>{e.dismiss===Swal.DismissReason.timer&&console.log("I was closed by the timer"),Swal.fire({title:"Pulsa el bot\xf3n <b>Nuevo Juego</b> para comenzar",text:"Luego de pulsarlo se habilitar\xe1n Pedir Carta y Detener Juego",imageUrl:"/assets/img/fondo-sw-br.png",imageWidth:400,imageHeight:200,imageAlt:"Custom image"}).then(()=>{Swal.fire({title:"Pulsa el bot\xf3n <b>Pedir Cartas</b>",text:"Te daremos cartas al azar, tendr\xe1s que llegar a 21 o tener un puntaje muy cercano",imageUrl:"/assets/img/fondo-sw-pc.jpeg",imageWidth:400,imageHeight:200,imageAlt:"Custom image"}).then(()=>{Swal.fire({title:"Pulsa el bot\xf3n <b>Detener Juego</b>",text:"Pulsalo solo cuando crees que vas a ganar, pero ten cuidado... quiz\xe1 la pc te gane :)",imageUrl:"/assets/img/fondo-sw-tc.jpeg",imageWidth:400,imageHeight:200,imageAlt:"Custom image"})})})})});const ganaste=()=>Swal.fire({title:"Felicidades!",text:"Has logrado ganarle a la computadora.",imageUrl:"/assets/img/fondo-sw-w.jpg",imageWidth:330,imageHeight:200,imageAlt:"proplayer"}),empate=()=>Swal.fire({title:"Oops..",text:"Qu\xe9 casualidad, t\xfa IQ es igual al de la PC",imageUrl:"/assets/img/fondo-sw-c.jpg",imageWidth:330,imageHeight:200,imageAlt:"empate-imagen"}),perdiste=()=>Swal.fire({title:"Lo siento...",text:"No has logrado ganarle a la pc, perdiste",imageUrl:"/assets/img/fondo-sw-l.jpg",imageWidth:330,imageHeight:200,imageAlt:"loser"});
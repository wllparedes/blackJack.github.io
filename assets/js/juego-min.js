const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],r=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener"),d=document.querySelector("#btnNuevo"),o=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),i=(t=2)=>{e=c(),r=[];for(let l=0;l<t;l++)r.push(0);s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},c=()=>{e=[];for(let r=2;r<=10;r++)for(let a of t)e.push(r+a);for(let n of t)for(let d of l)e.push(d+n);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el Deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?10:11:Number(t)},g=(e,t)=>(r[t]+=$(e),s[t].innerText=r[t],r[t]),f=(e,t)=>{let l=document.createElement("img");l.src=`assets/cartas/${e}.png`,l.classList.add("carta"),o[t].append(l)},h=()=>{let[e,t]=r;setTimeout(()=>{t===e?alert("Nadie gana."):e>21?alert("Computadora gana."):t>21?alert("Jugador gana"):alert("Computadora Gana")},50)},b=e=>{let t=0;do{let l=u();t=g(l,r.length-1),f(l,r.length-1)}while(t<e&&e<=21);h()};return a.addEventListener("click",()=>{let e=u(),t=g(e,0);f(e,0),t>21?(console.log("Lo siento, perdiste."),a.disabled=!0,n.disabled=!0,b(t)):21===t&&(console.log("21 Ganaste"),n.disabled=!0,a.disabled=!0,b(t))}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,b(r[0])}),d.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();
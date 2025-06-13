
setInterval(()=>{
    
let clock = new Date();

let sekund = clock.getSeconds();

let minute = clock.getMinutes();

let hour = clock.getHours();

let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
let h4 = document.querySelector('.h4');


h2.innerHTML = hour
h3.innerHTML = minute
h4.innerHTML = sekund
},1000)
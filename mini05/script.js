

setInterval(()=>{ 
    let date = new Date();
   let  time = date.toLocaleTimeString();
   document.querySelector('h1').textContent = time ;
}, 1000);
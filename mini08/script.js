let body = document.querySelector('body');

body.addEventListener('click', (e)=>{
     console.log(e.clientX, e.clientY);
     let elem = document.createElement('div');
     elem.classList.add('circle');
     const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white"
];
elem.textContent = "hi";
elem.style.backgroundColor = colors[Math.floor(Math.random()*10)];
elem.style.top = `${e.clientY -10}px`;
 elem.style.left = `${e.clientX -10}px`;
 body.append(elem);

})

// let insideDiv = document.querySelector('#divElement');
// insideDiv.addEventListener('click',(e)=>{
//     console.log(e.clientX, e.clientY);
// })
let parent = document.getElementById('parent');
console.log(parent);


parent.addEventListener('click', (e)=>{
    let child = e.target;
  document.body.style.backgroundColor = child.textContent;
})
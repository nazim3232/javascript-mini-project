const form = document.querySelector('form');
form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    e.stopPropagation();
    let boy = document.querySelector('#boy');
    let girl = document.querySelector('#girl');
    let l1 = boy.value.length;
    let l2 = girl.value.length;
    const result = Math.pow(l1*l2, 3)%101;
    document.querySelector('#result').textContent= `Love between them  : ${result}%`;
    form.reset();
})
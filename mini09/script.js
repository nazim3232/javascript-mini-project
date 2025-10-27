let  addBtn = document.querySelector('#addBtn');
console.log(addBtn);
let input = document.querySelector('#text');
console.log(input);


addBtn.addEventListener('click' ,()=>
{
    let item = document.createElement('div');
    item.id= 'item';
    let text = input.value;

    if(text ==='')
    {
        alert("Please ener your task")
    }
    else
    {
    let deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.textContent = 'delete';
   deleteBtn.textContent= 'delete';
   let anotherAddBtn = document.createElement('button');
     anotherAddBtn.id= 'add';
     anotherAddBtn.textContent = 'done';
     let task = document.createElement('span');
     task.textContent = text;
     item.append(task, deleteBtn, anotherAddBtn);
     document.body.append(item);
      input.value = "";
      deleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
});
   anotherAddBtn.addEventListener('click', () => {
      task.style.textDecoration = 'line-through';
});
//this delete btn was not create in this scope .
    }
    

  
});

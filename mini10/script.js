let data = document.querySelector('form');
//console.log(data);
let totalScore = 0;
let scoreBoard =
{
    question1: 'A',
    question2: 'B',
    question3: 'C',
    question4: 'A',
    question5 :'D'

}
data.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(data);
   // console.log(formData);
    for( let [name, value] of formData.entries())
    {
          if(scoreBoard[name] == value)
          {
            totalScore++;
          }
    }
    let result = document.createElement('div');
    result.textContent = `This is your total score : ${totalScore} `;
    result.style.padding = "30px"
    result.style.backgroundColor="skyblue";
    result.style.color = "white";
    result.style.fontWeight="bold";
    result.style.fontSize = "20px";
    result.style.borderRadius = "10px";
    result.style.marginTop = "10px";
    result.style.textAlign = "center";
    data.insertAdjacentElement('beforeend', result);

})
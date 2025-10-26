const welcomeMessages = [
  "Welcome aboard!",
  "Hello and welcome!",
  "Glad to have you here!",
  "Welcome to the team!",
  "Nice to see you!",
  "We're thrilled you're here!",
  "Welcome, friend!",
  "Great to have you!",
  "Welcome to our community!",
  "Hey there, welcome!",
  "Warmest welcome!",
  "Welcome to the adventure!",
  "So happy you joined us!",
  "Welcome to the family!",
  "Cheers to your arrival!",
  "Welcome, make yourself at home!",
  "Delighted to welcome you!",
  "Welcome to the party!",
  "Thanks for joining us!",
  "Welcome, let's get started!"
];

const goodAdvice = [
  "Always be kind — it costs nothing.",
  "Listen more than you speak.",
  "Stay curious and keep learning.",
  "Don't be afraid to ask for help.",
  "Take breaks — rest fuels productivity.",
  "Celebrate small wins.",
  "Be honest, even when it's hard.",
  "Keep your promises.",
  "Learn from failure — it's a teacher.",
  "Practice gratitude daily.",
  "Choose progress over perfection.",
  "Surround yourself with positive people.",
  "Save money regularly, even a little.",
  "Say no when you need to.",
  "Read every day — it sharpens the mind.",
  "Be present — put your phone down.",
  "Take care of your health.",
  "Speak up for what you believe in.",
  "Don't compare yourself to others.",
  "Trust your instincts."
];

const futureAdvice = [
  "Invest in skills that won't go out of style.",
  "Plan for tomorrow, but live today.",
  "Embrace change — it's the only constant.",
  "Think long-term, act short-term.",
  "Build habits that your future self will thank you for.",
  "Stay adaptable — the future rewards flexibility.",
  "Keep learning — the future belongs to the curious.",
  "Save early, even if it's just a little.",
  "Don't fear failure — it's part of progress.",
  "Network with people who inspire growth.",
  "Be open to new technologies and ideas.",
  "Protect your digital identity.",
  "Make time for creativity — it's future-proof.",
  "Stay informed, but think critically.",
  "Balance ambition with well-being.",
  "Document your goals and revisit them often.",
  "Practice resilience — it's your future armor.",
  "Think globally, act locally.",
  "Prepare for uncertainty with optimism.",
  "Design a life, not just a career."
];

let name = document.querySelector('#name');
let subName = document.querySelector('#subname');
let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    let container = document.createElement('div');
    container.textContent="";
    container.classList.add('containerClass');
    let text = `Hi , ${name.value}  ${welcomeMessages[name.value.length] } . 
    ${goodAdvice[Math.floor(Math.random()*20)]} and ${futureAdvice[subName.value.length]}.
    Thanks for your effort .`;
    container.textContent = text;
    document.body.append(container);
    form.reset();
})
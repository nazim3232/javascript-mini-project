let timeCounter = document.querySelector('#timeContainer'); // corrected ID

setInterval(() => {
  const currentTime = Date.now();
  const olympicTime = new Date(2027, 6, 14).getTime(); // July is month 6 (0-indexed)

  let timer = olympicTime - currentTime;

  const day = Math.floor(timer / (1000 * 60 * 60 * 24));
  timer %= 1000 * 60 * 60 * 24;

  const hour = Math.floor(timer / (1000 * 60 * 60));
  timer %= 1000 * 60 * 60;

  const min = Math.floor(timer / (1000 * 60));
  timer %= 1000 * 60;

  const second = Math.floor(timer / 1000);

  timeCounter.textContent = `${day} : Days ${hour} : hours ${min} : minutes ${second} : seconds.`;
}, 1000);
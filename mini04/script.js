let form = document.querySelector('form');
let totalIncome = document.querySelector('#taxAmmout');
let result = document.querySelector('#result');

let fixEd = 500000;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    let taxAmmount = 0;
    let income = Number(totalIncome.value);

    if (isNaN(income)) {
        alert("Please! Enter a valid amount.");
        return;
    }

    if (income <= fixEd) {
        taxAmmount = 0;
    } else if (income <= 600000) {
        taxAmmount = (income - fixEd) * 0.1;
    } else if (income <= 900000) {
        taxAmmount = (income - 600000) * 0.15 + 10000;
    } else if (income <= 1300000) {
        taxAmmount = (income - 900000) * 0.2 + 55000;
    } else {
        taxAmmount = (income - 1300000) * 0.25 + 135000;
    }

    result.textContent = `Your total amount of tax is: ${taxAmmount.toFixed(2)} BDT.`;
});
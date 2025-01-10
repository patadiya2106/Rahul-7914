const amountInput = document.querySelector('input');
const dropdown1 = document.getElementById('country');
const dropdown2 = document.getElementById('country1');
const convertBtn = document.querySelector('.convert');

const exchangeRates = {
    'us': { 'india': 87 },
    'india': { 'us': 1 / 87}
};

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = dropdown1.value;
    const toCurrency = dropdown2.value;
});
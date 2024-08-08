const resultDisplay = document.getElementById('result');
const convertButton = document.getElementById('convert_btn');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');

const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75,PKR: 278.60,  USD: 1 },
    EUR: { USD: 1.18, GBP: 0.88,PKR: 302.3, EUR: 1 },
    GBP: { USD: 1.34, EUR: 1.14,PKR: 0.75, GBP: 1 },
    PKR: { USD:0.003589 , EUR:0.003308 , GBP:0.002817, PKR :1},
};

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = 'Please enter a valid amount';
        return;
    }

    const convertedAmount = amount * exchangeRates[from][to];
    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});
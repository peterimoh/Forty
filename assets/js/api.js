// currency conversion
// initial currency and amount
const initialCurrency = document.getElementById("initial_currency");
const initialAmount = document.getElementById("init_amount");
// final currency and amount
const finalCurrency = document.getElementById("final_currency");
const finalAmount = document.getElementById("fin_amount");
// exchange button
const exchange = document.getElementById("exchange");
// rate
const exchangeRate = document.getElementById("rate");

initialCurrency.addEventListener("change", calculate);
initialAmount.addEventListener("input", calculate);
finalCurrency.addEventListener("change", calculate);
finalAmount.addEventListener("input", calculate);

exchange.addEventListener("click", () => {
  const temp = initialCurrency.value;
  initialCurrency.value = finalCurrency.value;
  finalCurrency.value = temp;
  calculate();
});

function calculate() {
  const from_currency = initialCurrency.value;
  const to_currency = finalCurrency.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/f5d7298030de20a41bcce0ee/latest/${from_currency}`
  )
    .then((res) => res.json())
    .then((res) => {
      const rate = res.conversion_rates[to_currency];
      exchangeRate.innerText = `RATE: 1 ${from_currency} = ${rate} ${to_currency}`;
      finalAmount.value = (initialAmount.value * rate).toFixed(2);
    });
}
calculate();

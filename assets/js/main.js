function openbtn() {
  document.querySelector(".closebtn").style.display = "block";
  document.querySelector(".closebtn").style.transition = "width 4s";
  document.querySelector(".navigation").style.display = "none";
}

function closebtn() {
  document.querySelector(".closebtn").style.display = "none";
  document.querySelector(".navigation").style.display = "flex";
}

// typewriter effect

function write(obj, sentence, i, cb) {
  if (i != sentence.length) {
    setTimeout(function () {
      i++;
      console.log("in timeout", i);
      obj.innerHTML =
        sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
      write(obj, sentence, i, cb);
    }, 50);
  } else {
    console.log(i);
    cb();
  }
}
function erase(obj, cb, i) {
  var sentence = obj.innerText;
  if (sentence.length != 0) {
    setTimeout(function () {
      sentence = sentence.substr(0, sentence.length - 1);
      console.log("in timeout", i);
      obj.innerText = sentence;
      erase(obj, cb);
    }, 18 / (i * (i / 10000000)));
  } else {
    obj.innerText = " ";
    cb();
  }
}
var typeline = document.querySelector("#typeline");

function writeerase(obj, sentence, time, cb) {
  write(obj, sentence, 0, function () {
    setTimeout(function () {
      erase(obj, cb);
    }, time);
  });
}

var sentences = [
  "your Currency Converter 💰",
  "it's Nice to meet you. ",
  "scroll down. ",
  "let's help each other 😃",
];

var counter = 0;
function loop() {
  var sentence = sentences[counter % sentences.length];
  writeerase(typeline, sentence, 1500, loop);
  counter++;
}

loop();

// currency
// const from_currencyEl = document.getElementById("from_currency");
// const from_ammountEl = document.getElementById("from_ammount");
// const to_currencyEl = document.getElementById("to_currency");
// const to_ammountEl = document.getElementById("to_ammount");
// const rateEl = document.getElementById("rate");
// const exchange = document.getElementById("exchange");

// from_currencyEl.addEventListener("change", calculate);
// from_ammountEl.addEventListener("input", calculate);
// to_currencyEl.addEventListener("change", calculate);
// to_ammountEl.addEventListener("input", calculate);

// exchange.addEventListener("click", () => {
//   const temp = from_currencyEl.value;
//   from_currencyEl.value = to_currencyEl.value;
//   to_currencyEl.value = temp;
//   calculate();
// });

// function calculate() {
//   const from_currency = from_currencyEl.value;
//   const to_currency = to_currencyEl.value;

//   fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
//     .then((res) => res.json())
//     .then((res) => {
//       const rate = res.rates[to_currency];
//       rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
//       to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
//     });
// }

// calculate();

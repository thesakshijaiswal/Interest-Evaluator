const principle = document.getElementById("principle");
const rate = document.getElementById("rate");
const year = document.getElementById("year");
const result = document.getElementById("result");


function evaluate(p, r, n) {
  return result.innerText = `₹ ${(p * r * n) / 100}`;
}

function results() {
  evaluate(principle.value, rate.value, year.value)
  result.style = "color: black"
}

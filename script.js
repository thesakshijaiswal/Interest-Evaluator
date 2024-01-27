const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const year = document.getElementById("year");
const result = document.getElementById("result");
const evalBtn = document.getElementById("evalBtn");

function evaluate() {
  const p = parseFloat(principal.value);
  const r = parseFloat(rate.value);
  const n = parseFloat(year.value);
  if (!isNaN(p) && !isNaN(r) && !isNaN(n)) {
    const multiplication = (p * r * n)/100;
    if (multiplication === 0) {
      result.innerText = "⚠️Inputs should be non zero";
    } else {
      result.innerText = `₹ ${multiplication}`;     
      result.style = "color: black;"
    }
  } else {
    result.innerText = "⚠️ Invalid input";
  }  
}          

evalBtn.addEventListener("click",evaluate);

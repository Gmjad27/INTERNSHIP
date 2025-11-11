const w = document.getElementById('weight');
const h = document.getElementById('hieght');
const wr = document.getElementById('wr');
const hr = document.getElementById('hr');
const res = document.getElementById('ans');

let ans;
let c;

let x;

w.addEventListener('input', function () {
    wr.innerText = w.value;
});


h.addEventListener('input', function () {
    hr.innerText = h.value;
});



function cal() {
    c = (parseFloat(h.value / 100)) ** 2
    ans = (parseFloat(w.value) / c).toFixed(1)

    if (ans <= 18.5) x = 'Underweight'
    else if (ans > 18.5 && ans <= 24.9) x = 'Normal weight'
    else if (ans >= 25.0 && ans <= 29.9) x = 'Overweight'
    else x = 'Obese'

    res.textContent = `Your BMI = ${ans} ${x} `
}

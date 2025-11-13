const d1 = document.getElementById('d_1');
const d2 = document.getElementById('d_2');

const res = document.getElementById('res');
const btn = document.getElementById('btn');

let a;
let b;

let list = ['image/dice-01.svg', 'image/dice-02.svg', 'image/dice-03.svg', 'image/dice-04.svg', 'image/dice-05.svg', 'image/dice-06.svg'];

btn.addEventListener('click', function () {

    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;

    d1.style.backgroundImage = `url('${list[a - 1]}')`;
    d2.style.backgroundImage = `url('${list[b - 1]}')`;

    res.textContent =`Your Roll is: ${a + b}`;
});
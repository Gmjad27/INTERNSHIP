const d1 = document.getElementById('d_1');
const d2 = document.getElementById('d_2');

const res = document.getElementById('res');
const btn = document.getElementById('btn');

let a;
let b;

let list = ['dice-1.svg', 'dice-2.svg', 'dice-3.svg', 'dice-4.svg', 'dice-5.svg', 'dice-6.svg'];

btn.addEventListener('click', function () {

    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;

    d1.style.backgroundImage = `url('${list[a - 1]}')`;
    d2.style.backgroundImage = `url('${list[b - 1]}')`;


    if (a > b) res.textContent = '🥂 Player 1 Win';

    else if (a === b) res.textContent = '🥂 Tie';

    else res.textContent = '🥂 Player 2 Win';
});
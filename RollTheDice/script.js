const d1 = document.getElementById('d_1');
const d2 = document.getElementById('d_2');

const res = document.getElementById('res');
const btn = document.getElementById('btn');

let a;
let b;

let list = ['dice-01.svg', 'dice-02.svg', 'dice-03.svg', 'dice-04.svg', 'dice-05.svg', 'dice-06.svg'];

btn.addEventListener('click', function () {

    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;

    d1.style.backgroundImage = `url('${list[a - 1]}')`;
    d2.style.backgroundImage = `url('${list[b - 1]}')`;


    if (a > b) res.textContent = '🥂 Player 1 Win';

    else if (a === b) res.textContent = '🥂 Tie';

    else res.textContent = '🥂 Player 2 Win';
});
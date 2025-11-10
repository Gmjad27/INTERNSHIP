const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const m5 = document.getElementById('m5');


const ans = document.getElementById('ans');
let total;
let grade;
let per;


function cal() {
    total = parseInt(m1.value) + parseInt(m2.value) + parseInt(m3.value) + parseInt(m4.value) + parseInt(m5.value);
    per = total / 5;

    if (per > 90 && per < 100) grade = 'A'
    else if (per > 70 && per < 90) grade = 'B'
    else if (per > 50 && per < 70) grade = 'C'
    else if (per > 30 && per < 50) grade = 'D'
    else grade = 'Fail'


    ans.innerText = `Out of 500 Your Total is ${total} and percentage is ${per}% Your grade is ${grade}.`
}

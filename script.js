const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");


const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");
const l6 = document.getElementById("l6");
const l7 = document.getElementById("l7");
const l8 = document.getElementById("l8");

const res = document.getElementById("res");



function reset() {
    d1.innerText = "";
    d2.innerText = "";
    d3.innerText = "";
    d4.innerText = "";
    d5.innerText = "";
    d6.innerText = "";
    d7.innerText = "";
    d8.innerText = "";
    d9.innerText = "";
    res.innerText = "";
    l1.style.display = "none";
    l2.style.display = "none";
    l3.style.display = "none";
    l4.style.display = "none";
    l5.style.display = "none";
    l6.style.display = "none";
    l7.style.display = "none";
    l8.style.display = "none";
    turn = "X";
    gameover = false;


}





let turn = "X";
let gameover = false;

function checkWin() {
    if (d1.innerText === d2.innerText && d2.innerText === d3.innerText && d1.innerText !== "") {
        res.innerText = d1.innerText + " wins!";
        l1.style.display = "block";
        gameover = true;
    }
    else if (d4.innerText === d5.innerText && d5.innerText === d6.innerText && d4.innerText !== "") {
        res.innerText = d4.innerText + " wins!";
        l2.style.display = "block";
        gameover = true;
    }
    else if (d7.innerText === d8.innerText && d8.innerText === d9.innerText && d7.innerText !== "") {
        res.innerText = d7.innerText + " wins!";
        l3.style.display = "block";
        gameover = true;
    }
    else if (d1.innerText === d4.innerText && d4.innerText === d7.innerText && d1.innerText !== "") {
        res.innerText = d1.innerText + " wins!";
        l4.style.display = "block";
        gameover = true;
    }
    else if (d2.innerText === d5.innerText && d5.innerText === d8.innerText && d2.innerText !== "") {
        res.innerText = d2.innerText + " wins!";
        l6.style.display = "block";
        gameover = true;
    }
    else if (d3.innerText === d6.innerText && d6.innerText === d9.innerText && d3.innerText !== "") {
        res.innerText = d3.innerText + " wins!";
        l5.style.display = "block";
        gameover = true;
    }
    else if (d1.innerText === d5.innerText && d5.innerText === d9.innerText && d1.innerText !== "") {
        res.innerText = d1.innerText + " wins!";
        l7.style.display = "block";
        gameover = true;
    }
    else if (d3.innerText === d5.innerText && d5.innerText === d7.innerText && d3.innerText !== "") {
        res.innerText = d3.innerText + " wins!";
        l8.style.display = "block";
        gameover = true;
    }
    else if (d1.innerText !== "" && d2.innerText !== "" && d3.innerText !== "" && d4.innerText !== "" && d5.innerText !== "" && d6.innerText !== "" && d7.innerText !== "" && d8.innerText !== "" && d9.innerText !== "") {
        res.innerText = "O X \nIt's a Draw!";
        gameover = true;

    }
}

d1.addEventListener("click", function () {
    if (d1.innerText === "" && !gameover) {
        d1.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});

d2.addEventListener("click", function () {
    if (d2.innerText === "" && !gameover) {
        d2.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});

d3.addEventListener("click", function () {
    if (d3.innerText === "" && !gameover) {
        d3.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});

d4.addEventListener("click", function () {
    if (d4.innerText === "" && !gameover) {
        d4.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});
d5.addEventListener("click", function () {
    if (d5.innerText === "" && !gameover) {
        d5.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }

});
d6.addEventListener("click", function () {
    if (d6.innerText === "" && !gameover) {
        d6.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});
d7.addEventListener("click", function () {
    if (d7.innerText === "" && !gameover) {
        d7.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});
d8.addEventListener("click", function () {
    if (d8.innerText === "" && !gameover) {
        d8.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});
d9.addEventListener("click", function () {
    if (d9.innerText === "" && !gameover) {
        d9.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWin();
    }
});


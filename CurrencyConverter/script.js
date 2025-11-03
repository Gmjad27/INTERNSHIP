const amount = document.getElementById('txtIn');
const res = document.getElementById('res');
const chCur = document.getElementById('ch');
const convert = document.getElementById('con');
// const btn = document.getElementById('sbt');




const usd = {
    inr: 88.79,
    eur: 0.86,
    gbp: 1.52
}
const inr = {
    usd: 0.011,
    eur: 0.0098,
    gbp: 0.0086
}
const eur = {
    inr: 102.41,
    usd: 1.16,
    gbp: 0.88
}
const gbp = {
    inr: 116.96,
    eur: 1.13,
    usd: 1.32
}

function chk() {
    if (chCur.value === 'USD') {
        if (convert.value === 'INR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.inr + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.inr);
        }
        else if (convert.value === 'EUR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.eur + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.eur);
        }
        else if (convert.value === 'GBP') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.gbp + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * usd.gbp);
        }
        else {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value + ' ' + convert.value;
        }
    }
    if (chCur.value === 'INR') {
        if (convert.value === 'USD') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.usd + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.usd);
        }
        else if (convert.value === 'EUR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.eur + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.eur);
        }
        else if (convert.value === 'GBP') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.gbp + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * inr.gbp);
        }
        else {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value + ' ' + convert.value;
        }
    }
    if (chCur.value === 'EUR') {
        if (convert.value === 'INR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.inr + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.inr);
        }
        else if (convert.value === 'USD') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.usd + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.usd);
        }
        else if (convert.value === 'GBP') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.gbp + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * eur.gbp);
        }
        else {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value + ' ' + convert.value;
        }
    }
    if (chCur.value === 'GBP') {
        if (convert.value === 'INR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.inr + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.inr);
        }
        else if (convert.value === 'USD') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.usd + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.usd);
        }
        else if (convert.value === 'EUR') {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.eur + ' ' + convert.value;
            console.log(amount.value + ' ' + chCur.value + ' = ' + amount.value * gbp.eur);
        }
        else {
            res.innerText = amount.value + ' ' + chCur.value + ' = ' + amount.value + ' ' + convert.value;
        }
    }
}
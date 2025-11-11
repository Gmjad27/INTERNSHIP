
setInterval(function () {
    const time = document.getElementById('time');
    const date = new Date();
    let t = date.toLocaleTimeString();

    time.textContent = t
}, 1000)








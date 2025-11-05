const ai = document.getElementById('addInput');
const ad = document.getElementById('addList');
const al = document.getElementById('ell');
const del = document.getElementById('del');
let ell = '';



ad.addEventListener('click', function () {
    al.innerHTML = '<li>' + ai.value + ' <i id="del" class="bi bi-trash3-fill"></i></li>' + ell
    ell = '<li>' + ai.value + ' <i id="del" class="bi bi-trash3-fill"></i></li>' + al.value

});
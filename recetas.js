let botonBrownie = document.getElementById('brownie_btn');
let divBrownie = document.getElementById('brownie');
let botonPasta = document.getElementById('pasta_btn');
let divPasta = document.getElementById('pasta');
let botonPollo = document.getElementById('pollo_btn');
let divPollo = document.getElementById('pollo');
let botonArroz = document.getElementById('arroz_btn');
let divArroz = document.getElementById('arroz');
let inicio = document.getElementById('inicio');

botonBrownie.addEventListener('click', function(){
    divBrownie.style.display = 'block';
    divPasta.style.display = 'none';
    divPollo.style.display = 'none';
    divArroz.style.display = 'none';
    inicio.style.display = 'none';
})

botonPasta.addEventListener('click', function(){
    divBrownie.style.display = 'none';
    divPasta.style.display = 'block';
    divPollo.style.display = 'none';
    divArroz.style.display = 'none';
    inicio.style.display = 'none';
})

botonPollo.addEventListener('click', function(){
    divBrownie.style.display = 'none';
    divPasta.style.display = 'none';
    divPollo.style.display = 'block';
    divArroz.style.display = 'none';
    inicio.style.display = 'none';
})

botonArroz.addEventListener('click', function(){
    divBrownie.style.display = 'none';
    divPasta.style.display = 'none';
    divPollo.style.display = 'none';
    divArroz.style.display = 'block';
    inicio.style.display = 'none';
})

let buttons = document.querySelectorAll('.w3-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('w3-gray');
        });
        button.classList.add('w3-gray');
    });
});


function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}
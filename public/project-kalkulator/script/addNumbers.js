function kalkulator() {
    let getAngka = document.querySelectorAll('input');
    let inputPertama = getAngka[0].value; //input pertama
    let inputKedua = getAngka[1].value; //input kedua
    getAngka[2].value = parseInt(inputPertama) + parseInt(inputKedua);
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);
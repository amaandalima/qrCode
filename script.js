function randomItem (vetor) {
    return vetor[Math.floor((Math.random()*vetor.length))];
}

function randomKitty() {
    let qrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=ffffff&bgcolor=3685ff&data=';
    let apiRandomKitty = 'http://placekitten.com/g/';
    let tamanhos = [100,120,150,170,200,220,250,270,300,320,350,370,400,420,450,470,500,520,550,570,600,620,650,670,700];
    let x = randomItem(tamanhos);
    let y = randomItem(tamanhos);
    document.querySelector('#img-qrCode').src = qrCode+apiRandomKitty+x+'/'+y;
}

let recarregar = document.body;

recarregar.addEventListener("load", randomKitty());




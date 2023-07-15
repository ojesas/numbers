const colors = require('colors'); //requer instalação da biblioteca no cmd: npm install colors

let caracteresJaponeses = [];

for (let i = 0x3040; i <= 0x30FF; i++) {
    caracteresJaponeses.push(String.fromCharCode(i));
}

for (let i = 0x4E00; i <= 0x9FFF; i++) {
    caracteresJaponeses.push(String.fromCharCode(i));
}

const letrasMaiusculas = [];

for (let codigoAscii = 65; codigoAscii <= 90; codigoAscii++) {
  const letra = String.fromCharCode(codigoAscii);
  letrasMaiusculas.push(letra);
}


function efeito_matrix() {
    let minimo = 0;
    let maximo = letrasMaiusculas.length - 1;
    let numeroAleatorio = null;
    let i = 0;
    while (i < 999) {
        numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        process.stdout.write(colors.bold(colors.green(`${letrasMaiusculas[numeroAleatorio]}`)));
    }


}

efeito_matrix();

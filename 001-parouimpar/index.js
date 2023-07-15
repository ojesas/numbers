//Par ou Impar

const colors = require('colors'); //requer instalação da biblioteca no cmd: npm install colors

let numeros = [];
for (let i = 0; i <= 99; i++) { numeros[i] = i; }


function par_impar(numeros) {
    let pares = [];
    let npares = 0;
    let impares = [];
    let nimpares = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            npares++;
            pares.push(numero);
        } else if (numero % 2 === 1) {
            nimpares++;
            impares.push(numero);
        }
    }
    process.stdout.write(colors.bold(colors.yellow(`Foi fornecida uma lista com ${numeros.length} números, a seguir: `)));
    for (let n of numeros) { process.stdout.write(colors.yellow(`${n} `)); }
    console.log("");
    process.stdout.write(colors.bold(colors.green(`Contendo ${npares} números pares, a seguir: `)));
    for (let par of pares) { process.stdout.write(colors.green(`${par} `)); }
    console.log(``);
    process.stdout.write(colors.bold(colors.blue(`E ${nimpares} números impares, a seguir: `)));  
    for (let impar of impares) { process.stdout.write(colors.blue(`${impar} `)); }
    
    console.log(``);
    
    
}
par_impar(numeros);



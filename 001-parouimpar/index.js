//Par ou Impar
let numeros = [];
for (let i = 0; i <= 33; i++) { numeros[i] = i; }


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
    process.stdout.write(`Foi fornecida uma lista com ${numeros.length} números, a seguir: `);
    for (let n of numeros) { process.stdout.write(`\x1b[31m${n} \x1b[0m`); }
    console.log("");
    process.stdout.write(`Com ${npares} números pares, a seguir: `);
    for (let par of pares) { process.stdout.write(`\x1b[32m${par} \x1b[0m`); }
    console.log(``);
    process.stdout.write(`E ${nimpares} números impares, a seguir: `);
    for (let impar of impares) { process.stdout.write(`\x1b[33m${impar} \x1b[0m`); }
    console.log(``);

    
    /*console.log('\x1b[31m%s\x1b[0m', 'Texto vermelho');
    console.log('\x1b[32m%s\x1b[0m', 'Texto verde');
    console.log('\x1b[33m%s\x1b[0m', 'Texto amarelo');


    process.stdout.write(`\x1b[31mTexto vermelho\x1b[0m`);
    process.stdout.write('\x1b[32mTexto verde\x1b[0m');
    process.stdout.write('\x1b[33mTexto amarelo\x1b[0m');*/

}
par_impar(numeros);
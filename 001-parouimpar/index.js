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
    for (let n of numeros) { process.stdout.write(`${n} `); }
    console.log("");
    process.stdout.write(`Com ${npares} números pares, a seguir: `);
    for (let par of pares) { process.stdout.write(`${par} `); }
    console.log(``);
    process.stdout.write(`E ${nimpares} números impares, a seguir: `);
    for (let impar of impares) { process.stdout.write(`${impar} `); }
    console.log(``);


}
par_impar(numeros);


//bucles numeros del 1 hasta el 20 contando pares e impares

let pares = 0;
let impares = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`los numeros pares son${i}`);
        pares++;
    } else {
        console.log(`los numeros impares son${i}`);
        impares++;
    }
}

console.log(`Numeros pares del 1 al 20: ${pares}`);
console.log(`Numeros impares del 1 al 20: ${impares}`);

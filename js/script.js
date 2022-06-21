const userChosenDistance = parseInt(prompt('quanti km vuoi percorrere?', 256))
const userAge = parseInt(prompt ('quanti anni hai?', 24 ))

console.log(userChosenDistance)
console.log(userAge)


let sum = userChosenDistance * 0.21 ;
sum = sum.toFixed(2);
console.log(sum);

    const paragraph = document.getElementById('message');

if (userAge <= 17){
    sum = sum - (sum * 20 / 100);
    sum = sum.toFixed(2);
    paragraph .innerText = `Il costo del tuo biglietto e di: ${sum} ${'Hai ricevuto uno sconto del 20%'} `;
    console.log(paragraph);
    console.log('hai ricevuto uno sconto del 20%' + '' + sum );
    
}else if ( userAge >= 18) {
    sum = sum - (sum * 40 / 100);
    sum = sum.toFixed(2);
    paragraph .innerText = `Il costo del tuo biglietto e di: ${sum} ${'.Hai ricevuto uno sconto del 40%'} `;
    console.log(paragraph);
    console.log('hai ricevuto uno sconto del 40%' + '' + sum);
}



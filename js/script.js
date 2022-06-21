const userChosenDistance = parseInt(prompt('quanti km vuoi percorrere?', 256))
const userAge = parseInt(prompt ('quanti anni hai?',24 ))

console.log(userChosenDistance)
console.log(userAge)


let sum = userChosenDistance * 0.21 ;
sum = sum.toFixed(2);
console.log(sum)

if (userAge <= 17){
    sumOver = Math.floor((sum * 20) / 100);
    console.log('hai ricevuto uno sconto del 20%' + '' + sum )
}else if ( userAge >= 17) {
    sumAnder = Math.floor((sum * 40) / 100);
    console.log('hai ricevuto uno sconto del 40%' + '' + sum)
}


const paragraph = document.getElementById('message')

paragraph .innerText = `il costo del tuo biglietto e di ${sum} `
console.log(paragraph)
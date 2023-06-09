const countdown = document.getElementById(`countdown`);
const randomNumber = document.getElementById(`random-number`);

// genera un array di numeri random
function generateRandomNumber (){
    const randomNumbers = [];
    for(let i =0; i < 5; i++ ){
        let randomNumber;
        do{
            randomNumber = Math.floor(Math.random() * 100 + 1);
        }while (randomNumbers.includes(randomNumber));

        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

const randomNumbers = generateRandomNumber();
console.log(randomNumbers);

// creo la ul 
let numberListStart = `<ul>`

// riempio la ul 
for(let i = 0; i < randomNumbers.length; i++){

while(i < randomNumbers.length){
    numberListStart += `<li>${randomNumbers[i]}</li>`
    i++;
}


let numberListEnd = `</ul>`

randomNumber.innerHTML = numberListStart + numberListEnd
}
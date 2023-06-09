const countdown = document.getElementById(`countdown`);
const randomNumber = document.getElementById(`random-number`);

// genera un array di numeri random diversi tra loro
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


let seconds = 30 ;
countdown.innerText = seconds;

const down30Sec = setInterval(() => {
    
    countdown.innerText = --seconds;
    if(seconds === -1 ){
        clearInterval(down30Sec);
        countdown.classList.add(`d-none`);
        randomNumber.classList.add(`d-none`);
        let answers = [];
        for(let i =0; i < 5; i++ ){
            let answer = parseInt(prompt(`inserisci il primo numero, i numeri vanno da 1 a 100 `));
            if(randomNumbers.includes(answer.value)){
                answers.push(answer);
            }
            console.log(answers);
        };
    }
    
}, 1000);


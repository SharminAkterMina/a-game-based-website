function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const color = document.getElementById(elementId);
    color.classList.add('bg-orange-500');
}

function removeBackgroundColor(elementId){
    const color = document.getElementById(elementId);
    color.classList.remove('bg-orange-500');
}

function getIntValueById (elementId){
    const currentNumber = document.getElementById(elementId);
    const currentIntNumber = currentNumber.innerText;
    const intNumber = parseInt(currentIntNumber);
    return intNumber;
}

function setIntValueById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value; 
}


function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random number
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    // get the alphabet according to random number(index)
    const alphabet= alphabets[index];
    return alphabet;

    
}
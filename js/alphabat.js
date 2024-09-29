// function play(){
//     // step-1: hide the home screen(for hiding the home screen add a hidden cls in the home screen)
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');
    
//     // show the playground
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
// }

function manageKeyboardButton(event){
    // show which letter player press
    const playerPressed = event.key;
    console.log('player pressed ' , playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }
    
    // which letter is on screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const target = currentAlphabetElement.innerText;
    console.log('letter on screen',target);

    // check if the two letters are match or not
    if(playerPressed===target){
        console.log('you are safe.');
        // update score

        // 1.get score
        const currentScore = getIntValueById('current-score')
        // increase the score by 1 
        const newScore = currentScore+1;

        // set the new score
        setIntValueById('current-score', newScore)
        
        // start a new round
        removeBackgroundColor(target);
        continueGame();
    }
    else{
        console.log('you are looser.')

        // get the current life number
        const currentLife = getIntValueById('current-life')
        // reduce the score by 1 
        const newLife = currentLife- 1;

        // set the new score
        setIntValueById('current-life', newLife)        
        // game over
        if(newLife===0){
            gameOver();
        }



    }
    
}

document.addEventListener('keyup', manageKeyboardButton);


function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    // 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color on the letter who will be clicked
    setBackgroundColor(alphabet);
    
}




function play(){
    hideElementById('home');
    hideElementById('score');
    showElementById('play-ground');
    continueGame();
    setIntValueById('current-life', 5);
    setIntValueById('current-score', 0);


}

// function rePlay(){
//     hideElementById('score');
//     showElementById('home');
//     setIntValueById('current-life', 5);
//     setIntValueById('current-score', 0);
//     continueGame();
    
// }


function gameOver(){
    hideElementById('play-ground');
    showElementById('score');

    // update final score
    const lastScoreN = document.getElementById('current-score');
    const lastScore = lastScoreN.innerText
    setIntValueById('game-score', lastScore);

    // // clear the last selected letter on keyboard
    const currentAlphabetName = document.getElementById('current-alphabet');
    const letterName = currentAlphabetName.innerText;
    console.log(letterName);
    removeBackgroundColor(letterName);

}
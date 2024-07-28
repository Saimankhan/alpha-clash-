
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    //stop the game if press esc

    if(playerPressed === 'Escape') {
        gameOver();
    }
    


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    if (expectedAlphabet === playerPressed) {
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);

        // const newScore=currentScore+1;

        // currentScoreElement.innerText=newScore;
        const currentScore=getTextElementValueById('current-score');
        newScore=currentScore+1;
        setTextElementValueById('current-score',newScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
       console.log('you get a point');
    }
    else {

        const currentLife=getTextElementValueById('current-life');
        newLife=currentLife-1;
        setTextElementValueById('current-life',newLife);

        if(newLife===0){
            gameOver();
        }



        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);

        // const newLife=currentLife-1;

        // currentLifeElement.innerText=newLife;
        // console.log('you get not a point');





    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);



function continueGame() {
    const alphabet = getARandomAlphabet();
//console.log(alphabet);

    //set alphebet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //set backgroundcolor
    setBackgroundColorById(alphabet);
}



function play() {
    // //hide the home screen
    // const homeSection=document.getElementById('home-screen');
    // homeSection.classList.add('hidden');



    // //show the playground
    // const playGroundSection=document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden');


    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //new update after play again 

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);





    continueGame();

}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    //update game score
    const lastScore =getTextElementValueById('current-score');
    setTextElementValueById('game-score',lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById('currentAlphabet');

}
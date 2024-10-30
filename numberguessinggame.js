const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit');
const winDisplay = document.getElementById('winner');
const count = document.getElementById('user-count');
function getRandomNumber(){
    const randomNum = Math.floor(Math.random()* 100)+1
    return randomNum;
}
let counter = 0;
const compChoice = getRandomNumber();
let gameOver = false;
submitBtn.addEventListener('click', () => {
    if(gameOver) return;

    let userchoice = Number(userInput.value);
    if(userchoice === compChoice)
        {
            winDisplay.textContent = `Correct! You Guessed it in ${counter} attempts `;
            gameOver= true;
        }
    else if(userchoice > compChoice)
        {
            winDisplay.textContent = 'Too High!! Try again'
            counter++;
            count.textContent = counter;
        }
    else{
        winDisplay.textContent = 'Too Low!! Try again'
        counter++;
        count.textContent = counter;
    }
        
    });


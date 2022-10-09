// quotes in trivia qs are dialaying weird


// add a current question variable that stores question data from index [i]
// which is used for event listeners, and moved on by 'new question'

// ADD line at end of isTruCorrect and isFalseCorrect to generate new question
async function getTriviaData(){
    let response = await fetch("https://opentdb.com/api.php?amount=50&type=boolean")
    let triviaData = await response.json();
    return triviaData
}

// ##### MAIN FUNCTION #####
// lines below lay out variables and functions for main async function when called
// wrapping the api call in this main async function means I can use 'await'
async function main (){
    let trueButton = document.querySelector("#inputTrue");
    let falseButton = document.querySelector("#inputFalse");
    let questionField = document.querySelector("#question");
    let questionButton = document.querySelector("#nextQuestion");
    let i = 0;
    let resultLine = document.querySelector("#result") ;
    let scoreCountDisplay = document.querySelector("#score");
    let gameCountDisplay = document.querySelector("#gamesPlayed")
    let gameCounter = 0;
    let scoreCounter = 0;
    let newQuestion = 0;

    trueButton.addEventListener("click", isTrueCorrect);
    falseButton.addEventListener("click", isFalseCorrect);
    questionButton.addEventListener("click", nextQuestion);
    resultLine.hidden = true
    questionButton.hidden = true

    
// Function to hide t/f buttons when answer submitted, and show them again when new Q generated
function toggleButtonVisibility(){
    if(trueButton.hidden, falseButton.hidden){
    trueButton.hidden = false
    falseButton.hidden = false
     } else{
    trueButton.hidden=true 
    falseButton.hidden=true
    }
}

// Function to run question text through HTML special character decoder and return decoded string:
function decodeHTML(codedQuestion){
    var textArea = document.createElement('textArea');
    textArea.innerHTML = codedQuestion;
    let decodedQuestion = textArea.value 
    return decodedQuestion
}


// define  nextQuestion function:
function nextQuestion(event){
    toggleButtonVisibility()
    //GET NEW Q AND DECODE IT
    let newQ = decodeHTML(triviaData.results[newQuestion].question)
    questionField.textContent = newQ
    resultLine.hidden = true
    questionButton.hidden=true
    return newQuestion
    }

// If user selects true
    //  and is RIGHT: win message, add point 
    //  and is WRONG: lose message, docks point
    function isTrueCorrect(event){
            if(triviaData.results[newQuestion]["correct_answer"] === "True"){
                resultLine.textContent = "You got it right!!!";
                scoreCounter++;
                scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
            } else {
                resultLine.textContent = "You got it wrong!!!";
                scoreCounter--;
                scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
            }
           toggleButtonVisibility()
           resultLine.hidden=false
           questionButton.hidden=false
            newQuestion++;
            gameCounter++;
            gameCountDisplay.textContent = `Games played: ${gameCounter}`
        }
      
// If user selects false
    //and is RIGHT: win message, add point 
    //  and is WRONG: lose message, docks point
    function isFalseCorrect(event){

        scoreCounter.textContent = `Score: ${scoreCounter}`;
        if(triviaData.results[newQuestion]["correct_answer"] === "False"){
            resultLine.textContent = "Nice one u got it right";
            scoreCounter++;
            scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
        
        } else {
            resultLine.textContent = "got it wrong :(";
            scoreCounter--;
            scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
          }
          toggleButtonVisibility()
          resultLine.hidden=false
          questionButton.hidden=false
          newQuestion++
          gameCounter++
          gameCountDisplay.textContent = `Games played: ${gameCounter}`

    }

// Get API data and assign it to triviaData  
    let triviaData = await getTriviaData()
// Print question in browser
    

questionField.textContent = triviaData.results[newQuestion].question
console.log(triviaData)

currentQuestion = triviaData.results[newQuestion]
    
}

main()



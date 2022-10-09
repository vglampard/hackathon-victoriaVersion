//hitting t/f AGAIN after answer submimtted also adds to score
// what t/f refers to is out of step with displayed question?


// ADD line at end of isTruCorrect and isFalseCorrect to generate new question
async function getTriviaData(){
    let response = await fetch("https://opentdb.com/api.php?amount=50&type=boolean")
    let triviaData = await response.json();
    return triviaData
}

// ##### MAIN FUNCTION #####
// lines below lay out variables and functions for main async function
async function main (){
    let trueButton = document.querySelector("#inputTrue");
    let falseButton = document.querySelector("#inputFalse");
    let questionField = document.querySelector("#question");
    let questionButton = document.querySelector("#newQuestion");
    let i = 0;
    let resultLine = document.querySelector("#result") ;
    let scoreCountDisplay = document.querySelector("#score");
    let gameCountDisplay = document.querySelector("#gamesPlayed")
    let gameCounter = 0;
    let scoreCounter = 0;

    trueButton.addEventListener("click", isTrueCorrect);
    falseButton.addEventListener("click", isFalseCorrect);
    questionButton.addEventListener("click", newQuestion);


// If user selects true
//  and is RIGHT - logs win
//  and is WRONG - logs loss
    function isTrueCorrect(event){
            if(triviaData.results[i]["correct_answer"] === "True"){
                resultLine.textContent = "You got it right!!!";
                scoreCounter++;
                scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
            } else {
                resultLine.textContent = "You got it wrong!!!";
                scoreCounter--;
                scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
            }
            i++;
            gameCounter++;
            gameCountDisplay.textContent = `Games played: ${gameCounter}`
        }
      
// If user selects false
        //  and is RIGHT - logs win
        //  and is WRONG - logs loss
    function isFalseCorrect(event){

        scoreCounter.textContent = `Score: ${scoreCounter}`;
        if(triviaData.results[i]["correct_answer"] === "False"){
            resultLine.textContent = "Nice one u got it right";
            scoreCounter++;
            scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
        } else {
            resultLine.textContent = "got it wrong :(";
            scoreCounter--;
            scoreCountDisplay.textContent = `Score: ${scoreCounter}`;
          }
          i++
          gameCounter++
          gameCountDisplay.textContent = `Games played: ${gameCounter}`

        }

// define generate newQuestion function:
    function newQuestion(event){
    i++
    questionField.textContent = triviaData.results[i].question
    }


// Get API data and assign it to triviaData  
    let triviaData = await getTriviaData()
// Print question in browser
    questionField.textContent = triviaData.results[0].question

    console.log(triviaData)
}

main()



// ##### TO DO ######
// Navigation button
// score counter
// sort out quotes in question
// replace alert with printing 
  
// }
// // Add event listener to false button, lay out function 
// 
// let answer = false;
// //  for question[i]{
// //     // if(answer === question.["correct_answer"]){return true}
// //     //else return false
//new question button is resetting the new question but not the new question's answers

// ADD line at end of isTruCorrect and isFalseCorrect to generate new question
async function getTriviaData(){
    let response = await fetch("https://opentdb.com/api.php?amount=50&type=boolean")
    let triviaData = await response.json();
    return triviaData
}

// ##### MAIN FUNCTION #####
async function main (){
    let trueButton = document.querySelector("#inputTrue");
    let falseButton = document.querySelector("#inputFalse");
    let questionField = document.querySelector("#question");
    let questionButton = document.querySelector("#newQuestion")
    let i = 0
    let userResponse
    let resultLine = document.querySelector("#result") 
    let scoreCounter = document.querySelector("#score")
    let counter = 0

    trueButton.addEventListener("click", isTrueCorrect);
    falseButton.addEventListener("click", isFalseCorrect)
    questionButton.addEventListener("click", newQuestion)


// If user selects true
//  and is RIGHT - logs win
//  and is WRONG - logs loss
    function isTrueCorrect(event){
        counter++
        scoreCounter.textContent = `Score: ${counter}`
            if(triviaData.results[i]["correct_answer"] === "True"){
                resultLine.textContent = "You got it right!!!"
            } else {
                resultLine.textContent = "You got it wrong!!!"
            }
            i++
        }
      
// If user selects false
        //  and is RIGHT - logs win
        //  and is WRONG - logs loss
    function isFalseCorrect(event){
        counter++
        scoreCounter.textContent = `Score: ${counter}`
        if(!triviaData.results[i]["correct_answer"] === "False"){
            resultLine.textContent = "Nice one u got it right"
        } else {
            resultLine.textContent = "got it wrong :("
          }
          i++
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
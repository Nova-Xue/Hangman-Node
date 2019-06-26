var words = require("./word.js");
var wordArray = ["Banana apple","orange","pineapple"];
var wordCount = 0;
var inquirer = require("inquirer");
function getInput (word){
    inquirer.prompt(
        {
            type : "input",
            name : "input",
            message : "A letter",
        }
    ).then(answer=>{
        if(answer.input.length == 1){
            console.log(word.guessLetter(answer.input));
            if(word.guessLetter(answer.input).indexOf("_")== -1){
                console.log("you wiin");
                again();
            }else{
                getInput(word);
            }
        }else{
            console.log("can not take that");
            getInput(word);
        }
    });
}
function again(){
    inquirer.prompt({
            type : "confirm",
            name : "confirm",
            message : "Play again?",
            default  : true
    }).then(answer =>{
        if(answer.confirm){
            initial(wordCount);
        }
    });
}
function initial(count){
    if(count<wordArray.length){
        console.log("Now try to guess this word : ");
        var newWord = new words.word(wordArray[count]);
        console.log(newWord.guessLetter(";"));
        getInput(newWord);
        wordCount++;
    }else{
        console.log("No more word");
    }
}
console.log("Welcome to Hangman The Node ( by Nova )");
initial(wordCount);
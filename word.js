var letters = require("./letters.js");
var api = require("./api.js");
module.exports.word = function (word){
    this.name = word;
    this.letters = [];
    //to arr
    for(var i =0;i< word.length ;i++){
            // " "inside
            this.letters.push(new letters.letter(word[i]));
    }
    this.guessLetter = function (letter){
        var displayLetters = "";
        for(var i = 0;i< this.letters.length;i++){
                this.letters[i].guess(letter);
                displayLetters += this.letters[i].getLetter();
        }
        return displayLetters;
    }
};
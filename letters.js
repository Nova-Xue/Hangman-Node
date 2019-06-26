module.exports.letter = function (letter){
   this.name = letter;
   if(this.name == " "){
    this.guessed = true;
   }else{
    this.guessed = false;
   }
   this.guess = function(another){
       if(!this.guessed){
        this.guessed = (another.toLowerCase() == this.name.toLowerCase());
        }
   }
   this.getLetter = function(){
       if(this.guessed){
        return this.name;
       }else{
           return "_";
       }
   }
};
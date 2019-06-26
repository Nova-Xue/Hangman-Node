module.exports.letter = function (letter){
   this.name = letter;
   if(this.name == " "){
    this.guessed = true;
   }else{
    this.guessed = false;
   }
   this.guess = function(another){
       if(!this.guessed){
            if(another.toLowerCase() == this.name.toLowerCase()){
                this.guessed =true;
            }
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
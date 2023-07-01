function easy() {
     let x = Math.floor((Math.random() * 10) + 1);
     let Guess=1;
     let guess=5;
     document.getElementById("guess").innerHTML=guess;
     document.getElementById("SubmitGuessNumber").onclick = function() {
          let y=document.getElementById("GuessNumber").value;
          
          if(y==x && guess>0){
               alert("You have guessed the number in "+Guess+" Guesses!");
               window.history.back();
          }else if(y>x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Lesser Number!");
          }else if(y<x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Greater Number!");
          }else if(guess==0){
               alert("You have ran out the no. of guess. Try again");
               location.reload();
          }else{
               alert("Please Enter a Valid Number");
          }
     }
}

function medium() {
     let x = Math.floor((Math.random() * 200) - 100);
     let Guess=1;
     let guess=8;          
     document.getElementById("guess").innerHTML=guess;
     document.getElementById("SubmitGuessNumber").onclick = function() {
          let y=document.getElementById("GuessNumber").value;
          
          if(y==x && guess>0){
               alert("You have guessed the number in "+Guess+" Guesses!");
               window.history.back();
          }else if(y>x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Lesser Number!");
          }else if(y<x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Greater Number!");
          }else if(guess==0){
               alert("You have ran out the no. of guess. Try again");
               location.reload();
          }else{
               alert("Please Enter a Valid Number");
          }
     }
}

function hard() {
     let x = Math.floor((Math.random() * 2000) - 1000);
     let Guess=1;
     let guess=10;          
     document.getElementById("guess").innerHTML=guess;
     document.getElementById("SubmitGuessNumber").onclick = function() {
          let y=document.getElementById("GuessNumber").value;
          
          if(y==x && guess>0){
               alert("You have guessed the number in "+Guess+" Guesses!");
               window.history.back();
          }else if(y>x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Lesser Number!");
          }else if(y<x&& guess>0){
               Guess++;
               guess--;
               document.getElementById("guess").innerHTML=guess;
               alert("Try again with Greater Number!");
          }else if(guess==0){
               alert("You have ran out the no. of guess. Try again");
               location.reload();
          }else{
               alert("Please Enter a Valid Number");
          }
     }
}
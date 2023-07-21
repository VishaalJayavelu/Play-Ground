const readline = require('readline-sync');
const mod= require('maths_module');
const { setTimeout } = require('timers');

console.log("\nxxx---Entering the program---xxx")
const main=async()=>{
     try {
          const opp=Number(readline.question('\nSelect a number for that specific opperation to perform :\n1.Addition,\n2.Subraction,\n3.Multiplication,\n4.Rise to the power of,\n5.Rise to the power of 2,\n6.Rise to the power of 3,\n7.Factorial of,\n8.Division,\n9.Modulus\n\n'));
          if(opp>=1&&opp<=10){
               sel(opp);
          }else if(opp==106){
               console.log("xxx---Exiting the program---xxx")
          }else{
               console.log("Select a valid number");
               main();
          }
     } catch (err) {
          console.log(err);
     }
}

const sel=async(opp)=>{

     if(opp==1){
          console.log(`You have selected addtion opertion to perform`); 
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.add(a,b));
     }
     if(opp==2){
          console.log(`You have selected subraction opertion to perform`); 
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.sub(a,b));
     }
     if(opp==3){
          console.log(`You have selected multiplication opertion to perform`); 
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.mul(a,b));
     }
     if(opp==4){
          console.log(`You have selected to raise the power of the number to perform`); 
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.pow(a,b));
     }
     if(opp==5){
          console.log(`You have selected to square the number opertion to perform`); 
          const a= await Number(readline.question('\nEnter a number for A :'));
          console.log(mod.sqr(a));
     }
     if(opp==6){
          console.log(`You have selected to cube the number opertion to perform`);
          const a= await Number(readline.question('\nEnter a number for A :'));
          console.log(mod.cub(a));
     }
     if(opp==7){
          console.log(`You have selected to factorial the number opertion to perform`);
          const a= await Number(readline.question('\nEnter a number for A :'));
          console.log(mod.fact(a));
     }
     if(opp==8){
          console.log(`You have selected division opertion to perform`);
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.div(a,b));
     }
     if(opp==9){
          console.log(`You have selected modulus opertion to perform`);
          const a= await Number(readline.question('\nEnter a number for A :'));
          const b= await Number(readline.question('\nEnter a number for B :'));
          console.log(mod.mod(a,b));
     }   
     setTimeout(() => {
          main();
     }, 2000);
}

main();


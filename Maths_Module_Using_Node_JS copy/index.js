const http = require('http'); 
const fs = require('fs');
const fspro = require('fs').promises;
const path = require('path');
const readline = require('readline-sync');

const main=async()=>{
     try {
          const opp=Number(readline.question('\nSelect a number for that specific opperation to perform :\n1.Addition,\n2.Subraction,\n3.Multiplication,\n4.Rise to the power of,\n5.Rise to the power of 2,\n6.Rise to the power of 3,\n7.Factorial of,\n8.Division,\n9.Modulus'));
          if(opp>=1&&opp<=10){
               console.log(`You have selected ${opp} to perform`); 
          }else{
               console.log("Select a valid number");
               main();
          }
          sel();
     } catch (err) {
          console.log(err);
     }
}

const sel=async()=>{
     const a= await Number(readline.question('\nEnter a number for A :'));
     const b= await Number(readline.question('\nEnter a number for B :'));
}

main();
/*fs.readFile('./index.html',function(err, html){
     if (err) throw err;
     http.createServer(function (req, res) { 
          res.writeHead(200, {'Content-type': 'text/html'}); 
          res.write(html);         
          res.end();
      }).listen(8080);
});
*/
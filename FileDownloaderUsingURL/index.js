const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const readline = require('readline-sync');

const download=()=>{
     
     try{
          const dir=readline.question('enter the Path you want to store the file:\n');;
          if (!fs.existsSync(dir)){

               console.log('\nFile and folder does not exists\n');          
               fs.mkdirSync(dir);

          }
          const URL = readline.question('enter the url you want to download file from:\n');
          const filename = fs.createWriteStream(path.join(dir,readline.question('enter the filename you want to store:\n')));

          if(URL.toString()[4]==='s'){
               https.get(URL,(res) =>{
                    res.pipe(filename);
                    filename.on("finish",() => {
                         filename.close();
                         console.log("https Download Completed");
                    });
               });
          }else if(URL.toString()[4]===':'){
               http.get(URL,(res) =>{
                    res.pipe(filename);
                    filename.on("finish",() => {
                         filename.close();
                         console.log("http Download Completed");
                    });
               });
          }else{
               console.log("Invalid URL: " + URL);
          }
     }catch(err) {
          console.log(err);
     }
}

download();
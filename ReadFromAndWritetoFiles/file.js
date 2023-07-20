const fspro = require('fs').promises;
const fs = require('fs');
const path = require('path');

const op=async()=>{
     try {
          if(fs.existsSync('./file/text.txt')){
               console.log('File exists');
               
               const data=await fs.readFileSync(path.join(__dirname,'./file','text.txt'),'utf8');
               console.log(data);

               await fspro.appendFile(path.join(__dirname,'./file','text.txt'),'\nhello');
               console.log('File appended successfully');

               await fspro.rename(path.join(__dirname,'./file','text.txt'),path.join(__dirname,'./file','textarea.txt'));
               const Ndata=await fspro.readFile(path.join(__dirname,'./file','textarea.txt'),'utf8');
               console.log('File renamed successfully with :\n'+Ndata);
          }else{
               console.log('File does not exists');
               
               fspro.writeFile(path.join(__dirname,'./file','text.txt'),'hi');
               console.log('File created successfully');
          }          
     } catch (error) {
          console.error(error);
     }
}

op();
const fspro = require('fs').promises;
const fs = require('fs');
const path = require('path');

const op=async()=>{
     try {
          const dirname=path.join(__dirname,'./file');
          if(fs.existsSync('./file')){
               console.log('\nFiles in the directory:\n');
               fs.readdirSync(dirname).forEach(file => { 
                    console.log(file);
                    fs.rm(path.join(__dirname,'./file',file), { recursive: true, force: true }, (err) => { }); 
               });
               console.log('\nFolder already exists');
               fspro.rm(path.join(__dirname,'./file'), { recursive: true }, (err) => { }); 
               console.log('Folder removed successfully\n');
               
          }else{
               console.log('\nFile and folder does not exists\n');
               
               fspro.mkdir('./file');
               console.log('Folder has been created successfully');
               
               await fspro.writeFile(path.join(__dirname,'./file','text.txt'),'hi');
               console.log('File has been created successfully\n');

               const data=await fs.readFileSync(path.join(__dirname,'./file','text.txt'),'utf8');
               console.log(data);

               await fspro.appendFile(path.join(__dirname,'./file','text.txt'),'\nhello');
               console.log('File appended successfully');

               await fspro.rename(path.join(__dirname,'./file','text.txt'),path.join(__dirname,'./file','textarea.txt'));
               const Ndata=await fspro.readFile(path.join(__dirname,'./file','textarea.txt'),'utf8');
               console.log('File renamed successfully with :\n\n'+Ndata);
               console.log(' ');
          }          
     } catch (err) {
          return console.log(err);
     }
}

op();
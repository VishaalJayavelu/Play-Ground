const fs = require('node:fs');
const fspro = require('node:fs/promises');
const path = require('node:path');
const readline = require("readline-sync");

const dir=path.join(__dirname, './notes');
let start =0;

const wr=async()=>{
     try{
          if(start===0){
               if(!fs.existsSync(dir)){
                    console.log('\nFolder does not at '+dir);
                    await fspro.mkdir(dir);
                    console.log('\nFolder created at '+dir);
               }else{
                    console.log('\nFolder exits at '+dir);
               }
               start=1;
          }
          await sel(); 

     }catch(err){
          console.log('error creating', err);
     }
}

const sel=async()=>{
     let a = Number(readline.question('Select a number to perform the specified commands:\n1.Add\n2.Edit\n3.Delete\n\n'));
     if(a===1) {
          console.log(`\nperforming to add a new notes!`);
          await add();
     }else if(a===2) {
          console.log(`\nperforming to edit a note!`);
          await edit();
     }else if(a===3) {
          console.log(`\nperforming to delete a note!`);
          await del();
     }else if(a===106) {
          console.log(`\nperforming to delete all notes`);
          await delall();
     }else{
          console.log('\nselect a valid option:');
          sel();
     }
}

const add=async()=>{
     
     let notestitle=readline.question('Please enter a title for the notes :\n');
     if(!fs.existsSync(path.join(dir,`./${notestitle}.txt`))){
          await fs.writeFile(path.join(__dirname, './notes',`${notestitle}.txt`),`NOTES TITLE:\n${notestitle}\n`,(err)=>{
               if(err) throw err;
          });
          console.log(`\n${notestitle} title created successfully`);
          let notesbody=readline.question('\nPlease enter the notes (write in a single line):\n');
          await fs.appendFile(path.join(__dirname, './notes',`${notestitle}.txt`),`\nNOTES:\n${notesbody}.`,(err)=>{
               if(err) throw err;
          });
          console.log(`\n${notestitle} saved successfully`);
     }else{
          console.log(`\n${notestitle} title exits\n \nTry with different title`);
          await add();
     }
     await sel();
}

const edit=async()=>{
     fs.readdirSync(dir).forEach(file => { 
          console.log(file);
     });
     let notestitle=readline.question('Please enter a title from the above saved notes to edit:\n');
     if(fs.existsSync(path.join(dir,`./${notestitle}.txt`))){
          console.log(`\n${notestitle} title exits`);
          let notesbody=readline.question('\nPlease enter the notes (write in a single line):\n');
          await fs.writeFile(path.join(__dirname, './notes',`${notestitle}.txt`),`NOTES TITLE:\n${notestitle}\n`,(err)=>{
               if(err) throw err;
          });
          await fs.appendFile(path.join(__dirname, './notes',`${notestitle}.txt`),`\nNOTES:\n${notesbody}.`,(err)=>{
               if(err) throw err;
          });
          console.log(`\n${notestitle} title edited successfully`);
     }else{
          console.log(`\n${notestitle} title does not exits`);
          await edit();
     }
     await sel();
}

const del=async()=>{
     let total=0;
     fs.readdirSync(dir).forEach(file => { 
          console.log(file);
          total++;
     });
     console.log(total);
     if(total!=0){
          let notestitle=readline.question('Please enter a title for the notes to edit:\n');
          if(fs.existsSync(path.join(dir,`./${notestitle}.txt`))){
               console.log(`\n${notestitle} title exits`);
               await fs.rmSync(path.join(dir,`./${notestitle}.txt`));
               console.log(`\n${notestitle} title deleted successfully`);
          }else{
               console.log(`\n${notestitle} title does not exits`);
               await del();
          }
     }else{
          console.log('\nThere are no notes to edit');
     }
     await sel();
}

const delall=async()=>{
     if(fs.existsSync('./notes')){
          console.log('\nFiles in the folder:');
          fs.readdirSync(dir).forEach(file => { 
               console.log(file);
               fs.rm(path.join(dir,file), { recursive: true, force: true }, (err) => { }); 
          });
          console.log('\nFiles removed from the folder');
          fspro.rm(dir, { recursive: true }, (err) => { }); 
          console.log('Folder removed successfully');    
     }
}

wr();
const fs = require('fs');

const op=async()=>{
     try {
          if(fs.existsSync('./file')){
               console.log('file already exists');
               fs.rmdir('./file',(err)=>{
                    if (err) throw err;
                    console.log('Directory deleted successfully');
               });
          }
          if(!fs.existsSync('./file')){
               console.log('file does not exists');
               fs.mkdir('./file',(err)=>{
                    if (err) throw err;
                    console.log('Directory Created successfully');
               });
          }
     } catch (error) {
          console.log(error);
     }
};

op();
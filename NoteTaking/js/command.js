import Show from './show.js';
export default class Notes{
     static getall(){
          const notes = JSON.parse(localStorage.getItem("NotesList")||"[]");
          
          return notes.sort((b,a)=>{
               return new Date(a.updated) > new Date(b.updated) ? -1 : 1 ;
          });
          
     }

     static save(notesToSave){
          const notes = Notes.getall();
          const exist=notes.find(note=>note.title==notesToSave.title);

          if(exist){
               alert("please choose a diffrent title");
               document.querySelector('#notes-title').focus();
          }else if(notesToSave.title==''){
               alert("please enter the title for the notes to store");
               document.querySelector('#notes-title').focus();
          }else if(notesToSave.body==''){
               alert("please enter the notes to store");
               document.querySelector('#notes-body').focus();
          }else{
               let date= new Date().toDateString();
               let time=new Date().toLocaleTimeString();
               notesToSave.updated = date+" "+time;
               notes.push(notesToSave);
               localStorage.setItem("NotesList", JSON.stringify(notes));
               location.reload();
          }   
     }
     static edit(title,body,Ntitle,Nbody){
          const notes = Notes.getall();
          const exist=notes.find(note=>note.title==title&&note.body==body);
          
          if(exist){
               exist.title = Ntitle;
               exist.body = Nbody;
               let date= new Date().toDateString();
               let time= new Date().toLocaleTimeString();
               exist.updated = date+" "+time;
               localStorage.setItem("NotesList", JSON.stringify(notes));
          }

     }

     static del(title){
          const notes=Notes.getall();
          const nnotes=notes.filter(note => note.title !=title);

          localStorage.setItem("NotesList", JSON.stringify(nnotes));
     }

}
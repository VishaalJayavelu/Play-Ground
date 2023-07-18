import Notes from './command.js';
import Show from './show.js';

const addForm=document.querySelector('#add-notes');
const title=document.querySelector('#notes-title');

title.focus();
const notes = Notes.getall();

addForm.addEventListener('submit',(e)=>{     
     e.preventDefault();
     const data = new FormData(e.target);

     const value = Object.fromEntries(data.entries());
     
     Notes.save(value);
});

Show.display(notes);

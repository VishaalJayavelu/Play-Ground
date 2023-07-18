import Notes from './command.js';

export default class Show{
     static create(addTitle,addBody,addTime){
          const notesList = document.querySelector("#notes-list");

          const notes =document.createElement('div');
          notes.classList.add("notes");
          
          const notesContent =document.createElement('div');
          notesContent.classList.add("notes-content");
          
          const notesTitleShow =document.createElement('label');
          notesTitleShow.classList.add("notes-title-show");
          notesTitleShow.innerHTML = addTitle;
          notesTitleShow.setAttribute('for','notes-body-show');
          notesTitleShow.setAttribute('realonly','realonly');
          
          const notesBodyShow =document.createElement('textarea');
          notesBodyShow.classList.add("notes-body-show");
          notesBodyShow.id="notes-body-show";
          notesBodyShow.innerHTML = addBody;
          notesBodyShow.readOnly = "true";

          const notesTimeShow =document.createElement('div');
          notesTimeShow.classList.add("notes-time-show");
          notesTimeShow.innerHTML = addTime;
          
          const notesActions =document.createElement('div');
          notesActions.classList.add("notes-actions");

          const notesEdit =document.createElement('button');
          notesEdit.classList.add("notes-edit");
          notesEdit.innerText = 'Edit';
          notesEdit.type = 'button';

          const notesDelete =document.createElement('button');
          notesDelete.classList.add("notes-del");
          notesDelete.innerText = 'Delete';
          notesDelete.type = 'button';

          notesActions.appendChild(notesEdit);
          notesActions.appendChild(notesDelete);

          notesContent.appendChild(notesTitleShow);
          notesContent.appendChild(notesBodyShow);
          notesContent.appendChild(notesTimeShow);

          notes.appendChild(notesContent);
          notes.appendChild(notesActions);

          notesList.insertBefore(notes,notesList.children[0]);

          const title=document.querySelector('#notes-title');
          const body=document.querySelector('#notes-body');
          title.value ="";
          body.value ="";
          title.focus();

          notesDelete.addEventListener("click",(e)=>{
               notesList.removeChild(notes);
               console.log(addTitle);
               Notes.del(addTitle);
          });
 
          notesEdit.addEventListener("click",(e)=>{
               document.querySelector('#notes-title').value = addTitle;
               document.querySelector('#notes-body').value = addBody;
               document.querySelector('#notes-title').focus();
               document.querySelector('#Submit').value = "SAVE";
               Notes.del(addTitle);
          });
     }

     static display(note) {
          console.log(note.length);
          for (let index = 0; index < note.length; index++) {
               this.create(note[index].title,note[index].body,note[index].updated);
          }
          return ;
     }
}

window.onload = function() {
     const addnotes=document.querySelector("#add-notes");
     const notestext=document.querySelector("#notes-text");
     const noteslist=document.querySelector("#notes");
     
     notestext.focus();
     
     addnotes.addEventListener("submit",(e)=>{
          e.preventDefault();
          
          const note=notestext.value;
          if(!note){
               alert("Please fill the text");
               notestext.focus();
               return;
          } 

          const text=document.createElement("textarea");
          text.classList.add("text");
          text.innerHTML=note;
          text.setAttribute("readonly", "readonly");
          
          const deletebnt=document.createElement("button");
          deletebnt.classList.add("delete");
          deletebnt.innerText="Delete";

          const editbnt=document.createElement("button");
          editbnt.classList.add("edit");
          editbnt.innerText="Edit";

          const action=document.createElement("span");
          action.classList.add("actions");
          action.appendChild(editbnt);
          action.appendChild(deletebnt);

          const noteswarp=document.createElement("div");
          noteswarp.classList.add("noteswarp");
          noteswarp.appendChild(text);
          noteswarp.appendChild(action);
          noteslist.appendChild(noteswarp);
          
          notestext.value = "";
          notestext.focus();
          
          deletebnt.addEventListener("click",(e)=>{
               noteslist.removeChild(noteswarp);
          });
 
          editbnt.addEventListener("click",(e)=>{
               if (editbnt.innerText.toLowerCase()=='edit') {
                    editbnt.innerText="Save";
                    editbnt.classList.add("save");
                    text.removeAttribute("readonly");
                    text.focus();
                    editbnt.style.colour='white';
               } else {
                    editbnt.innerText="Edit";
                    editbnt.classList.remove("save");
                    text.setAttribute("readonly", "readonly");
               }
           });
     });

}


const add = document.querySelector('#ADD');
const notes=[];
let id=0;

const addnotes = (id,note) => {
     console.log(id);
     console.log(notes);
     notes.push({
          id,
          note,
     });
   
     localStorage.setItem("notes", JSON.stringify(notes));
   
     return { id,note };
   };
   
add.addEventListener('click', Add);
     
function Add() {
     const textarea = document.createElement('textarea');
     textarea.classList.add('notes');
     textarea.placeholder = "Enter your notes";
     textarea.setAttribute("readonly", "readonly");
               
     const x = document.createElement('button');
     x.classList.add('X');
     x.innerText="X";

     const edit = document.createElement('button');
     edit.classList.add('edit');
     edit.innerText="Add New Notes";

     const content = document.createElement('div');
     content.classList.add('content');
          
     const br = document.createElement('br');

     content.appendChild(textarea);
     content.appendChild(x);
     content.appendChild(edit);
     content.appendChild(br);
     show.appendChild(content);
     
     edit.addEventListener("click",()=>{
          save(edit,textarea);
     });

     x.addEventListener("click",()=>{
          del(content);
     });
}

function save(edit,textarea){
     if(edit.textContent=="Save the notes"){
          textarea.setAttribute("readonly", "readonly");
          const text=textarea.innerText.value;
          console.log(text);
          edit.innerText="Edit the notes";
          edit.classList.replace('actions','edit');   
     }else{     
          textarea.focus();
          textarea.removeAttribute("readonly", "readonly");
          edit.classList.replace('edit','actions');
          edit.innerText="Save the notes";
     }
}

function del(content){
     show.removeChild(content);
}
console.log(notes);
window.onload = function() {
     const addtask=document.querySelector("#add-task");
     const tasktext=document.querySelector("#task-text");
     const tasklist=document.querySelector("#tasks");
     addtask.addEventListener("submit",(e)=>{
          e.preventDefault();
          
          const task=tasktext.value;
          if(!task){
               alert("Please fill the task");
               return;
          } 

          const text=document.createElement("input");
          text.classList.add("text");
          text.type="text";
          text.value=task;
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

          const taskwarp=document.createElement("div");
          taskwarp.classList.add("taskwarp");
          taskwarp.appendChild(text);
          taskwarp.appendChild(action);
          tasklist.appendChild(taskwarp);
          tasklist.appendChild(document.createElement('br'));
          
          tasktext.value = "";
    
          deletebnt.addEventListener("click",(e)=>{
               tasklist.removeChild(taskwarp);
          });
 
          editbnt.addEventListener("click",(e)=>{
               if (editbnt.innerText.toLowerCase()=='edit') {
                    editbnt.innerText="Save";
                    text.removeAttribute("readonly");
                    text.focus();
               } else {
                    editbnt.innerText="Edit";
                    text.setAttribute("readonly", "readonly");
               }
           });

     });
}

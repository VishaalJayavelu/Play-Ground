window.onload = function() {
     const adddetails=document.querySelector("#add-details");
     const firstname=document.querySelector("#first-name");
     const lastname=document.querySelector("#last-name");
     const emailid=document.querySelector("#email-id");
     const contactno=document.querySelector("#contact-no");
     const contactlist=document.querySelector("#contact-list");
     
     adddetails.addEventListener("submit",(e)=>{
          e.preventDefault();
          
          const first=firstname.value;
          const last=lastname.value;
          const email=emailid.value;
          const contact=contactno.value;
          
          var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
          var regContact=/^\d{10}$/;                       
          var regName = /\d+$/g;
          
          if(first==''){
               alert("Please fill the first name");
               firstname.focus();
               return;
          } else if(last==''){
               alert("Please fill the last name");
               lastname.focus();
               return;
          }else if(contact==''){
               alert("Please fill the contact");
               contactno.focus();
               return;
          }else if(email==''){
               alert("Please fill the email id");
               emailid.focus();
               return;
          }else if(!regContact.test(contact)){
               alert("Please enter a valid contact number");
               contactno.value ="";
               contactno.focus();
               return;
          }else if(!regEmail.test(email)){
               alert("Please enter a valid email id");
               emailid.value ="";
               emailid.focus();
               return;
          }else {

               const First=document.createElement("input");
               First.classList.add("text-input");
               First.type="text";
               First.value=first;
               First.setAttribute("readonly", "readonly");

               const Last=document.createElement("input");
               Last.classList.add("text-input");
               Last.type="text";
               Last.value=last;
               Last.setAttribute("readonly", "readonly");

               const Email=document.createElement("input");
               Email.classList.add("text-input");
               Email.type="text";
               Email.value=email;
               Email.setAttribute("readonly", "readonly");


               const Contact=document.createElement("input");
               Contact.classList.add("text-input");
               Contact.type="text";
               Contact.value=contact;
               Contact.setAttribute("readonly", "readonly");

               const deletebnt=document.createElement("button");
               deletebnt.classList.add("delete");
               deletebnt.innerText="Delete";

               const editbnt=document.createElement("button");
               editbnt.classList.add("edit");
               editbnt.innerText="Edit";

               const action=document.createElement("div");
               action.classList.add("actions");
               action.appendChild(editbnt);
               action.appendChild(deletebnt);

               const taskwarp=document.createElement("div");
               taskwarp.classList.add("taskwarp");
               taskwarp.appendChild(First);
               taskwarp.appendChild(Last);
               taskwarp.appendChild(Contact);
               taskwarp.appendChild(Email);
               taskwarp.appendChild(action);
               contactlist.appendChild(taskwarp);
               contactlist.appendChild(document.createElement('br'));

               firstname.value ="";
               lastname.value ="";
               emailid.value ="";
               contactno.value ="";

               deletebnt.addEventListener("click",(e)=>{
                    contactlist.removeChild(taskwarp);
               });

               editbnt.addEventListener("click",(e)=>{
                    if (editbnt.innerText.toLowerCase()=='edit') {
                         editbnt.innerText="Save";
                         First.removeAttribute("readonly");
                         Last.removeAttribute("readonly");
                         Email.removeAttribute("readonly");
                         Contact.removeAttribute("readonly");
                         First.focus();
                    } else {
                         editbnt.innerText="Edit";
                         First.setAttribute("readonly", "readonly");
                         Last.setAttribute("readonly", "readonly");
                         Email.setAttribute("readonly", "readonly");
                         Contact.setAttribute("readonly", "readonly");
                    }
               });
          }
     });
}

window.onload = function() {
     import {} from "./maths.js";
     const a=document.querySelector("#a");
     const b=document.querySelector("#b");

     const addbtn=document.querySelector("#add");
     const subbtn=document.querySelector("#sub");
     const mulbtn=document.querySelector("#mul");
     const divbtn=document.querySelector("#div");
     const modbtn=document.querySelector("#mod");
     const powbtn=document.querySelector("#pow");
     const factbtn=document.querySelector("#fact");
     const sqrbtn=document.querySelector("#sqr");
     const cubbtn=document.querySelector("#cub");

     const history=document.querySelector("#history");

     addbtn.addEventListener("click",(e)=>{
          e.preventDefault();
          
          const aval=a.value;
          const bval=b.value;
          
          console.log("res");

          if(checkvalues(aval,bval)){
               const res=sum(aval,bval);
               console.log("res");
          }
               
     });
}

function checkvalues(aval,bval){
     if(!aval ||isNaN(aval)){
          if(!aval){
               alert("Please fill the value of a");
               a.focus();
               return false;
          }else{
               alert("Please enter a numberical value for a");
               a.value="";
               a.focus();
               return false;
          }
     }else if( !bval || isNaN(bval)){
          if(!bval){
               alert("Please fill the value of b");
               b.focus();
               return false;
          }else{
               alert("Please enter a numberical value for b");
               b.focus();
               b.value="";
               return false;
          }
     }
     return true;
}

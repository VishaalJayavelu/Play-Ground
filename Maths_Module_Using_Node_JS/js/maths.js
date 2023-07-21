const sum=(a,b)=>{
     return a+b;
}
const sub=(a,b)=>{
     return a-b;
}
const mul=(a,b)=>{
     if(b==2){
          return sqr(a);
     }
     if(b==3){
          return cub(a);
     }
     return a*b;
}
const div=(a,b)=>{
     return a/b;
}
const mod=(a,b)=>{
     return a%b;
}
const pow=(a,b)=>{
     if(b==0){
         return 1;
     }
     let res=1;
     for(let i=0;i<b;i++){
         res=res*a;
     }
     return res;
}
const fact=(a)=>{
     if(a==0||a==1){
         return 1;
     }
     let res=1;
     let b=a;
     for(let i=0;i<a;i++){
         res=res*(b);
         b--;
     }
     return res;
}
const sqr=(a)=>{
     return a*a;
}
const cub=(a)=>{
     return a*a*a;
}


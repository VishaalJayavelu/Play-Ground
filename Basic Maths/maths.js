export function sum(a,b){
     return a+b;
}
export function sub(a,b){
     return a-b;
}
export function mul(a,b){
     if(b==2){
          return sqr(a);
     }
     if(b==3){
          return cub(a);
     }
     return a*b;
}
export function div(a,b){
     return a/b;
}
export function mod(a,b){
     return a%b;
}
export function pow(a,b){
     if(b==0){
         return 1;
     }
     let res=1;
     for(let i=0;i<b;i++){
         res=res*a;
     }
     return res;
}
export function fact(a){
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
export function sqr(a){
     return a*a;
}
export function cub(a){
     return a*a*a;
}

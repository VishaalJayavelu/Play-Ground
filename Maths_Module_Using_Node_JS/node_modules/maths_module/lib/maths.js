function add(a,b){
     return a+b;
}
function sub(a,b){
     return a-b;
}
function mul(a,b){
     if(b==2){
          return sqr(a);
     }
     if(b==3){
          return cub(a);
     }
     return a*b;
}
function div(a,b){
     return a/b;
}
function mod(a,b){
     return a%b;
}
function pow(a,b){
     if(b==0){
         return 1;
     }
     let res=1;
     for(let i=0;i<b;i++){
         res=res*a;
     }
     return res;
}
function fact(a){
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
function sqr(a){
     return a*a;
}
function cub(a){
     return a*a*a;
}

module.exports = {
	add : add,
	sub : sub,
	mul : mul,
	div : div,
     mod : mod,
     pow : pow,
	fact : fact,
     sqr : sqr,
     cub : cub
}
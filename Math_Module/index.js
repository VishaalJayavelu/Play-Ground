function hello(){
     return 'hello';
}

console.log(hello());

const root=document.getElementById('root');
root.innerHTML=hello();

alert(hello());
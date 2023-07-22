const calculator = {
     displayValue: 0,
     histroy: false,
   };
   
   function inputNumber(digit) {
     const { displayValue } = calculator;
     if(calculator.displayValue===0){
          calculator.displayValue = digit;     
     }else{
          calculator.displayValue = displayValue + digit;
     }
   }   

   function input(digit) {
     const display = document.querySelector('.calculator-screen-history');
     const { displayValue } = calculator;   
     const { histroy } = calculator;     
     if (digit==='='){
          if(calculator.histroy){
               display.value = '\r\n'+display.value ;
          }else{
               calculator.histroy=true;
          }
          display.value = calculator.displayValue+' = '+eval(displayValue) + display.value ;
          calculator.displayValue = eval(displayValue);
          updateDisplay();
     }else{
          calculator.displayValue = displayValue +' '+ digit +' ';
     }
   }

   function updateDisplay() {
     const display = document.querySelector('.calculator-screen');
     display.value = calculator.displayValue;
   }
   
   updateDisplay();
   
   const keys = document.querySelector('.calculator-keys');
   keys.addEventListener('click', (event) => {
     const { target } = event;
     if (!target.matches('button')) {
       return;
     }
   
     if (target.classList.contains('operator')) {
       console.log('operator', target.value);
       input(target.value);
       updateDisplay();
       return;
     }
   
     if (target.classList.contains('decimal')) {
       console.log('decimal', target.value);
       inputNumber(target.value);
       updateDisplay();
       return;
     }
   
     if (target.classList.contains('all-clear')) {
          console.log('All-Clear',calculator.displayValue);
          const display = document.querySelector('.calculator-screen-history');
          display.value = '';
          calculator.histroy=false;
          calculator.displayValue = '0';
          updateDisplay();
          return;
     }
     
     if (target.classList.contains('clear')) {
          console.log('Clear',calculator.displayValue);
          const back = document.querySelector('.calculator-screen');
          back.value = back.value.slice(0, -1);
          calculator.displayValue = back.value;
          updateDisplay();
          return;
     }
           
     console.log('digit', target.value);
     inputNumber(target.value);
     updateDisplay();
   });
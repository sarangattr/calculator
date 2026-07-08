const currDisplay = document.querySelector('.result');     //to display current number
const prevDisplay = document.querySelector('.preview');    //to display previous number
const numperBtn = document.querySelectorAll('.num');    //all number buttons
const clearScreenBtn = document.querySelector('#clearScreen'); //clear button
const operands = document.querySelectorAll('.operands'); //all operands + - * /
const equalBtn = document.querySelector('#equalTo');      //select equal btn
const delBtn = document.querySelector('#backSpace');      //select equal btn

var operation;  //to store the on going operation

//function for appending the input number 
function appendNumber(number) {
    //prevent from entering multiple dots 
    if(number === '.' && currDisplay.innerText.includes('.')) return;
    
    //prevent from entering multiple zeros
    if(number === '0' && currDisplay.innerText == '0') return;

    //prevent from 020
    // if(number != '0' && number !=  && currDisplay.innerText == '0') return;

    //to append the number to current display
    currDisplay.innerText += number;
}

//function for reseting dsplay screen
function clearScreen()
{
    currDisplay.innerText = '';
    prevDisplay.innerText = '';
}

// function for clicking the operand
function pressOperand(operand)
{
    if(currDisplay.innerText === '') return; //prevent typing operand multiple times
    
    compute(operand);                           //compute if any remaining operation pending this helps to use operand multiple times withot using equl key
    operation = operand;                        //store ongoing operation
    currDisplay.innerText += operand;           //add the operator symbol in display 
    prevDisplay.innerText = currDisplay.innerText; // in previous display show all value
    currDisplay.innerText = '';                  //clear current display so that new value can be entered
}

//function for computing the result
function compute(operand)
{
    var result;

    //convert previous and current value to number
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);
    // checking if number is valid
    if(isNaN(previousValue) || isNaN(currentValue)) return;

    //do operation according to operand
    switch(operation){
        case '+':
            result = previousValue+currentValue;
            break;
        case '-':
            result = previousValue-currentValue;
            break;
        case '*':
            result = previousValue*currentValue;
            break;
        case '/':
            result = previousValue/currentValue;
            break;
        case '%':
            result = previousValue%currentValue;
            break;
        default: break;
    }

    currDisplay.innerText = result;
}

//event for clicking the input number
numperBtn.forEach(num => {
    num.addEventListener('click',(event)=>{
        appendNumber(event.target.innerText);
    });
});

// event for reseting display screen 
clearScreenBtn.addEventListener('click',()=>{
    clearScreen();
});

//event for pressing the operand
operands.forEach(operand => {
    operand.addEventListener('click',()=>{  
        pressOperand(operand.innerText);
    });
});

// click event for equal button
equalBtn.addEventListener('click',()=>{
    compute();
    prevDisplay.innerText = '';
});

//click event for delete buton
delBtn.addEventListener('click',()=>{
    currDisplay.innerText = currDisplay.innerText.slice(0,-1);
});
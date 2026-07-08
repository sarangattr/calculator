const displayResult = document.getElementById('display');
const displayPreview = document.getElementById('preview');
const pressedNumber = document.querySelectorAll('.num');
const clearResultButton = document.getElementById('clearResult');
const pressPlusButton = document.getElementById('pressPlus');
const pressEqualtoButton = document.getElementById('pressEqualto');
const pressMinusButton = document.getElementById('pressMinus');

displayResult.addEventListener('input',(event) => {
    event.target.value = event.target.value.replace(/\D/g,'');
});


pressedNumber.forEach(num => {
    num.addEventListener('click', (event) => {
        var a = Number(event.target.dataset.value);
        displayResult.value = ((displayResult.value == 0) ? a : (displayResult.value*10 + a) );
    });
});

clearResultButton.addEventListener('click',function(event){
    displayResult.value = 0;
});

var output = 0;

pressPlusButton.addEventListener('click',(event) => {
    let a = Number(displayResult.value);
    output += a;
    displayResult.value = 0;
    displayPreview.value = output;

    pressEqualtoButton.addEventListener('click',(event) => {
        let a = Number(displayResult.value);
        displayResult.value = a + output;
        output = 0;
        displayPreview.value = null;
    });
});



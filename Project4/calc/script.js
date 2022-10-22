const buttonAc = document.querySelector("#section-buttonAc");
const buttonPlusMinus = document.querySelector("#section-buttonPlusMinus");
const buttonPercent = document.querySelector("#section-buttonPercent");
const buttonDevide = document.querySelector("#section-buttonDevide");
const buttonMultiply = document.querySelector("#section-buttonMultiply");
const buttonMinus = document.querySelector("#section-buttonMinus");
const buttonPlus = document.querySelector("#section-buttonPlus");
const buttonDot = document.querySelector("#section-buttonDot");
const buttonEquals = document.querySelector("#section-buttonEquals");
const buttonZero = document.querySelector("#section-buttonZero");
const buttonOne = document.querySelector("#section-buttonOne");
const buttonTwo = document.querySelector("#section-buttonTwo");
const buttonThree = document.querySelector("#section-buttonThree");
const buttonFour = document.querySelector("#section-buttonFour");
const buttonFive = document.querySelector("#section-buttonFive");
const buttonSix = document.querySelector("#section-buttonSix");
const buttonSeven = document.querySelector("#section-buttonSeven");
const buttonEight = document.querySelector("#section-buttonEight");
const buttonNine = document.querySelector("#section-buttonNine");
const resultOfTheNumbers = document.getElementById("result-field");
let operatorDevide = false;
let operatorMultiply = false;
let operatorPlus = false;
let operatorMinus = false;
let operatorDot = false;
let countNumbers = 0;

function calculatedTheNumbers(){
    const output = eval(resultOfTheNumbers.innerHTML);
    resultOfTheNumbers.innerHTML = output;
}

function valueOfTheButtons(userValue){
    resultOfTheNumbers.innerHTML += userValue;
}

function acButton(){
    resultOfTheNumbers.innerText = "";
}

function plusMinusButton(){
    const outputPlusMinus = eval(resultOfTheNumbers.innerHTML);
    resultOfTheNumbers.innerHTML = outputPlusMinus * -1;
}

function maxNumbersToCount(){
    if(countNumbers > 9){
        alert("Hello! I am an alert box!!");
    }
}

function percentButton(){
    const outputPercent = eval(resultOfTheNumbers.innerHTML);
    resultOfTheNumbers.innerHTML = outputPercent / 100;
}

buttonZero.addEventListener("click", () => {
    valueOfTheButtons(0);
    countNumbers++;
});

buttonOne.addEventListener("click", () => {
    valueOfTheButtons(1);
    countNumbers++;
});

buttonTwo.addEventListener("click", () => {
    valueOfTheButtons(2);
    countNumbers++;
});

buttonThree.addEventListener("click", () => {
    valueOfTheButtons(3);
    countNumbers++;
});

buttonFour.addEventListener("click", () => {
    valueOfTheButtons(4);
    countNumbers++;
});

buttonFive.addEventListener("click", () => {
    valueOfTheButtons(5);
    countNumbers++;
});

buttonSix.addEventListener("click", () => {
    valueOfTheButtons(6);
    countNumbers++;
});

buttonSeven.addEventListener("click", () => {
    valueOfTheButtons(7);
    countNumbers++;
});

buttonEight.addEventListener("click", () => {
    valueOfTheButtons(8);
    countNumbers++;
});

buttonNine.addEventListener("click", () => {
    valueOfTheButtons(9);
    countNumbers++;
});

buttonAc.addEventListener("click", () => {
    acButton();
});

buttonPlusMinus.addEventListener("click", () => {
    plusMinusButton();
});

buttonPercent.addEventListener("click", () => {
    percentButton();
});

buttonDevide.addEventListener("click", () => {
    if(operatorDevide){
        return;
    }
    valueOfTheButtons("/");
    operatorDevide = true;
});

buttonMultiply.addEventListener("click", () => {
    if(operatorMultiply){
        return;
    }
    valueOfTheButtons("*");
    operatorMultiply = true;
});

buttonMinus.addEventListener("click", () => {
    if(operatorMinus){
        return;
    }
    valueOfTheButtons("-");
    operatorMinus = true;
});

buttonPlus.addEventListener("click", () => {
    if(operatorPlus){
        return;
    }
    valueOfTheButtons("+");
    operatorPlus = true;
});

buttonDot.addEventListener("click", () => {
    if(operatorDot){
        return;
    }
    valueOfTheButtons(".");
    operatorDot = true;
});

buttonEquals.addEventListener("click", () => {
    calculatedTheNumbers();
    operatorDevide = false;
    operatorMultiply = false;
    operatorPlus = false;
    operatorMinus = false;
    operatorDot = false;
});

function getTextContent(){
  return document.getElementById('calcDisplay').textContent;
}

function setTextContent(something){
  console.log(something);
  document.getElementById('calcDisplay').textContent = something;
}

const add = function(a, b) {
	const solution = a + b;
  return solution;
};

const subtract = function(a, b) {
	const solution = a - b;
  return solution;
};

const multiply = function(a, b) {
	const solution = a * b;
  return solution;
};

const divide = function(a, b) {
	const solution = a / b;
  return solution;
};

function operate(num1, operator, num2) {
    console.log (num1, operator, num2);
    console.log('%o %o %o', num1, operator, num2)
    switch (operator) {
        case "+":
           return add(Number(num1),Number(num2));
            break;
        case "-":
            return subtract(Number(num1),Number(num2));
            break;
        case "*":
           return multiply(Number(num1),Number(num2));
            break;
        case "/":
           return divide(Number(num1),Number(num2));
            break;
        case "0":
            console.log('case0 reached');
            return getTextContent();;
            break;
        default:
            console.log('Erorr');
    }
};

function modifyDisplayNumber(num) {
    displayNumber = num;
    if ((document.getElementById('calcDisplay').textContent == '0') || (operatorBoolean == true)){
      document.getElementById('calcDisplay').textContent = displayNumber;
    } else {
      document.getElementById('calcDisplay').textContent += displayNumber;
    }
}

function clearDisplay(){
  displayNumber = '0';
  document.getElementById('calcDisplay').textContent = displayNumber;
}

function clearVariables(){
  firstNumber = 0;
  clickedOperator = "0";
}

let firstNumber;
let clickedOperator;

function storeVariable(operator){
  firstNumber = getTextContent();
  // console.log('operator: %o', operator);
  // console.log('operator', operator);
  switch (operator) {
    case "+":
      clickedOperator = "+";
      break;
    case "-":
      clickedOperator = "-";
      break;
    case "*":
      clickedOperator = "*";
      break;
    case "/":
      clickedOperator = "/";
      break;
    default:
      console.log('Error');
  }
}

let operatorBoolean;
let displayNumber = "0";
document.getElementById('calcDisplay').textContent = displayNumber;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function(){
    modifyDisplayNumber("1")
    operatorBoolean = false;
});
btn2.addEventListener('click', function(){
    modifyDisplayNumber("2")
    operatorBoolean = false;

});
btn3.addEventListener('click', function(){
  modifyDisplayNumber("3")
  operatorBoolean = false;

});
btn4.addEventListener('click', function(){
  modifyDisplayNumber("4")
  operatorBoolean = false;

});
btn5.addEventListener('click', function(){
  modifyDisplayNumber("5")
  operatorBoolean = false;

});
btn6.addEventListener('click', function(){
  modifyDisplayNumber("6")
  operatorBoolean = false;

});
btn7.addEventListener('click', function(){
  modifyDisplayNumber("7")
  operatorBoolean = false;

});
btn8.addEventListener('click', function(){
  modifyDisplayNumber("8")
  operatorBoolean = false;

});
btn9.addEventListener('click', function(){
  modifyDisplayNumber("9")
  operatorBoolean = false;

});
btn0.addEventListener('click', function(){
  modifyDisplayNumber("0")
  operatorBoolean = false;

});
btnclear.addEventListener('click', function(){
  clearDisplay();
  clearVariables();
});
btnplus.addEventListener('click', function(){
  operatorBoolean = true;
  if ((clickedOperator !== "0") && (typeof clickedOperator !== 'undefined')){
    const result = operate(firstNumber,clickedOperator,getTextContent())
    console.log(result);
    setTextContent(Math.round(result * 100) / 100);
    storeVariable('+')
  } else {
    storeVariable('+')
    clearDisplay();
  }
});
btnminus.addEventListener('click', function(){
  operatorBoolean = true;
  if ((clickedOperator !== "0") && (typeof clickedOperator !== 'undefined')){
    const result = operate(firstNumber,clickedOperator,getTextContent())
    console.log(result);
    setTextContent(Math.round(result * 100) / 100);
    storeVariable('-')
  } else {
    storeVariable('-')
    clearDisplay();
  }
});
btndivide.addEventListener('click', function(){
  operatorBoolean = true;
  if ((clickedOperator !== "0") && (typeof clickedOperator !== 'undefined')){
    const result = operate(firstNumber,clickedOperator,getTextContent())
    console.log(result);
    setTextContent(Math.round(result * 100) / 100);
    storeVariable('/')
  } else {
    storeVariable('/')
    clearDisplay();
  }
});
btntimes.addEventListener('click', function(){
  operatorBoolean = true;
  if ((clickedOperator !== "0") && (typeof clickedOperator !== 'undefined')){
    const result = operate(firstNumber,clickedOperator,getTextContent())
    console.log(result);
    setTextContent(Math.round(result * 100) / 100);
    storeVariable('*')
  } else {
    storeVariable('*')
    clearDisplay();
  }
});
btnequals.addEventListener('click', function(){
 const result = operate(firstNumber,clickedOperator,getTextContent())
 if (result !== 'undefined'){
  setTextContent(Math.round(result * 100) / 100);
 } else {
   console.log('it hit it hit');
   setTextContent('0');
 }
 console.log('result:',result);
})


// need to set up rounding and then style it and its done I think.
function getTextContent(){
  return document.getElementById('calcDisplay').textContent;
}

function setTextContent(something){
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
        default:
            console.log('Erorr');
    }
};

function modifyDisplayNumber(num) {
    displayNumber = num;
    //document.getElementById('calcDisplay').textContent = displayNumber; //this functions
    //displayNumber == '0' ? document.getElementById('calcDisplay').textContent = displayNumber : document.getElementById('calcDisplay').textContent.concat(num); //If display number is zero, replace it. If it's not 0, concatenate.
    if (document.getElementById('calcDisplay').textContent == '0'){
      document.getElementById('calcDisplay').textContent = displayNumber;
    } else {
      document.getElementById('calcDisplay').textContent += displayNumber;
    }
}

function clearDisplay(){
  displayNumber = '0';
  document.getElementById('calcDisplay').textContent = displayNumber;
}

let firstNumber;
let clickedOperator;

function storeVariable(operator){
  firstNumber = getTextContent();
  console.log('operator: %o', operator);
  console.log('operator', operator);
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

let displayNumber = "0";
document.getElementById('calcDisplay').textContent = displayNumber;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function(){
    modifyDisplayNumber("1")
});
btn2.addEventListener('click', function(){
    modifyDisplayNumber("2")
});
btn3.addEventListener('click', function(){
  modifyDisplayNumber("3")
});
btn4.addEventListener('click', function(){
  modifyDisplayNumber("4")
});
btn5.addEventListener('click', function(){
  modifyDisplayNumber("5")
});
btn6.addEventListener('click', function(){
  modifyDisplayNumber("6")
});
btn7.addEventListener('click', function(){
  modifyDisplayNumber("7")
});
btn8.addEventListener('click', function(){
  modifyDisplayNumber("8")
});
btn9.addEventListener('click', function(){
  modifyDisplayNumber("9")
});
btn0.addEventListener('click', function(){
  modifyDisplayNumber("0")
});
btnclear.addEventListener('click', function(){
  clearDisplay();
});
btnplus.addEventListener('click', function(){
  storeVariable('+')
  clearDisplay();
});
btnminus.addEventListener('click', function(){
  storeVariable('-')
  clearDisplay();
});
btndivide.addEventListener('click', function(){
  storeVariable('/')
  clearDisplay();
});
btntimes.addEventListener('click', function(){
  storeVariable('*')
  clearDisplay();
});
btnequals.addEventListener('click', function(){
 const result = operate(firstNumber,clickedOperator,getTextContent())
 setTextContent(result);
 console.log('result:',result);
})


// plug in the operator clicked as the operator in the function
// use current textContent for num2 in function
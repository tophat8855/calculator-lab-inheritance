// var buttons = document.getElementsByClassName("button")
var buttons =  document.querySelectorAll(".button");
var display =  document.getElementById("result_display_value");
var op_display =  document.getElementById("operator_display");
var input1;
var input2;
var operator;

function BaseOperation(leftOperand, rightOperand) {
  this.leftOperand = leftOperand;
  this.rightOperand = rightOperand;
}

BaseOperation.prototype.execute = function() {
  throw 'You need to override this method in a base class';
};

function Add(leftOperand, rightOperand) {
  this.leftOperand = leftOperand;
  this.rightOperand = rightOperand;
}

Add.protoype.execute = function () {
  return this.leftOperand + this.rightOperand;
};

function Subtract(leftOperand, rightOperand) {
  this.leftOperand = leftOperand;
  this.rightOperand = rightOperand;
}

Subtract.protoype.execute = function () {
  return this.leftOperand - this.rightOperand;
};

function Multiply(leftOperand, rightOperand) {
  this.leftOperand = leftOperand;
  this.rightOperand = rightOperand;
}

Multiply.protoype.execute = function () {
  return this.leftOperand * this.rightOperand;
};

function Divide(leftOperand, rightOperand) {
  this.leftOperand = leftOperand;
  this.rightOperand = rightOperand;
}

Divide.protoype.execute = function () {
  return this.leftOperand / this.rightOperand;
};

var stuff = Add.execute(1, 3);
console.log(stuff);

// for(var i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = function() {
//
//     if(this.innerText === "CLR") {
//       display.innerText = '';
//     }
//     else if(this.innerText === "+" || this.innerText === "-" || this.innerText === "/" || this.innerText === "*") {
//       op_display.innerText = this.innerText;
//       input1 = display.innerText;
//       operator = this.innerText;
//       display.innerText = '';
//     }
//     else if(this.innerText === "ENT") {
//       input2 = display.innerText;
//       display.innerText = '';
//       op_display.innerText = '';
//
//       input1 = parseInt(input1);
//       input2 = parseInt(input2);
//       var result;
//
//       if(operator === "*") {
//         result = input1 * input2;
//       } else if(operator === "+") {
//         result = input1 + input2;
//       } else if(operator === "/") {
//         result = input1 / input2;
//       } else if(operator === "-") {
//         result = input1 - input2;
//       }
//       display.innerText = result;
//     }
//     else{
//       console.log("YOU CLICKED " + this.innerText);
//       display.innerText += this.innerText;
//     }
//   };
// }

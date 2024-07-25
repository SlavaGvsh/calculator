

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
/////////////////////////////////
resultElement.textContent = 0;

let action = "+";

function calculate(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  // console.log('hello2 click');
  // if (action == "+") {
  //  const sum = Number(inpu1.value) + Number(inpu2.value);
  // resultElement.textContent = sum;
  // } else if (action == "-"){
  //  const sum = Number(inpu1.value) - Number(inpu2.value);
  // resultElement.textContent = sum;
  // }
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  }
}

function printResult(result) {
  // if (result < 0) {
  //   resultElement.style.color = "red";
  // } else {
  //   resultElement.style.color = "blue";
  // }
  // result < 0 ? resultElement.style.color = "red" : resultElement.style.color = "blue";
  resultElement.style.color = result < 0 ? "red" : "blue";
  resultElement.textContent = result;
}

function createInput() {
  input1.value = "";
  input2.value = "";
}
/*
 click event methods
submitBtn.onclick = function () {
   console.log('hello click');
}

submitBtn.onclick = () => {
   console.log('hello1 click');
}
*/
plusBtn.addEventListener("click", function () {
  action = "+";
});
minusBtn.addEventListener("click", function () {
  action = "-";
});
division.addEventListener("click", function () {
  action = "/";
});
multiplication.addEventListener("click", function () {
  action = "*";
});
submitBtn.addEventListener("click", function () {
  const result = calculate(input1, input2, action);
  printResult(result);
  createInput();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const result = calculate(input1, input2, action);
    printResult(result);
    createInput();
  } else if (event.key === "-") {
    action = "-";
  } else if (event.key === "+") {
    action = "+";
  } else if (event.key === "/") {
    action = "/";
  } else if (event.key === "*") {
    action = "*";
  }
});

let btnSum = document.querySelector(".calc__sum");
let btnSub = document.querySelector(".calc__sub");
let btnMult = document.querySelector(".calc__mult");
let btnDiv = document.querySelector(".calc__div");
let resultDiv = document.getElementById("result");

class Calc {
	static Sum(a, b) {
		return a + b;
	}
	static Sub(a, b) {
		return a - b;
	}
	static Mult(a, b) {
		return a * b;
	}
	static Div(a, b) {
		if (b === 0) {
			return "error";
		} else {
			return a / b;
		}
	}
}

function calculationSum() {
	let a = Number(
		document.querySelector('[name="number1"]').value
	); /* если вывожу эти переменные вверх за функции, то калькулятор всегда считает 0*/
	let b = Number(document.querySelector('[name="number2"]').value);
	let result = Calc.Sum(a, b);
	resultDiv.innerText = result;
}
function calculationSub() {
	let a = Number(document.querySelector('[name="number1"]').value);
	let b = Number(document.querySelector('[name="number2"]').value);
	let result = Calc.Sub(a, b);
	resultDiv.innerText = result;
}
function calculationMult() {
	let a = Number(document.querySelector('[name="number1"]').value);
	let b = Number(document.querySelector('[name="number2"]').value);
	let result = Calc.Mult(a, b);
	resultDiv.innerText = result;
}
function calculationDiv() {
	let a = Number(document.querySelector('[name="number1"]').value);
	let b = Number(document.querySelector('[name="number2"]').value);
	let result = Calc.Div(a, b);
	resultDiv.innerText = result;
}

btnSum.addEventListener("click", calculationSum);
btnSub.addEventListener("click", calculationSub);
btnMult.addEventListener("click", calculationMult);
btnDiv.addEventListener("click", calculationDiv);

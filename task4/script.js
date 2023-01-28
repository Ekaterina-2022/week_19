class Validator {
	isEmail(text) {
		return text.indexOf("@") !== -1 && text.indexOf(".") !== -1;
	}
	isDomain(text) {
		return text.indexOf(".ru") !== -1;
	}
	isDate(text) {
		let date = text.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
		return date === null ? false : true;
	}
	isPhone(text) {
		let phone = text.match(/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/);
		return phone === null ? false : true;
	}
}
let validator = new Validator();
console.log(validator.isEmail("alisa@mail.ru"));
console.log(validator.isDomain("itgirlschool.ru"));
console.log(validator.isDate("12.05.2021"));
console.log(validator.isPhone("+7(910)123-45-67"));

class ValidatorStatic {
	static isEmail(text) {
		return text.indexOf("@") !== -1 && text.indexOf(".") !== -1;
	}
	static isDomain(text) {
		return text.indexOf(".ru") !== -1;
	}
	static isDate(text) {
		let date = text.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
		return date === null ? false : true;
	}
	static isPhone(text) {
		let phone = text.match(/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/);
		return phone === null ? false : true;
	}
}

console.log(ValidatorStatic.isEmail("alisa@mail.ru"));
console.log(ValidatorStatic.isDomain("itgirlschool.ru"));
console.log(ValidatorStatic.isDate("12.05.2021"));
console.log(ValidatorStatic.isPhone("+7(910)123-45-67"));

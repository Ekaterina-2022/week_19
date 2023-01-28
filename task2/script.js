let name = document.querySelector("[name='petname']");
let userName = document.querySelector("[name='Ownername']");
let breed = document.querySelector(".breeds");
let gender = document.querySelector("[name='s']");
let food = document.querySelector("[name='foodtype']");
let btnSave = document.querySelector(".btn");

class Cat {
	constructor(name, userName, breed, gender, feed) {
		(this.name = name.value),
			(this.userName = userName.value),
			(this.breed = breed.value),
			(this.gender = gender.value),
			(this.food = food.value);
	}
}

btnSave.addEventListener("click", function () {
	let yourCat = new Cat(name, userName, breed, gender, food);
	console.log(yourCat);
});

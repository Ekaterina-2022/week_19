class Worker {
	constructor(name, surname, rate, days) {
		(this.name = name),
			(this.surname = surname),
			(this.rate = rate),
			(this.days = days),
			(this.getSalary = () => {
				return this.rate * this.days;
			});
	}
}
let worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker);
console.log(worker.getSalary());

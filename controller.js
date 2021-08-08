class Controller {
	constructor() {
		this.model = null;
		this.view = null;
	}
	calculator_options = {
		standard: () => new Calculator('standart'),
		science: () => new Calculator('science'),
	};
	buildCalculatorView = (calculatorType) => {
		console.log(calculatorType);
		this.model = new Calculator(calculatorType);
		this.view = new View(this.model.operations);

		this.view.bindEventClick(this.model.calc);
	};
	run = () => {
		this.view.render();
	};
}

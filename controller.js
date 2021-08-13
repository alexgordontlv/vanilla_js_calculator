class Controller extends Test {
	constructor() {
		super();
		this.model = null;
		this.view = null;
	}

	run = () => {
		this.model = new Calculator();
		this.view = new View(this.model.operations);
		this.view.bindEventClick(this.model.calculate);
		this.view.renderOptions(this.model.operations);
		this.view.render();
		this.currentOption = CALCULATOR_TYPE;

		const calculatorOptions = this.view.radioInputForm.radio;
		calculatorOptions[0].checked = true;
		calculatorOptions.forEach((option) => {
			option.addEventListener('click', () => {
				if (option.value === this.currentOption) return;
				this.currentOption = option.value;
				const newModel = new Calculator(option.value);
				this.view.renderOptions(newModel.operations);
			});
		});
	};
}

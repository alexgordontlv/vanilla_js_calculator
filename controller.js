class Controller {
	constructor() {
		this.model = null;
		this.view = null;
	}

	buildCalculatorView = (calculatorType) => {
		this.model = new Calculator(calculatorType);
		this.view = new View();
		this.view.bindEventClick(this.model.calc);
		this.view.renderOptions(this.model.operations)
		this.view.render()

		const calculatorOptions = this.view.radioInputForm.radio;
		calculatorOptions.forEach(option =>{
			option.addEventListener('click',()=>{
				const newModel = new Calculator(option.value);
				this.view.renderOptions(newModel.operations)
			})
		})
	};

	shutDown = () =>{
		this.view.distructure()
	}
	run = () => {
		this.view.render();
	};
}

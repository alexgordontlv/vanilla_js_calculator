class View {
	constructor(baseOperations) {
		this.calculatorTypes = Object.values(CALCULATOR_TYPE);
		this.submitButton = document.createElement('button');
		this.submitButton.textContent = 'Submit';
		this.inputA = document.createElement('input');
		this.select = document.createElement('select');
		this.inputB = document.createElement('input');
		this.calculator = document.createElement('div');
		this.result = document.createElement('div');
		this.calculatorFunctions = document.createElement('div');
		this.radioInputForm = document.createElement('form');
		this.radioInputForm.className = 'radiolist';
		this.oldOperations = [];
		this.baseOperations = baseOperations;
		this.flagOnce = true;
	}

	bindEventClick = (callbackHandler) => {
		this.submitButton.addEventListener('click', () => {
			const res = callbackHandler(this.inputA.value, this.inputB.value, this.select.value);
			this.result.innerHTML = res;
		});
	};

	renderOptions(newOperations) {
		console.log(newOperations.length, this.oldOperations.length);
		if (this.oldOperations.length !== this.baseOperations.length) {
			this.oldOperations.forEach((op) => {
				console.log('removing ' + this.select.lastChild.value);
				this.select.removeChild(this.select.lastChild);
			});
		}
		if (newOperations.length !== this.baseOperations.length || this.flagOnce) {
			this.flagOnce = false;
			newOperations.forEach((element) => {
				const opt = document.createElement('option');
				opt.value = element.name;
				opt.text = element.sign;
				this.select.add(opt, null);
			});
		}
		this.oldOperations = newOperations;
	}

	render() {
		this.calculatorTypes.forEach((type) => {
			const radioInput = document.createElement('input');
			radioInput.setAttribute('type', 'radio');
			radioInput.setAttribute('name', 'radio');
			radioInput.setAttribute('value', type);
			const radioLabel = document.createElement('label');
			radioLabel.innerHTML = type;
			this.radioInputForm.append(radioInput, radioLabel);
		});
		this.calculator.className = 'calculator';
		this.result.className = 'result';

		this.select.setAttribute('class', 'number-input');

		this.inputA.setAttribute('type', 'number');
		this.inputA.setAttribute('class', 'number-input');

		this.inputB.setAttribute('type', 'number');
		this.inputB.setAttribute('class', 'number-input');

		this.calculatorFunctions.append(this.inputA, this.select, this.inputB, this.submitButton, this.result);
		this.calculator.append(this.radioInputForm, this.calculatorFunctions);
		document.body.append(this.calculator);
	}
}

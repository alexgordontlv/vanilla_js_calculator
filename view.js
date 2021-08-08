class View {
	constructor(operations) {
		this.playEvent = new Event();
		this.submitButton = document.createElement('button');
		this.submitButton.textContent = 'Submit';
		this.select = document.createElement('select');
		operations.forEach((element) => {
			const opt = document.createElement('option');
			opt.value = element;
			opt.text = element;
			this.select.add(opt, null);
		});
		this.result = document.createElement('div');
		this.bindEventClick = (callbackHandler) => {
			this.submitButton.addEventListener('click', () => {
				const res = callbackHandler(20, 30, this.select.value);
				this.result.innerHTML = res;
			});
		};
	}

	render() {
		const calculator = document.createElement('div');
		calculator.className = 'calculator';

		this.result.className = 'result';
		const inputA = document.createElement('input');
		const inputB = document.createElement('input');

		inputA.setAttribute('type', 'number');
		inputB.setAttribute('type', 'number');

		calculator.append(inputA, this.select, inputB, this.submitButton, this.result);
		document.body.appendChild(calculator);
	}

	displayCalculation(res) {
		this.result.innerHTML = `${res}`;
	}
}

class Calculator {
	constructor(calculatorType) {
		this.operations = ['+', '-', '*', '/'];
		if(calculatorType === 'scientific'){
			this.operations = [...this.operations,'x^y','x-root-y']
		}
		else if(calculatorType === 'programmer'){
			this.operations = [...this.operations,'x-mod-y']
		}
		
	}

	mathOps = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
		'x^y': (a, b) => Math.pow(a,b),
		'x-root-y': (a, b) => Math.pow(b,1/a),
		'x-mod-y': (a, b) =>a % b
	};

	calc = (value1, value2, operation) => {
		return this.mathOps[operation](+value1, +value2);
	};
}

class Calculator {
	constructor(props) {
		this.operations = ['+', '-', '*', '/'];
	}

	math_ops = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
	};

	calc = (value1, value2, operation) => {
		console.log(this.math_ops[operation], this.operations);
		return this.math_ops[operation](value1, value2);
	};
}

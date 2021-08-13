const { SUM, SUBSTRACT, DEVIDE, MULTIPLY, MODULU, ROOT, POWER } = mathOps;
const { SCIENTIFIC, STANDARD, PROGRAMMER } = CALCULATOR_TYPE;

class Calculator {
	constructor(calculatorType) {
		console.log(mathOps);
		this.operations = [SUM, SUBSTRACT, MULTIPLY, DEVIDE];
		if (calculatorType === SCIENTIFIC) {
			this.operations = [POWER, ROOT];
		} else if (calculatorType === PROGRAMMER) {
			this.operations = [MODULU];
		}
	}

	calculate = (value1, value2, operation) => {
		console.log(value1, value2, operation);
		if ((value2 == 0 && operation === DEVIDE.name) || (value2 < 0 && operation === ROOT.name)) return mathOps.NOT_LEGAL_OPERATION;
		return mathOps[operation].exec(+value1, +value2);
	};
}

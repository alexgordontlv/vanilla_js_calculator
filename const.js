const mathOps = {
	SUM: {
		sign: '+',
		name: 'SUM',
		exec: (a, b) => a + b,
	},
	SUBSTRACT: {
		sign: '-',
		name: 'SUBSTRACT',
		exec: (a, b) => a - b,
	},
	MULTIPLY: {
		sign: '*',
		name: 'MULTIPLY',
		exec: (a, b) => a * b,
	},
	DEVIDE: {
		sign: '/',
		name: 'DEVIDE',
		exec: (a, b) => a / b,
	},
	POWER: {
		sign: 'a^b',
		name: 'POWER',
		exec: (a, b) => Math.pow(a, b),
	},
	ROOT: {
		sign: 'a-root-b',
		name: 'ROOT',
		exec: (a, b) => Math.pow(b, 1 / a),
	},
	MODULU: {
		sign: 'a%b',
		name: 'MODULU',
		exec: (a, b) => a % b,
	},
	NOT_LEGAL_OPERATION: 'NOT LEGAL OPERATION',
};

const CALCULATOR_TYPE = {
	STANDARD: 'standard',
	SCIENTIFIC: 'scientific',
	PROGRAMMER: 'programmer',
};

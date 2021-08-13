class Test {
	test({ testFunction, expected, params }) {
		console.log(...params);
		const result = testFunction(...params);
		if (result !== expected) {
			throw new Error(`In function ${testFunction.name} expected ${expected} , result: ${result}`);
		}
	}
}

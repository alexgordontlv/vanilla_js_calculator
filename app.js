const app = new Controller();

try {
	app.run();
	app.test({ testFunction: app.model.calculate, expected: mathOps.NOT_LEGAL_OPERATION, params: [5, 0, DEVIDE.name] });
	app.test({ testFunction: app.model.calculate, expected: 5, params: [5, '0', SUM.name] });
	app.test({ testFunction: app.model.calculate, expected: mathOps.NOT_LEGAL_OPERATION, params: [2, -4, ROOT.name] });

	//app.test({ testFunction: app.model.calculate, expected: 0.3, params: [0.1, 0.2, SUM.name] });
} catch (error) {
	console.error(error.message);
}

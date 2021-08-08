class Controller {
	constructor() {
		this.model = new Calculator();
		this.view = new View(this.model.operations);
		this.view.bindEventClick(this.model.calc);
	}

	run() {
		this.view.render();
	}
}

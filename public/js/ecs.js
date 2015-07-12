;(function () {
	var ESC = {
		Entity: Entity,
		Components: {},
		Constants: {},
		systems: {},
		$el: document
	};

	function Entity() {
		this.id = Date.now() + '-' + Entity.prototype._count;
		this.components = {};
		Entity.prototype._count++;
	}

	Entity.prototype._count = 0;

	Entity.prototype.addComponent = function (component) {
		if (component && component.name) {
			this.components[component.name] = component;
		}
		return this;
	};

	Entity.prototype.removeComponent = function (component) {
		var componentName = component;

		if (typeof component === 'function') {
			componentName = component.name;
		}

		delete this.components[componentName];
		return this;
	};

	window.ESC = ESC;
})();
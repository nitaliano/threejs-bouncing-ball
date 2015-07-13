var uuid = require('uuid'),
	entityCount = 0;

module.exports = Entity;

function Entity() {
	this.id = uuid.v4() + '-' + entityCount;
	this.components = {};
	entityCount++;
}

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
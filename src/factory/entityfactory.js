var Entity = require('../core/entity'),
	THREE = require('three.js');

var Components = {
	Apperance: require('../components/apperance'),
	Box: require('../components/box'),
	Light: require('../components/pointlight'),
	Moveable: require('../components/moveable'),
	Sphere: require('../components/sphere'),
	Velocity: require('../components/velocity')
};

module.exports = {
	ball: function (options) {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Sphere(options && options.sphere))
			.addComponent(new Components.Velocity())
	},

	floor: function (options) {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Box(options && options.box));
	},

	container: function (options) {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Box(options && options.box))
			.addComponent(new Components.Moveable())
	},

	pointLight: function () {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Light());
	}
};
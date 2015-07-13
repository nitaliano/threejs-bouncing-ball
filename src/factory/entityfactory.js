var Entity = require('../core/entity'),
	THREE = require('three.js');

var Components = {
	Apperance: require('../components/apperance'),
	Box: require('../components/box'),
	Light: require('../components/light'),
	Moveable: require('../components/moveable'),
	Sphere: require('../components/sphere'),
	Velocity: require('../components/velocity')
};

module.exports = {
	ball: function () {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Sphere())
			.addComponent(new Components.Velocity())
	},

	container: function () {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Box())
			.addComponent(new Components.Moveable())
	},

	light: function () {
		return new Entity()
			.addComponent(new Components.Apperance())
			.addComponent(new Components.Light());
	}
};
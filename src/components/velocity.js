var VelocityConstants = require('../constants/velocity'),
	util = require('util'),
	THREE = require('three.js');

module.exports = Velocity;

function Velocity() {
	Velocity.super_.call(
		this,
		Math.random() * VelocityConstants.BASE,
		Math.random() * VelocityConstants.BASE,
		Math.random() * VelocityConstants.BASE
	);
	this.name = 'velocity';
}

util.inherits(Velocity, THREE.Vector3);
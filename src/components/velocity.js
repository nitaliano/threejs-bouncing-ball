var VELOCITY = require('../constants/velocity'),
	util = require('util'),
	THREE = require('three.js');

module.exports = Velocity;

function Velocity() {
	Velocity.super_.call(
		this,
		Math.random() * VELOCITY,
		Math.random() * VELOCITY,
		Math.random() * VELOCITY
	);
	this.name = 'velocity';
}

util.inherits(Velocity, THREE.Vector3);
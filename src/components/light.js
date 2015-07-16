var THREE = require('three.js'),
	util = require('util');

module.exports = Light;

function Light() {
	Light.super_.call(this, 0xffffff);
	this.name = 'light';
	this.position.x = 0;
	this.position.y = 200;
	this.position.z = 0;
}

util.inherits(Light, THREE.PointLight);
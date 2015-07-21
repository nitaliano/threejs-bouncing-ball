var THREE = require('three.js'),
	util = require('util');

module.exports = Light;

function Light(lightColor) {
	Light.super_.call(this, lightColor || '#ffffff');
	this.name = 'pointLight';
}

util.inherits(Light, THREE.PointLight);
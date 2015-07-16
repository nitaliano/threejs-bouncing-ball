var THREE = require('three.js'),
	helpers = require('../helpers'),
	util = require('util'),
	Ratio = require('../constants/ratio'),
	SphereConstants = require('../constants/sphere');

module.exports = Sphere;

function Sphere() {
	Sphere.super_.call(
		this,
		new THREE.SphereGeometry(SphereConstants.RADIUS, 32, 32),
		new THREE.MeshPhongMaterial({
			color: helpers.genRandomHexColor(),
			specular:0x333333,
			shininess: 100
		})
	);
	this.name = 'sphere';
	this.position.set(0, -300 * Ratio.HEIGHT, 0);
}

util.inherits(Sphere, THREE.Mesh);
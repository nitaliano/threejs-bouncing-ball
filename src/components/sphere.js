var helpers = require('../helpers'),
	util = require('util'),
	THREE = require('three.js');

module.exports = Sphere;

var defaults = {
	widthSeg: 32,
	heightSeg: 32,
	color: '#ffffff'
};

function Sphere(options) {
	this.options = helpers.getOptions(defaults, options);

	Sphere.super_.call(
		this,
		new THREE.SphereGeometry(this.options.radius, this.options.widthSeg, this.options.heightSeg),
		new THREE.MeshPhongMaterial({ color: this.options.color, specular: 0x333333, shininess: 100 })
	);
	this.name = 'sphere';
}

util.inherits(Sphere, THREE.Mesh);
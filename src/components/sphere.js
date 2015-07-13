var THREE = require('three.js'),
	SphereConstants = require('../constants/sphere');

module.exports = Sphere;

function Sphere() {
	this.name = 'sphere';

	this.mesh = new THREE.Mesh(
		new THREE.SphereGeometry(SphereConstants.RADIUS, 32, 32),
		new THREE.MeshPhongMaterial({
			color: 0xff0000,
			specular:0x333333,
			shininess: 100
		})
	);
}
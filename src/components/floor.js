var THREE = require('three.js'),
	util = require('util'),
	Ratio = require('../constants/ratio'),
	FloorConstants = require('../constants/floor');

module.exports = Floor;

function Floor() {
	Floor.super_.call(
		this,
		new THREE.PlaneGeometry(FloorConstants.SIZE, FloorConstants.SIZE, 10, 10),
		new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
	);
	this.name = 'floor';
	this.position.x = 200 * Ratio.WIDTH;
	this.position.y = -600 * Ratio.HEIGHT;
	this.position.z = -800 * Ratio.HEIGHT;
	this.rotation.z = Math.PI;
	this.rotation.x = Math.PI / 2;
}

util.inherits(Floor, THREE.Mesh);
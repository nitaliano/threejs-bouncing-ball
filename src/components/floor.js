var THREE = require('three.js'),
	util = require('util'),
	FloorConstants = require('../constants/floor');

module.exports = Floor;

function Floor() {
	Floor.super_.call(
		this,
		new THREE.PlaneGeometry(FloorConstants.SIZE, FloorConstants.SIZE, 10, 10),
		new THREE.MeshBasicMaterial({ color: 0x444444, wireframe: true, side: THREE.DoubleSide })
	);
	this.name = 'floor';
	this.rotation.x = Math.PI / 2;
}

util.inherits(Floor, THREE.Mesh);
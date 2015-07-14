var THREE = require('three.js'),
	util = require('util');

module.exports = Floor;

function Floor() {
	Floor.super_.call(
		this,
		new THREE.PlaneGeometry(1000, 1000, 10, 10),
		new THREE.MeshBasicMaterial({ color: 0x444444, side: THREE.DoubleSide })
	);
	this.name = 'floor';
	this.rotation.x = Math.PI / 2;
}

util.inherits(Floor, THREE.Mesh);
var BoxConstants = require('../constants/box'),
	util = require('util'),
	THREE = require('three.js');

module.exports = Box;

function Box() {
	Box.super_.call(
		this,
		new THREE.BoxGeometry(BoxConstants.SIZE, BoxConstants.SIZE, BoxConstants.SIZE, 4, 4, 4),
		new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
	)
	this.name = 'box';
	this.position.set(0, 32, 0);
}

util.inherits(Box, THREE.Mesh);
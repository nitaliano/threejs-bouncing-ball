var BoxConstants = require('../constants/box'),
	util = require('util'),
	Ratio = require('../constants/ratio'),
	THREE = require('three.js');

module.exports = Box;

function Box() {
	Box.super_.call(
		this,
		new THREE.BoxGeometry(BoxConstants.SIZE, BoxConstants.SIZE, BoxConstants.SIZE, 2, 2, 2),
		new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
	);
	this.name = 'box';
	this.position.set(0, -300 * Ratio.HEIGHT, 0);
}

util.inherits(Box, THREE.Mesh);
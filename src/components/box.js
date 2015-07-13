var BoxConstants = require('../constants/box'),
	THREE = require('three.js');

module.exports = Box;

function Box() {
	this.name = 'box';

	this.mesh = new THREE.Mesh(
		new THREE.BoxGeometry(BoxConstants.SIZE, BoxConstants.SIZE, BoxConstants.SIZE, 4, 4, 4),
		new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
	);

	this.mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), BoxConstants.Y_ROTATION_ANGLE_RADS);
}
;(function () {
	var boxSize = ESC.Constants.Box.SIZE;

	ESC.Components.Box = function () {
		this.name = 'box';

		this.mesh = new THREE.Mesh(
			new THREE.BoxGeometry(boxSize, boxSize, boxSize, 4, 4, 4),
			new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
		);

		this.mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), ESC.Constants.Box.Y_ROTATION_ANGLE_RADS);
	};
})();
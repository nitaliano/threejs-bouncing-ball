;(function () {
	ESC.Components.Sphere = function () {
		this.name = 'sphere';

		this.mesh = new THREE.Mesh(
			new THREE.SphereGeometry(ESC.Constants.Sphere.RADIUS, 32, 32),
			new THREE.MeshPhongMaterial({
				color: 0xff0000,
				specular:0x333333,
				shininess: 100
			})
		);
	};
})();
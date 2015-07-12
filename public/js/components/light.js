;(function () {
	ESC.Components.Light = function () {
		this.name = 'light';
		this.mesh = new THREE.PointLight(0xffffff);
		this.mesh.position.x = 10;
		this.mesh.position.y = 50;
		this.mesh.position.z = 130;
	};
})();
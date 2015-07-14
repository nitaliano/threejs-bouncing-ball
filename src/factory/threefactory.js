var THREE = require('three.js');

module.exports = {
	renderer: function () {
		var renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0xcccccc, 1);
		document.getElementById('webgl-container').appendChild(renderer.domElement);
		return renderer;
	},

	clock: function () {
		return new THREE.Clock(true);
	},

	scene: function() {
		return new THREE.Scene();
	},

	camera: function () {
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
		camera.position.set(0, 150, 800);
		return camera;
	}
};
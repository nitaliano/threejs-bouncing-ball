var THREE = require('three.js');

module.exports = {
	renderer: function () {
		var renderer = new THREE.WebGLRenderer();
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
		var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 0, 300);
		return camera;
	}
};
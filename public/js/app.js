;(function () {
	ESC.Game = function () {
		var game = this;

		// soon to be systems
		var scene = new THREE.Scene();
		var renderer = createRenderer();
		var camera = createCamera();
		var clock = new THREE.Clock(true);

		var entities = [createContainer(), createBall(), createLight()];
		var systems = [ESC.systems.boxUserInput, ESC.systems.ballAnimation];

		ESC.Game.prototype.init = function () {
			entities.forEach(function (entity) {
				Object.keys(entity.components).forEach(function (componentName) {
					var component = entity.components[componentName];

					if (component && component.mesh) {
						scene.add(component.mesh);
					}
				});
			});
			requestAnimationFrame(game.render);
		};

		ESC.Game.prototype.render = function () {
			var dt = clock.getDelta();

			systems.forEach(function (system) {
				system(entities, dt);
			});

			renderer.render(scene, camera);
			requestAnimationFrame(game.render);
		};
	};

	function createRenderer() {
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0xcccccc, 1);
		document.getElementById('webgl-container').appendChild(renderer.domElement);
		return renderer;
	}

	function createCamera() {
		var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 0, 300);
		return camera;
	}

	function createLight() {
		return new ESC.Entity()
			.addComponent(new ESC.Components.Light());
	}

	function createContainer() {
		return new ESC.Entity()
			.addComponent(new ESC.Components.Box())
			.addComponent(new ESC.Components.Moveable());
	}

	function createBall() {
		return new ESC.Entity()
			.addComponent(new ESC.Components.Sphere())
			.addComponent(new ESC.Components.Velocity());
	}

	window.onload = function () {
		ESC.game = new ESC.Game();
		ESC.game.init();
	};
})();
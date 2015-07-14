var entityFactory = require('./factory/entityfactory'),
	THREE = require('three.js'),
	threeFactory = require('./factory/threefactory');

require('./styles/app.css');
function Game() {
	var game = this;
	var scene = threeFactory.scene();
	var bgScene = threeFactory.scene();
	var renderer = threeFactory.renderer();
	var camera = threeFactory.perspectiveCamera(0, 100, 900);
	var bgCamera = threeFactory.camera();
	var clock = threeFactory.clock();

	camera.lookAt(scene.position);

	var bgTexture = THREE.ImageUtils.loadTexture(require('./assets/bg.jpg'));

	var bgMesh = new THREE.Mesh(
		new THREE.PlaneGeometry(2, 2, 0),
		new THREE.MeshBasicMaterial({
			map: bgTexture
		})
	);

	bgMesh.material.depthTest = false;
	bgMesh.material.depthWrite = false;
	bgScene.add(bgCamera);
	bgScene.add(bgMesh);

	var entities = {
		floor: entityFactory.floor(),
		container: entityFactory.container(),
		light: entityFactory.light(),
		balls: []
	};

	for (var i = 0; i < 10; i++) {
		var ball = entityFactory.ball();
		entities.container.components.box.add(ball.components.sphere);
		entities.balls.push(ball);
	}

	var systems = [
		require('./systems/ballanimation'),
		require('./systems/userinput')
	];

	Game.prototype.init = function () {
		Object.keys(entities).forEach(function (entityName) {
			if (entities[entityName].length) {
				entities[entityName].forEach(game.addToScene);
			} else {
				game.addToScene(entities[entityName]);
			}
		});
		requestAnimationFrame(game.render);
	};

	Game.prototype.addToScene = function (entity) {
		if (entity.components.apperance) {
			Object.keys(entity.components).forEach(function (componentName) {
				var component = entity.components[componentName];

				if (component && component instanceof THREE.Mesh || component instanceof  THREE.Light) {
					scene.add(component);
				}
			});
		}
	};

	Game.prototype.render = function () {
		var dt = clock.getDelta();

		systems.forEach(function (system) {
			system(entities, dt);
		});

		renderer.autoClear = false;
		renderer.clear();
		renderer.render(bgScene, bgCamera);
		renderer.render(scene, camera);
		requestAnimationFrame(game.render);
	};
}

window.onload = function () {
	var game = new Game();
	game.init();
};
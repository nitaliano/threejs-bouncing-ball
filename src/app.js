var entityFactory = require('./factory/entityfactory'),
	helpers = require('./helpers'),
	RATIO = require('./constants/ratio'),
	THREE = require('three.js');
	require('./styles/app.css');

function Game() {
	var game = this;

	// base ratio
	var ratio = {};
	ratio.baseWidth = 1366;
	ratio.baseHeight = 649;
	ratio.width = window.innerWidth / ratio.baseWidth;
	ratio.height = window.innerHeight / ratio.baseHeight;
	ratio.aspect = window.innerWidth / innerHeight;

	// renderer
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl-container').appendChild(renderer.domElement);

	// main scene and clock
	var scene = new THREE.Scene();
	var clock = new THREE.Clock(true);

	// background camera, scene, and mesh
	var bgCamera = new THREE.Camera();
	var bgScene = new THREE.Scene();
	var bgTexture = THREE.ImageUtils.loadTexture(require('./assets/bg.jpg'));
	bgTexture.minFilter = THREE.LinearFilter;

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

	// scene camera
	var camera = new THREE.PerspectiveCamera(50, ratio.aspect, 0.1, 10000);
	camera.lookAt(scene.position);

	var entities = {};

	// Floor
	entities.floor = entityFactory.container({
		box: {
			width: 2400,
			height: 200,
			depth: 2400,
			visible: false
		}
	});
	entities.floor.components.box.scale.set(ratio.width, ratio.height, ratio.height);
	entities.floor.components.box.position.set(600 * ratio.width, -1200 * ratio.height, -4000 * ratio.height);

	// Container for bouncing balls
	entities.container = entityFactory.container({
		box: {
			wireframe: true,
			width: 200,
			height: 200,
			depth: 200,
			widthSeg: 2,
			heightSeg: 2,
			depthSeg: 2
		}
	});
	entities.container.components.box.scale.set(ratio.width, ratio.height, ratio.height);
	entities.container.components.box.position.set(500 * ratio.width, -1168 * ratio.height, -4000 * ratio.height);
	entities.floor.components.box.add(entities.container.components.box);

	// Point light
	entities.ceilingLight = entityFactory.pointLight();
	entities.ceilingLight.components.pointLight.position.set(-400 * ratio.width, 2000 * ratio.height, 0);

	// balls
	entities.balls = [];
	for (var i = 0; i < 10; i++) {
		var ball = entityFactory.ball({
			sphere: {
				radius: 16,
				color: helpers.genRandomHexColor()
			}
		});
		ball.components.sphere.scale.set(ratio.width, ratio.height, ratio.height);
		ball.components.sphere.position.set(500 * ratio.width, -1168 * ratio.height, -4000 * ratio.height);
		ball.components.sphere.geometry.computeBoundingBox();

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
		window.addEventListener('resize', game.onWindowResize);
		requestAnimationFrame(game.render);
	};

	Game.prototype.onWindowResize = function (e) {
		// update ratio
		ratio.aspect = window.innerWidth / window.innerHeight;
		ratio.width = window.innerWidth / ratio.baseWidth;
		ratio.height = window.innerHeight / ratio.baseHeight;

		camera.aspect = ratio.aspect;
		camera.position.z *= ratio.height;
		camera.updateProjectionMatrix();

		// resize all entities
		entities.floor.components.box.scale.set(ratio.width, ratio.height, ratio.height);
		entities.container.components.box.scale.set(ratio.width, ratio.height, ratio.height);
		entities.balls.forEach(function (ball) {
			ball.components.sphere.scale.set(ratio.width, ratio.height, ratio.height);
		});

		renderer.setSize(window.innerWidth, window.innerHeight);
	};

	Game.prototype.addToScene = function (entity) {
		if (entity.components.apperance) {
			Object.keys(entity.components).forEach(function (componentName) {
				var component = entity.components[componentName];

				if (component && (component instanceof THREE.Mesh || component instanceof THREE.Light)) {
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
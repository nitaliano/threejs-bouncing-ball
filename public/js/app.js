;(function () {
	var KEYS = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
	};

	var VELOCITY = 128;
	var BALL_RADIUS = 5;
	var BOX_SIZE = 64;

	var BOUNDS = {
		SMALL: -(BOX_SIZE / 2) + BALL_RADIUS * 2,
		LARGE: BOX_SIZE / 2 - BALL_RADIUS * 2
	};

	var entities = {};
	var components = {};

	function initScene() {
		// create components
		components.scene = new THREE.Scene();
		components.renderer = createRenderer();
		components.camera = createCamera();
		components.clock = new THREE.Clock(true);

		// create entities
		entities.box = createBox();
		entities.ball = createBall();
		entities.light = createLight();

		// set balls velocity
		entities.ball.velocity.x = Math.random() * VELOCITY;
		entities.ball.velocity.y = Math.random() * VELOCITY;
		entities.ball.velocity.z = Math.random() * VELOCITY;

		// add all entities to scene
		Object.keys(entities).forEach(function (entityKey) {
			components.scene.add(entities[entityKey]);
		});

		// init event listeners
		initEventListeners();

		// let us begin!
		requestAnimationFrame(render);
	}

	function render() {
		update();
		components.renderer.render(components.scene, components.camera);
		requestAnimationFrame(render);
	}

	function getUpdatedPosition(axis, dt, entity) {
		var position = entity.position[axis] + entity.velocity[axis] * dt;

		// make sure we're in bounds
		if (position <= BOUNDS.SMALL) {
			position += 2.5;
			entity.velocity[axis] = -entity.velocity[axis];
		}

		if (position >= BOUNDS.LARGE) {
			position -= 2.5;
			entity.velocity[axis] = -entity.velocity[axis];
		}

		return position;
	}

	function update() {
		var dt = components.clock.getDelta();
		entities.box.rotation.z += 0.01;
		entities.ball.position.x = getUpdatedPosition('x', dt, entities.ball);
		entities.ball.position.y = getUpdatedPosition('y', dt, entities.ball);
		entities.ball.position.z = getUpdatedPosition('z', dt, entities.ball);
	}

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
		var pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.x = 10;
		pointLight.position.y = 50;
		pointLight.position.z = 130;
		return pointLight;
	}

	function createBox() {
		var box = new THREE.Mesh(
			new THREE.BoxGeometry(BOX_SIZE, BOX_SIZE, BOX_SIZE, 4, 4, 4),
			new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
		);
		box.rotateOnAxis(new THREE.Vector3(0, 1, 0), -90);
		return box;
	}

	function createBall() {
		var ball = new THREE.Mesh(
			new THREE.SphereGeometry(BALL_RADIUS, 32, 32),
			new THREE.MeshPhongMaterial({
				color: 0xff0000,
				specular:0x333333,
				shininess: 100
			})
		);
		ball.velocity = { x: 0, y: 0, z: 0 };
		return ball;
	}

	function initEventListeners() {
		document.addEventListener('keydown', function (e) {
			switch (e.keyCode) {
				case KEYS.UP:
					entities.box.rotation.x += 0.1;
					break;
				case KEYS.DOWN:
					entities.box.rotation.x -= 0.1;
					break;
				case KEYS.LEFT:
					entities.box.rotation.y += 0.1;
					break;
				case KEYS.RIGHT:
					entities.box.rotation.y -= 0.1;
					break;
				default:
					break;
			}
		});
	}

	window.onload = initScene;
})();
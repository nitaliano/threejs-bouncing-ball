var entityFactory = require('./factory/entityfactory'),
	threeFactory = require('./factory/threefactory');

require('./styles/app.css');
function Game() {
	var game = this;
	var scene = threeFactory.scene();
	var renderer = threeFactory.renderer();
	var camera = threeFactory.camera();
	var clock = threeFactory.clock();

	var entities = [
		entityFactory.ball(),
		entityFactory.container(),
		entityFactory.light()
	];

	var systems = [
		require('./systems/userinput'),
		require('./systems/ballanimation')
	];

	Game.prototype.init = function () {
		entities.forEach(function (entity) {
			if (entity.components.apperance) {
				Object.keys(entity.components).forEach(function (componentName) {
					var component = entity.components[componentName];

					if (component && component.mesh) {
						scene.add(component.mesh);
					}
				});
			}
		});
		requestAnimationFrame(game.render);
	};

	Game.prototype.render = function () {
		var dt = clock.getDelta();

		systems.forEach(function (system) {
			system(entities, dt);
		});

		renderer.render(scene, camera);
		requestAnimationFrame(game.render);
	};
}

window.onload = function () {
	var game = new Game();
	game.init();
};
var Keys = require('../constants/keys'),
	boxPosition= { x: 0, z: 0};

module.exports = function (entities) {
	var entity = entities.container;

	if (entity.components.box && entity.components.moveable) {
		entity.components.box.position.x += boxPosition.x;
		entity.components.box.position.z += boxPosition.z;
	}

	if (entities.balls) {
		for (var i = 0; i < entities.balls.length; i++) {
			entities.balls[i].components.sphere.position.x += boxPosition.x;
			entities.balls[i].components.sphere.position.z += boxPosition.z;
		}
	}
};

document.addEventListener('keydown', function (e) {
	switch (e.keyCode) {
		case Keys.UP:
			boxPosition.z -= 1;
			break;
		case Keys.DOWN:
			boxPosition.z += 1;
			break;
		case Keys.LEFT:
			boxPosition.x -= 1;
			break;
		case Keys.RIGHT:
			boxPosition.x += 1;
			break;
		default:
			break;
	}
});

document.addEventListener('keyup', function (e) {
	boxPosition.x = 0;
	boxPosition.z = 0;
});
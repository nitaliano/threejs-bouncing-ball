var Keys = require('../constants/keys'),
	Floor = require('../constants/floor'),
	boxPosition= { x: 0, z: 0};

module.exports = function (entities) {
	var entity = entities.container;

	if (entity.components.box && entity.components.moveable) {
		var dx = entity.components.box.position.x + boxPosition.x;
		var dz = entity.components.box.position.z + boxPosition.z;

		if (isInBounds(dx, dz)) {
			entity.components.box.position.x = dx;
			entity.components.box.position.z = dz;

			if (entities.balls) {
				for (var i = 0; i < entities.balls.length; i++) {
					entities.balls[i].components.sphere.position.x += boxPosition.x;
					entities.balls[i].components.sphere.position.z += boxPosition.z;
				}
			}
		}
	}
};

function isInBounds(dx, dz) {
	if ((dx < Floor.BOUNDS.X_SMALL || dz < Floor.BOUNDS.Z_SMALL) || (dx > Floor.BOUNDS.X_LARGE || dz > Floor.BOUNDS.Z_LARGE)) {
		return false;
	}
	return true;
}

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
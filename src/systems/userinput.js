var Keys = require('../constants/keys'),
	boxRotation = { x: 0, y: 0};

module.exports = function (entities) {
	entities.forEach(function (entity) {
		if (entity.components.box && entity.components.moveable) {
			entity.components.box.mesh.rotation.x = boxRotation.x;
			entity.components.box.mesh.rotation.y = boxRotation.y;
		}
	});
};

document.addEventListener('keydown', function (e) {
	switch (e.keyCode) {
		case Keys.UP:
			boxRotation.x -= 0.1;
			break;
		case Keys.DOWN:
			boxRotation.x += 0.1;
			break;
		case Keys.LEFT:
			boxRotation.y -= 0.1;
			break;
		case Keys.RIGHT:
			boxRotation.y += 0.1;
			break;
		default:
			break;
	}
});
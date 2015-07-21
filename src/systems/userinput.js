var Keys = require('../constants/keys'),
	THREE = require('three.js');

var boxPosition= { x: 0, z: 0};
var floorBoundingBox, bBox;

module.exports = function (entities) {
	if (!floorBoundingBox) {
		floorBoundingBox = new THREE.Box3().setFromObject(entities.floor.components.box);
	}

	if (entities.container.components.moveable && isInBounds(entities.container.components.box)) {
		entities.container.components.box.position.x = entities.container.components.box.position.x + boxPosition.x;
		entities.container.components.box.position.z = entities.container.components.box.position.z + boxPosition.z;

		if (entities.balls) {
			for (var i = 0; i < entities.balls.length; i++) {
				entities.balls[i].components.sphere.position.x += boxPosition.x;
				entities.balls[i].components.sphere.position.z += boxPosition.z;
			}
		}
	}
};

function isInBounds(box) {
	bBox = bBox ? bBox.setFromObject(box) : new THREE.Box3().setFromObject(box);

	if (bBox.min.x + boxPosition.x < floorBoundingBox.min.x || bBox.min.z + boxPosition.z < floorBoundingBox.min.z) {
		return false;
	}

	if (bBox.max.x + boxPosition.x > floorBoundingBox.max.x || bBox.max.z + boxPosition.z > floorBoundingBox.max.z) {
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
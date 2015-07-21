var THREE = require('three.js');

var axes = ['x', 'y', 'z'], cBox;

module.exports = function (entities, dt) {
	// containers bounding box
	cBox = cBox ? cBox.setFromObject(entities.container.components.box)
		: new THREE.Box3().setFromObject(entities.container.components.box);

	entities.balls.forEach(function (entity) {
		if (entity.components.velocity) {
			updateBallPosition(entity, dt);
		}
	});
};

function updateBallPosition(entity, dt) {
	entity.components.sphere.position.add(entity.components.velocity.clone().multiplyScalar(dt / 2));

	// collision check + response
	collisionCheck(entity.components.sphere.geometry, entity.components.sphere.position, entity.components.velocity);
}

function collisionCheck(geometry, position, velocity) {
	axes.forEach(function (axis) {
		if (position[axis] + geometry.boundingBox.min.x < cBox.min[axis]) {
			position[axis] += 1;
			velocity[axis] = -velocity[axis];
		}

		if (position[axis] + geometry.boundingBox.max.x > cBox.max[axis]) {
			position[axis] -= 1;
			velocity[axis] = -velocity[axis];
		}
	});
}
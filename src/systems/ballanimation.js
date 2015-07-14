var Bounds = require('../constants/box').BOUNDS;

module.exports = function (entities, dt) {
	entities.balls.forEach(function (entity) {
		if (entity.components.sphere && entity.components.velocity) {
			entity.components.sphere.position.x = getUpdatedBallPosition('x', dt, entity, entities.container);
			entity.components.sphere.position.y = getUpdatedBallPosition('y', dt, entity, entities.container);
			entity.components.sphere.position.z = getUpdatedBallPosition('z', dt, entity, entities.container);
		}
	});
};

function getUpdatedBallPosition(axis, dt, entity, parentEntity) {
	var isY = axis === 'y';
	var position = entity.components.sphere.position[axis] + entity.components.velocity[axis] * dt / 2;

	if ((isY && position < Bounds.Y_SMALL) || (position < Bounds.XZ_SMALL + parentEntity.components.box.position[axis])) {
		position += 1;
		entity.components.velocity[axis] = -entity.components.velocity[axis];
	} else if ((isY && position > Bounds.Y_LARGE) || (position > Bounds.XZ_LARGE + parentEntity.components.box.position[axis])) {
		position -= 1;
		entity.components.velocity[axis] = -entity.components.velocity[axis];
	}

	return position;
}
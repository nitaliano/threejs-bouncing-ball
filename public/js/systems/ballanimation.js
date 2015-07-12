;(function () {
	function getUpdatedBallPosition(axis, dt, entity) {
		var position = entity.components.sphere.mesh.position[axis] + entity.components.velocity[axis] * dt;

		// make sure we're in bounds
		if (position <= ESC.Constants.Bounds.SMALL) {
			position += 2.5;
			entity.components.velocity[axis] = -entity.components.velocity[axis];
		}

		if (position >= ESC.Constants.Bounds.LARGE) {
			position -= 2.5;
			entity.components.velocity[axis] = -entity.components.velocity[axis];
		}

		return position;
	}

	ESC.systems.ballAnimation = function (entities, dt) {
		entities.forEach(function (entity) {
			if (entity.components.sphere && entity.components.velocity) {
				//entities.box.rotation.z += 0.01;
				entity.components.sphere.mesh.position.x = getUpdatedBallPosition('x', dt, entity);
				entity.components.sphere.mesh.position.y = getUpdatedBallPosition('y', dt, entity);
				entity.components.sphere.mesh.position.z = getUpdatedBallPosition('z', dt, entity);
			}
		});
	};
})();
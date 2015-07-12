;(function () {
	var boxRotation = {
		x: 0,
		y: 0
	};

	ESC.$el.addEventListener('keydown', function (e) {
		switch (e.keyCode) {
			case ESC.Constants.Keys.UP:
				boxRotation.x -= 0.1;
				break;
			case ESC.Constants.Keys.DOWN:
				boxRotation.x += 0.1;
				break;
			case ESC.Constants.Keys.LEFT:
				boxRotation.y -= 0.1;
				break;
			case ESC.Constants.Keys.RIGHT:
				boxRotation.y += 0.1;
				break;
			default:
				break;
		}
	});

	ESC.systems.boxUserInput = function (entities) {
		entities.forEach(function (entity) {
			if (entity.components.moveable) {
				entity.components.box.mesh.rotation.x = boxRotation.x;
				entity.components.box.mesh.rotation.y = boxRotation.y;
			}
		});
	};
})();
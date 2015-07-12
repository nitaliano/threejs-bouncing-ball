;(function () {
	var boxSize = ESC.Constants.Box.SIZE;
	var sphereRadius = ESC.Constants.Sphere.RADIUS;

	ESC.Constants.Bounds = {
		SMALL: -(boxSize / 2) + sphereRadius * 2,
		LARGE: boxSize / 2 - sphereRadius * 2
	};
})();
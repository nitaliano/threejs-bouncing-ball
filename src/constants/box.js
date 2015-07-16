var Sphere = require('./sphere'),
	Ratio = require('./ratio');

var Box = {};
Box.SIZE = 64 * Ratio.WIDTH;
Box.BOUNDS = {
	XZ_SMALL: (-Box.SIZE / 2 + Sphere.RADIUS) * Ratio.WIDTH,
	XZ_LARGE: (Box.SIZE / 2 - Sphere.RADIUS) * Ratio.WIDTH,
	Y_SMALL: -450 * Ratio.HEIGHT,
	Y_LARGE: (-Box.SIZE / 2 * 2 - Sphere.RADIUS) * Ratio.HEIGHT
};

module.exports = Box;
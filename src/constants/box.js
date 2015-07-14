var Sphere = require('./sphere');

var Box = {};
Box.SIZE = 64;
Box.BOUNDS = {
	XZ_SMALL: -Box.SIZE / 2 + Sphere.RADIUS,
	XZ_LARGE: Box.SIZE / 2 - Sphere.RADIUS,
	Y_SMALL: 0,
	Y_LARGE: (Box.SIZE / 2) * 2 - Sphere.RADIUS
};

module.exports = Box;
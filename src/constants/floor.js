var Box = require('./box'),
	Ratio = require('./ratio');

var Floor = {};
Floor.SIZE = 800 * Ratio.WIDTH;
Floor.BOUNDS = {
	X_SMALL: -92 * Ratio.WIDTH,
	X_LARGE: 340 * Ratio.WIDTH,
	Z_SMALL: -400 * Ratio.WIDTH,
	Z_LARGE: 64 * Ratio.WIDTH
};

module.exports = Floor;
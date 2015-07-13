var BoxConstants = require('./box'),
	SphereConstants = require('./sphere');

module.exports = {
	SMALL: -BoxConstants.SIZE / 2 + SphereConstants.RADIUS * 2,
	LARGE: BoxConstants.SIZE / 2 - SphereConstants.RADIUS * 2
};
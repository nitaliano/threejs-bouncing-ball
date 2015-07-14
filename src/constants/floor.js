var Box = require('./box');

var Floor = {};

Floor.SIZE = 1200;
Floor.BOUNDS = {
	LARGE: Floor.SIZE / 2 - Box.SIZE / 2,
	SMALL: -Floor.SIZE / 2 + Box.SIZE / 2
};

module.exports = Floor;
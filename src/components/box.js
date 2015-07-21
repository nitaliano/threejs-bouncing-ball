var util = require('util'),
	helpers = require('../helpers'),
	THREE = require('three.js');

module.exports = Box;

var defaults = {
	widthSeg: 1,
	heightSeg: 1,
	depthSeg: 1,
	color: '#ffffff',
	wireframe: false,
	visible: true
};

function Box(options) {
	this.options = helpers.getOptions(defaults, options);

	Box.super_.call(
		this,
		new THREE.BoxGeometry(
			this.options.width,
			this.options.height,
			this.options.depth,
			this.options.widthSeg,
			this.options.heightSeg,
			this.options.depthSeg),
		new THREE.MeshBasicMaterial({
			color: this.options.color,
			wireframe: this.options.wireframe,
			visible: this.options.visible
		})
	);

	this.name = 'box';
}

util.inherits(Box, THREE.Mesh);
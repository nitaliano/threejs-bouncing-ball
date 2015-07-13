var VelocityConstants = require('../constants/velocity');

module.exports = Velocity;

function Velocity() {
	this.name = 'velocity';
	this.x = Math.random() * VelocityConstants.BASE;
	this.y = Math.random() * VelocityConstants.BASE;
	this.z = Math.random() * VelocityConstants.BASE;
}
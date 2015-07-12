;(function () {
	ESC.Components.Velocity = function () {
		this.name = 'velocity';
		this.x = Math.random() * ESC.Constants.Velocity;
		this.y = Math.random() * ESC.Constants.Velocity;
		this.z = Math.random() * ESC.Constants.Velocity;
	};
})();
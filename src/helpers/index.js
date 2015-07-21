var _ = require('lodash');

module.exports = {
	genRandomHexColor: function () {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	},

	getOptions: function (defaults, options) {
		return !options ? defaults : _.assign({}, defaults, options);
	}
};
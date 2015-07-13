var gulp = require('gulp'),
	del = require('del'),
	webpack = require('webpack'),
	runSequence = require('run-sequence'),
	watch = false;

gulp.task('clean', function () {
	del(['build/*']);
});

gulp.task('bundle', function (cb) {
	var bundler = webpack(require('./webpack.config.js'));

	if (watch) {
		bundler.watch(200, bundle(cb));
	} else {
		bundler.run(bundle(cb));
	}
});

gulp.task('build', function (cb) {
	runSequence(['clean', 'bundle'], cb);
});

gulp.task('build:watch', function (cb) {
	watch = true;
	runSequence(['build'], cb);
});

function bundle(cb) {
	return function (err, stats) {
		if (err) {
			console.log(err);
			return cb();
		}
		console.log(stats.toString());
		return cb();
	}
}
var gulp = require('gulp');
var merge = require('merge-stream');

var paths = {
	bootstrapjs: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
	bootstrapjs_map: 'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
	jquery: 'node_modules/jquery/dist/jquery.min.js',
	jquery_map: 'node_modules/jquery/dist/jquery.min.map',
	popperjs: 'node_modules/popper.js/dist/umd/popper.min.js',
	popperjs_map: 'node_modules/popper.js/dist/umd/popper.min.js.map',
	vendor: 'assets/vendor/'
};

gulp.task('assets', function() {
	var bootstrap = gulp.src(paths.bootstrapjs).pipe(gulp.dest(paths.vendor));
	var bootstrap_map = gulp.src(paths.bootstrapjs_map).pipe(gulp.dest(paths.vendor));
	var jquery = gulp.src(paths.jquery).pipe(gulp.dest(paths.vendor));
	var jquery_map = gulp.src(paths.jquery_map).pipe(gulp.dest(paths.vendor));
	var popper = gulp.src(paths.popperjs).pipe(gulp.dest(paths.vendor));
	var popper_map = gulp.src(paths.popperjs_map).pipe(gulp.dest(paths.vendor));

	return merge(bootstrap, bootstrap_map, jquery, jquery_map, popper, popper_map);
});
const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('scripts',['modernizr'] ,() => {
	return gulp.src('app/assets/scripts/app.js')
	.pipe(webpack(require('../webpack.config.js')))
	.pipe(gulp.dest('app/dist/'));

})
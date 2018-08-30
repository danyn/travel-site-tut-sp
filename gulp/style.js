const gulp = require('gulp');
const postCSS = require('gulp-postcss')
const postCssImport = require('postcss-import')
const postCssMixins = require('postcss-mixins')
const postCssVars = require('postcss-simple-vars')
const postCssNested = require('postcss-nested')
const postCssPrefixer = require('autoprefixer')
const postCssColorAdjust = require('postcss-color-function')

gulp.task('css', () => {
	return gulp.src('./app/styles/style.css')
	.pipe(postCSS([postCssImport, postCssPrefixer, postCssMixins , postCssVars, postCssNested, postCssColorAdjust]))
	.on('error', function (err) { 
		this.emit('end') 
		console.log(err.toString())
	})
	.pipe(gulp.dest('./app/assets/styles/'))
})
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	rev = require('gulp-rev'),
	browserSync = require('browser-sync')


const src = './app';
const srcImages = `${src}/assets/images`;


const dist = './dist';
const distImg = `${dist}/assets/images`;

const docs = './docs'

gulp.task('viewDocs', () => {

	browserSync.init({
		notify: false,
		server:{
			baseDir: docs.slice(2)
		}
	})
});


gulp.task('viewDist', () => {

	browserSync.init({
		notify: false,
		server:{
			baseDir: dist.slice(2)
		}
	})
});

gulp.task('emptyDist', function() {
	del(dist);
});

gulp.task('images', ['emptyDist', 'sprite'],function() {
	return gulp.src([`${srcImages}/**/*`, `!${srcImages}/icons`, `!${srcImages}/icons/**/*`])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest(distImg))
});

gulp.task('usemin',['emptyDist', 'css', 'scripts'] ,function(){
	gulp.src(`${src}/index.html`)
	.pipe(usemin({
		css:[function() {return rev()}, function() {return cssnano()}],
		js:[function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest(dist))
});


gulp.task('build', ['emptyDist','images', 'usemin']);
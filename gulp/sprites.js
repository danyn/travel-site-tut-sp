const gulp = require('gulp'),
			svgSprite = require('gulp-svg-sprite'),
			rename = require('gulp-rename'),
			del = require('del'),
			svg2png = require('gulp-svg2png');

const src = './app/assets/images';
const svgSource = `${src}/sprite/`;
const svgToCompile = `${src}/icons/**/*.svg`;

const compiled = './app/compiled/sprite';
const compiledSrc = `${compiled}/css`


const config = {
	shape:{
		spacing:{
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgPng: function(){
					return function(sprite, render){
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
					} 
				}
			}
		}
	};

gulp.task('clean', () => {
	return del([compiled, svgSource])
});

gulp.task('removeIntermediateFiles', ['moveSprite', 'moveSpriteCss'] ,() => {
	return del([compiled])
} )

gulp.task('createSprite', ['clean'], () => {
	return 	gulp.src(svgToCompile)
	.pipe(svgSprite(config))
	.pipe(gulp.dest(compiled))

});

gulp.task('createPngCopy',['createSprite'] , ()=>{
	return gulp.src(`${compiledSrc}/*.svg`)
	.pipe(svg2png())
	.pipe(gulp.dest(compiledSrc))
});

gulp.task('moveSprite',['createPngCopy', 'createSprite'], () => {
	return gulp.src(`${compiledSrc}/*.{svg,png}`)
	.pipe(gulp.dest(svgSource))
});

gulp.task('moveSpriteCss',['createSprite'] , () => {
	return gulp.src(`${compiledSrc}/sprite.css`)
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/styles/modules/'))
});

gulp.task('sprite', ['createSprite', 'createPngCopy' ,'moveSpriteCss', 'moveSprite' , 'removeIntermediateFiles'] );

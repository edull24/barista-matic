'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('scripts', ['clean-scripts'], function() {

	return gulp.src([
			'./src/js/vendor/jquery-2.1.4.js',
			'./node_modules/lodash/index.js',
			'./src/js/app.js',
			'./src/js/data.js',
			'./src/js/ingredientHelpers.js',
			'./src/js/drinkHelpers.js',
			'./src/js/globalDom.js',
			'./src/js/ingredients.js',
			'./src/js/drinks.js'
		])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.header('/*! Barista-Matic - ' + (new Date().toString()) + ' */\n'))
		.pipe(plugins.uglify({
			preserveComments: 'some'
		}))
		.pipe(plugins.rev())
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(plugins.rev.manifest())
		.pipe(gulp.dest('./dist/js'));

});

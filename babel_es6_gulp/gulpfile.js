'use strict'
// Require gulp
const gulp = require('gulp');
// Require gulp-babel
const babel = require('gulp-babel');
// Require browser-sync
const browserSync = require('browser-sync');

// Create an es6 task
gulp.task('es6', () => {
	// Return gulp.src with the src set to our src folder
	// we return here do that we indicate to gulp that this task is async
	return gulp.src('src/js/**/*.js')
		// We pipe the source into babel
		.pipe(babel({
			// We need to tell babel to use the babel-preset-es2015
			presets: ['es2015']
		}))
		// We then pipe that into gulp.dest to set a final destination
		// In this case build and js folders
		.pipe(gulp.dest('build/js'));
});

//Create a browserSync task
gulp.task('browserSync', () => { 
    browserSync({ 
        server: { 
            baseDir: 'src' 
        },
        notify: false 
    });
});

//Create a task for html pages
gulp.task('pages', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
});

//Create tasks for css files
gulp.task('css', () => {
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('build/css'))
});

// Create a default gulp task, this lets us type gulp into the terminal
// The ['es6'] tells gulp what task or tasks to run right away. 
gulp.task('default', ['browserSync', 'es6', 'pages', 'css'],() => {
	// Tell gulp to watch for file changes on src
	// run the es6 task when it changes!
	gulp.watch('src/js/**/*.js',['es6']);
	gulp.watch('src/css/**/*.css', ['css']);
	gulp.watch('src/*.html', ['pages']);
});



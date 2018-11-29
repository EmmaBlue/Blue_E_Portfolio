// import all of the required plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

//Start writing tasks
//serve the page with browsersync
gulp.task('serve', function() {
  browserSync.init({

      server: {

        baseDir: './', 
        index: 'index.html'
      }

  });

});

// Compile Sass
gulp.task('sass', function () {
  //define gulp-sass task
  // in return gulp.src('./sass/**/*.scss'), /**/ means every folder, /* means every file */
  return gulp.src('./sass/**/*.scss')
  /* on error we want it to log in terminal so we can view it */
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

//Watch SASS files for changes, compile
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

//Minimize images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
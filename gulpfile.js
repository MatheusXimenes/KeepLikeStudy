'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
    'sass': './src/scss/**/*.scss',
    'css': './src/css'
};

gulp.task('sass', function () {
  return gulp.src(path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(path.sass, ['sass']);
});

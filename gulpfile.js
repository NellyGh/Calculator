"use strict";

const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass')(sass);
const cleanCSS = require('gulp-clean-css');



// Task 1 
function buildStyles() {
    return gulp.src('./sass/**/*.scss')
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(cleanCSS({level: 2}))
      .pipe(gulp.dest('./css'));
}

gulp.task('buildStyles', buildStyles);







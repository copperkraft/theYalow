/**
 * Created by Владимир on 23.05.2017.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('less', function(){
    return gulp.src('less/imports.less')
        .pipe(less()) // Converts LESS to CSS with gulp-sass
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'))
});
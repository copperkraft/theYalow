/**
 * Created by Владимир on 23.05.2017.
 */
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('less', function(){
    return gulp.src('less/imports.less')
        .pipe(less()) // Converts LESS to CSS with gulp-sass
        .pipe(gulp.dest('css/style.css'))
});
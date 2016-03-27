﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

var bower = require('gulp-bower');

gulp.task('bower', function () {
    return bower()
           .pipe(gulp.dest('wwwroot/lib/'))
});
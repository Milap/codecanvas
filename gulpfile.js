var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

gulp.task('serve', function () {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", gulp.series('buildCSS'));
    gulp.watch("app/scripts/*.js", gulp.series('buildJS'));
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

gulp.task('buildCSS', function () {

    return gulp.src(['app/scss/*.scss']).
    pipe(sass({
        includePaths: ['node_modules']
    })).
    pipe(concat('main.css')).
    pipe(cleanCSS()).
    pipe(gulp.dest("app/dest/styles")).
    pipe(browserSync.stream());

});

gulp.task('buildJS', function () {

    return gulp.src("app/scripts/*.js").
    pipe(concat('script.js')).
    // pipe(minify()).
    pipe(gulp.dest("app/dest/script")).
    pipe(browserSync.stream());

});

gulp.task('default', gulp.series('buildCSS', 'buildJS', 'serve'));
var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('js', function() {
    return gulp.src(['./app/js/**/*.js', './app/src/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./bin/'));
});

gulp.task('watch', function () {
    gulp.start('compile');
    gulp.watch(['./app/js/**/*.js', './app/src/**/*.js'], ['js']);
});

gulp.task('compile', function () {
    // gulp.start('bundle:js');
    // gulp.start('bundle:css');
    // gulp.start('less');
    gulp.start('js');
    // gulp.start('html');
});

gulp.task('bundle:js', function() {
    return gulp.src([
            './node_modules/angular/angular.js',
             './node_modules/angular-ui-router/release/angular-ui-router.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./vendor/'));
});

gulp.task('build', ['bundle:js']);

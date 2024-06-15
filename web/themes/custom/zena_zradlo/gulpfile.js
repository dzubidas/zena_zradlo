// Load Gulp
var gulp = require('gulp'),

// CSS relatedplugins
  sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  return gulp.src('./js/src/**/*.js')
    .pipe(gulp.dest('./js'));
});

gulp.task('serve', gulp.series('sass', 'js', function() {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./js/src/**/*.js', gulp.series('js'));
}));

gulp.task('default', gulp.series('serve'));

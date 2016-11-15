const gulp = require('gulp')
const jasmine = require('gulp-jasmine')

gulp.task('jasmine', function () {
  return gulp
    .src('test/**/*Spec.js')
    .pipe(jasmine({verbose: true}))
})

gulp.task('test', ['jasmine', 'lint'])

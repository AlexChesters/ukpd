const gulp = require('gulp')
const standard = require('gulp-standard')
const jasmine = require('gulp-jasmine')

gulp.task('jasmine', function () {
  return gulp
    .src('test/**/*Spec.js')
    .pipe(jasmine({verbose: true}))
})

gulp.task('standard', function () {
  return gulp
    .src(['gulpfile.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('test', ['jasmine', 'standard'])

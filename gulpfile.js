const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('standard', function () {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('test', ['standard'])

var gulp = require('gulp');
var less = require('gulp-less');

// LESS Compiler
gulp.task('less-common', function(done) {
  return gulp.src('./less/**/*common*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less-ios', function(done) {
  return gulp.src('./less/**/*ios*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less", "./node_modules/framework7/src/less/ios"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less-material', function(done) {
  return gulp.src('./less/**/*material*.less')
    .pipe(less({
      paths: ["./node_modules/sigma-ui-frameseven/less", "./node_modules/framework7/src/less/material"]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('less', gulp.series('less-common', 'less-ios', 'less-material', function(done) {
  done();
}));


gulp.task('dist', function() {
  return gulp.src(['index.html', 'blank.html', 'node_modules/sigma-ui-frameseven/**/*',
      './fonts/**/*', './styles/**/*', './images/**/*', './scripts/**/*'
    ], {
      base: './'
    })
    .pipe(gulp.dest('./www'));
});

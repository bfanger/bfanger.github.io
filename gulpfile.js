const gulp = require('gulp');
const image = require('gulp-image');
const responsive = require('gulp-responsive');

gulp.task('resize', function () {
  return gulp.src('jekyll/_projects/screenshots/*')
    .pipe(responsive({
      '*': [{
        width: 660,
        rename: {
          dirname: '660w'
        }
      }, {
        width: 1200,
        rename: {
          dirname: '1200w'
        }
      }]
    }, {
      errorOnEnlargement: false,
      progressive: true,
      withMetadata: false,
      sharpen: true
    }))
    .pipe(gulp.dest('tmp/resized/'));
});
gulp.task('image', ['resize'], function () {
  return gulp.src('tmp/resized/**/*')
    .pipe(image())
    .pipe(gulp.dest('jekyll/thumbs/'))
})

gulp.task('default', ['image']);
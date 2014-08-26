var gulp       = require('gulp')
  , gutil      = require('gulp-util')
  , concat     = require('gulp-concat')
  , uglify     = require('gulp-uglify')
  , rename     = require('gulp-rename');


gulp.task('build', function(){
  //Grab the files.
   gulp.src(['bower_components/opengpg/dist/openpgp.js', 'src/angular-opengpg.js'])
  //Concat
   .pipe(concat('angular-opengpg.js').on('error', gutil.log))
   .pipe(gulp.dest('./dist').on('error', gutil.log))
  //Minify
   .pipe(rename('angular-opengpg.min.js').on('error',gutil.log))
   .pipe(uglify().on('error', gutil.log))
   .pipe(gulp.dest('./dist').on('error', gutil.log));
})


gulp.task('default', ['build']);

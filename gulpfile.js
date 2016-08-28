let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync.init({
    proxy: 'http://localhost:8080'
  });

  gulp.watch('src/*.html', reload);
  gulp.watch('app.js', reload);
});

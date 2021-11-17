const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

gulp.task('default', async function () {
  gulp.src('node_modules/a-useless-package/navigation.html')
   .pipe(gulp.dest('./dist/assets'));
gulp.src('node_modules/a-useless-package/style.css')
   .pipe(gulp.dest('./dist/assets'));
});
 
const paths = {
   scripts: {
     src: './',
     dest: './build/'
   }
 };

 async function includeHTML(){
   return gulp.src([
     '*.html',
     '!./dist/assets/navigation.html', // ignore
     ])
     .pipe(fileinclude({
       prefix: '@@',
       basepath: '@file'
     }))
     .pipe(gulp.dest(paths.scripts.dest));
 }

 exports.default = includeHTML;

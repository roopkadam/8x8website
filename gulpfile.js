var gulp  = require('gulp'),
    cssmin = require('gulp-cssmin'),
    changed = require('gulp-changed'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    server = require( 'gulp-develop-server' ),
    sass = require('gulp-sass');
// less = require('gulp-less'),
var filepath = 'themes/basic/public/';
//SCSS 
// gulp.task('sass', function () {
//   console.log(filepath + 'sass/main.scss',)
//   return gulp.src(filepath + 'sass/main.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(cssmin())
//     .pipe(gulp.dest(filepath + 'css/main.css'))
//     .pipe(notify('SCSS Compilation finished'));
// });



gulp.task('sass', function () {
  return gulp.src(filepath + 'sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(filepath + 'css/main.css'))
  });



// //JS 
// gulp.task('all-js', function() {
//   return gulp.src(filepath + 'js/**/*.js')
//     .pipe(changed(filepath + 'js'), {hasChanged: changed.compareLastModifiedTime})
//     .pipe(uglify())
//     .pipe(gulp.dest(filepath + 'js'))
//     .pipe(notify('JS Compilation finished'));
// });




//To start node server  
gulp.task('gulp',function(){
  server.listen( { path: './app.js'} );
  gulp.watch([filepath + 'sass/main.scss'], ['sass']);
  // gulp.watch([filepath + 'js/**/*.js'], ['all-js']);
  gulp.watch(['./app.js','./gulpfile.js'], server.restart);  
  // gulp.watch([filepath + 'less/*.less'], ['less']);
  // gulp.watch([filepath + 'uncomp/css/**/*.css'], ['all-css']);
  // gulp.watch([filepath + 'uncomp/css/css/*.css'], ['social-css']);
})
gulp.task('default',['gulp']);

// gulp.task('less', function(){ 
//   return gulp.src(filepath + 'less/main.less')
//   .pipe(less({
//       paths: [ filepath + 'less/' ]
//     }))
//   .pipe(cssmin())
//   .pipe(gulp.dest(filepath + 'css'))
//   .pipe(notify('Less Compilation finished'));

// }) 


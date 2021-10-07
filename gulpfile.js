var gulp = require('gulp');
var rename = require('gulp-rename')
var sass = require('gulp-dart-sass');

function css_style(done){
    gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css/'));

    done();
}
gulp.task(css_style);



// var gulp = require('gulp');
// // var rename = require('gulp-rename');
// var sass = require('gulp-sass');
//
// function css_style(done){
//     gulp.src('./site/scss/style.scss')
//         .pipe(sass({
//             errorLogToConsole: true
//         }))
//         .on('error', console.error.bind(console))
//         // .pipe(rename('main.css'))
//         .pipe(gulp.dest('./site/css'));
//
//     done();
// }
// gulp.task(css_style());
//
//
// var gulp = require('gulp');
// // var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// // var autoprefixer = require('gulp-autoprefixer');
// // var sourcemaps = require('gulp-sourcemaps');
// // var browserSync = require('browser-sync').create();
//
// function scssToCss(done) {
//     gulp.src('./scss//*.scss')
//         // .pipe(sourcemaps.init())
//         .pipe(sass({
//             errorLogToConsole: true,
//             outputStyle: 'compressed'
//         }))
//         .on('error', console.error.bind(console))
//         // .pipe(autoprefixer({
//         //     browsers: ['last 2 versions'],
//         //     cascade: false
//         // }))
//         .pipe(rename({suffix: '.min'}, 'style.css'))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./css/'))
//         .pipe(browserSync.stream());
//     done();
// }
//
//
// //отслеживание событий в scss
// function watchSass() {
//     gulp.watch("./scss//*", scssToCss)
// }
//
// function watchFiles() {
//     gulp.watch("./scss//*", scssToCss)
//     gulp.watch(".//*.html", browserReload)
//     gulp.watch(".//*.php", browserReload)
//     gulp.watch(".//*.js", browserReload)
// }
//
// function sync(done) {
//     browserSync.init({
//         server: {
//             // baseDir: "./"
//             // index: "index1.html"
//         },
//         port: 3000
//     });
//     done();
// }
//
// function browserReload(done) {
//     browserSync.reload();
//     done();
// }
//
// gulp.task('default', gulp.parallel(sync, watchFiles));
// // gulp.task('default', gulp.parallel(sync, watchSass));
// // gulp.task('default', gulp.series(watchSass));
// // gulp.task(sync);
//
// // gulp.task(scssToCss);
// // exports.default = this.defaultSomeTask();

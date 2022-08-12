const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Logs message
const hello = () => console.log("Hello World");

// Copy all html files
const copyHtml = () => gulp.src("src/*.html").pipe(gulp.dest("./dist"));

// Concat and minify JS scripts
const scripts = () =>
  gulp.src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));

// Compress Images
const compress = () =>
  gulp.src("src/images/*")
  .pipe(imagemin())
  .pipe(gulp.dest("./dist/images"));


// Exports
exports.scripts = scripts;
exports.hello = hello;
exports.copyHtml = copyHtml;
exports.compress = compress;

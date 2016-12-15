var gulp = require("gulp");

var cssConfig = {
  cssFile : "./app/src/css/books-seller-app.css",
  cssDestinationFolder : "./dist/assets/css/"
}

function compileCss() {
  gulp.src(cssConfig.cssFile).pipe(gulp.dest(cssConfig.cssDestinationFolder));
}

gulp.task("css", compileCss);

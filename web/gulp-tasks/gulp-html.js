var gulp = require("gulp");
var connect = require("gulp-connect");

var htmlConfig = {
  templatesFolder : ["./app/src/html/templates/**/*.html"],
  indexFile : "./app/src/html/index.html",
  templatesDestinationFolder : "./dist/html/",
  indexDestinationFolder : "./dist"
};

function compileHtmls() {
  gulp.src(htmlConfig.templatesFolder).pipe(gulp.dest(htmlConfig.templatesDestinationFolder)).pipe(connect.reload());
}

function compileHtmlIndex() {
  gulp.src(htmlConfig.indexFile).pipe(gulp.dest(htmlConfig.indexDestinationFolder)).pipe(connect.reload());
}

gulp.task("htmls", ["html-index"], compileHtmls);

gulp.task("html-index", compileHtmlIndex);

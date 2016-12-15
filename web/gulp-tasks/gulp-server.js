var gulp = require("gulp");
var connect = require("gulp-connect");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var bower = require("gulp-bower");

var machineConfig = {
  htmlTemplatesFolder : ["./app/src/html/templates/**/*.html"],
  htmlIndexFile : "./app/src/html/index.html",
  typescriptSourceFiles : ["./app/src/typescript/controllers/**/*.ts", "./app/src/typescript/core/**/*.ts", "./app/src/typescript/models/**/*.ts", "./app/src/typescript/service/**/*.ts", "./app/src/typescript/app.ts", "./app/src/typescript/SkinConfig.ts"],
  cssSourceFile : "./app/src/css/books-seller-app.css"
};

function installBowerComponents() {
  return bower({interactive:true}).pipe(gulp.src("./bower_components/**/*").pipe(gulp.dest("./dist/lib")));
}

function startDevelopmentServer() {
  connect.server({https: true, root: "./dist", livereload: true });
}

function batchScripts(events, done) {
  gulp.start("typescript:lib", done);
}

function batchHtmls(events, done) {
  gulp.start("htmls", done);
}

function batchHtmlIndex(events, done) {
  gulp.start("html-index", done);
}

function batchCss(events, done) {
  gulp.start("css", done);
}

function watchDevelopmentChanges() {
  gulp.watch(machineConfig.htmlTemplatesFolder, {verbose:true}, batch(batchHtmls));
  gulp.watch(machineConfig.htmlIndexFile, {verbose:true}, batch(batchHtmlIndex));
  gulp.watch(machineConfig.typescriptSourceFiles, {verbose:true}, batch(batchScripts));
  gulp.watch(machineConfig.cssSourceFile, {verbose:true}, batch(batchCss));
}

gulp.task("bower-install", installBowerComponents);

gulp.task("watch-development", watchDevelopmentChanges);

gulp.task("connect", ["bower-install"], startDevelopmentServer);

gulp.task("default", ["css", "htmls", "typescript:lib", "connect", "watch-development"]);

gulp.task("server", ["default"]);

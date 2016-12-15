var gulp = require("gulp");
var requireDir = require("require-dir");
requireDir("./gulp-tasks");

gulp.task("compile", ["typescript:lib", "htmls"]);

gulp.task("deploy", ["deployScript"]);

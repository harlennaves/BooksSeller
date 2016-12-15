var gulp = require("gulp");
var typescript = require("gulp-typescript");
var merge = require("merge2");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");

var typescriptConfig = {
  sourceFiles : ["./app/src/typescript/**/*.ts", "!./app/src/typescript/references.ts", "!./app/src/typescript/definitions/**/*.ts"],
  destinationFolder : "./dist/lib/books-seller-app/",
  destinationFile : "books-seller-app.js",
  destinationFolderMinified : "./dist/lib/books-seller-app/dist/"
};

function typescriptCompile() {
  var result = gulp.src(typescriptConfig.sourceFiles).pipe(typescript({noImplicitAny : true, out : typescriptConfig.destinationFile}));
  return result.js.pipe(gulp.dest(typescriptConfig.destinationFolder)).pipe(connect.reload());
}

function minifyCompilation() {
  gulp.src(typescriptConfig.destinationFolder + typescriptConfig.destinationFile).pipe(uglify()).pipe(gulp.dest(typescriptConfig.destinationFolderMinified));
}

gulp.task("typescript:lib", typescriptCompile);

gulp.task("deployScript", ["typescript:lib"], minifyCompilation);

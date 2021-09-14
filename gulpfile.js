const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const purgecss = require("gulp-purgecss")

function buildStyles() {
  return src("malmo-ui/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"))
}

function watchTask() {
  watch(["malmo-ui/**/*.scss", "*.html"], buildStyles)
}

exports.default = series(buildStyles, watchTask)

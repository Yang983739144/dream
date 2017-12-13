var gulp = require("gulp")
var cleanCss=require("gulp-clean-css")
var uglifyJs = require("gulp-uglify")
gulp.task("minifyCss",function(){
	return gulp.src("./css/*.css")
	.pipe(cleanCss())
	.pipe(gulp.dest("./dist/style/"))
})

gulp.task("minifyJs",function(){
	return gulp.src("./js/*.js")
	.pipe(uglifyJs())
	.pipe(gulp.dest("./dist/js/"))
})

 
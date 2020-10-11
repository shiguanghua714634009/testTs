var gulp=require("gulp");
// var concat=require("gulp-concat");
// var uglify=require("gulp-uglify");
// var rename=require("gulp-rename");
var scss=require("gulp-sass");
// var cleanCss=require("gulp-clean-css");
var ts = require('gulp-typescript');

gulp.task("handleTs",function(){
 return gulp.src("./*.ts")
    .pipe(ts({
         "declaration": true, 
        "target": "es5"
    }))
    .pipe(gulp.dest("./js"))
})

gulp.task("handleScss",function(){
 return gulp.src("./scss/*.scss")
        .pipe(scss())
        // .pipe(cleanCss({compatibility:"ie8"}))// 让css兼容到ie8
        // .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("./scss"))
})
gulp.task('watchScss',function(){
    return gulp.watch('./scss/*.scss',gulp.series('handleScss'));
})
gulp.task('watchFile',function(){
    return gulp.watch(["./scss/*.scss","./*.ts"],gulp.series("handleScss",'handleTs'));
})

gulp.task('default',gulp.series('watchFile'));
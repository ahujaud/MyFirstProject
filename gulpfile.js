const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsproject = ts.createProject('tsconfig.json')

gulp.task('scripts', function (){
    return gulp.src('Ts/*.ts')
                .pipe(tsproject())
                .js.pipe(concat('app.js'))
                .pipe(gulp.dest('www/js/'));
});

gulp.task('watch',gulp.series('scripts', function watcher(){
    return gulp.watch('Ts/*.ts',gulp.series('scripts'));
}));

gulp.task('default',gulp.series('watch'));
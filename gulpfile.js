const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const tsproject = ts.createProject('tsconfig.json');
const del = require('del');

gulp.task('clean', function clean(){
    return del('www/')
})
gulp.task('scripts',function scriptRunner(){
    return gulp.src(['**/*.ts','!node_modules/**/*.ts','!node_modules/**/*.js'])
                .pipe(tsproject())
                .js.pipe(concat('app.js'))
                .pipe(gulp.dest('www/js/'));
});

gulp.task('watch',function watcher(){
    return gulp.watch('Ts/*.ts',gulp.series('scripts'));
});

gulp.task('default',gulp.series(['clean','scripts','watch']));
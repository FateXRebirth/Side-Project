const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const gulp = require('gulp');
const Util = require('gulp-util');
const BrowserSync = require('browser-sync').create();
const Sass = require('gulp-sass');
const Plumber = require('gulp-plumber');
const If = require('gulp-if');
const Concat = require('gulp-concat');
const CleanCSS = require('gulp-clean-css');
const Sourcemaps = require('gulp-sourcemaps');
const Autoprefixer = require('gulp-autoprefixer');

const Iconfont = require('gulp-iconfont');    
const Env = require('gulp-env');
const Consolidate = require("gulp-consolidate");
const Spritesmith = require('gulp.spritesmith');
const Header = require('gulp-header');
const Merge = require('merge-stream');
const Fs = require('fs');
const del = require('del');
const Rename = require('gulp-rename');
const Uglify = require('gulp-uglify');

const src = 'src';
const dest = 'docs';

// Watch & Serve
gulp.task('serve', () => {
    BrowserSync.init({
        server: 'docs'
    });
    gulp.watch([src + '/sass/*.scss'], gulp.series('Sass(style.css)'));
    gulp.watch([
        src + '/typescript/*.ts',
        src + '/typescript/**/*.ts'
    ], gulp.series('Compose', 'Compile'));
    gulp.watch([dest + '/*.js']).on('change', BrowserSync.reload);
    gulp.watch([dest + '/*.html']).on('change', BrowserSync.reload);
})

// Compile Sass for main css
gulp.task('Sass(style.css)', () => {
    return gulp.src([src + '/sass/style.scss'])
    .pipe(Plumber(function(error) {
        Util.beep();
        Util.log(Util.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(Sass())
    .pipe(Autoprefixer(eval("['> 0%']")))
    .pipe(Sourcemaps.init())
    .pipe(Sourcemaps.write())
    .pipe(CleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(dest))
    .pipe(BrowserSync.stream());
})

gulp.task('Compose', () => {
    return gulp.src([
            src + '/typescript/main.ts',
            src + '/typescript/controller/*.ts',
            src + '/typescript/component/*.ts'
        ])
    .pipe(Concat('script.ts'))
    .pipe(gulp.dest(dest));
});

gulp.task('Compile', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(dest));
})

gulp.task("default", gulp.parallel('Sass(style.css)', 'Compose', 'Compile', 'serve'));

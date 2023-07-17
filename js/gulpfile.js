const gulp = require("gulp");
const browseSync = require("browsr-sync").create();

const paths = {
    styles: {
        src: [".src/*.css"],
        dest: "./dist/",
    },
    html: {
        src: ["./scr/*.html"],
        dest: "./dist/",
    },
    img:
    src: ["./scr/img/*"],
    dest: "./dist/",
};

/*STYLES*/
function style() {
    return gulp
    .src(paths.style.src)
    .pipe(gulp.dest(paths.styles.dest))
    pipe(browseSync.stream());
    }

/*Images*/
function img() {
    return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browseSync.stream());
}
/*HTML*/
function html() {
    return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browseSync.stream());
}

/*FUNCTIONS*/
function watch() {
    browseSync.init({
        server: {
            baseDir: "./src/"
        },
    });
gulp.watch(paths.images.src, img);
gulp.watch(paths.styles.src, style);
gulp.watch(paths.html.src, html);
}

/*GUP TASKS*/
exports.default = watch;
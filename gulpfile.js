const gulp = require('gulp');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const browserify = require('browserify');
const vueify = require('vueify');
const source = require('vinyl-source-stream');
const favicons = require('gulp-favicons');

gulp.task('default', ['copy', 'scripts', 'styles', 'jekyll', 'watch'], () => {
});

gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('js/**/*.vue', ['scripts']);
});

gulp.task('copy', ['copy-fonts'], () => {

});

gulp.task('copy-fonts', () => {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./site/fonts'));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--drafts',
    '--config=_config_dev.yml',
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => {
        gutil.log(`Jekyll: ${message}`);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyll-deploy', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--config=_config.yml',
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => {
        gutil.log(`Jekyll: ${message}`);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('styles', () => {
  gulp.src('scss/css-layout.scss')
    .pipe(sass({
      includePaths: ['./node_modules/'],
    }).on('error', sass.logError))
    .pipe(gulp.dest('./site/css/'));

  gulp.src('scss/layout.scss')
    .pipe(sass({
      includePaths: ['./node_modules/'],
    }).on('error', sass.logError))
    .pipe(gulp.dest('./site/css/'));
});

// Basic usage
gulp.task('scripts', () => {
  browserify('./js/just-a-site.js')
    .transform(vueify)
    .bundle()
    .pipe(source('just-a-site.js'))
    .pipe(gulp.dest('./site/js'));
});

gulp.task('favicons', () => gulp.src('site/assets/icon.png').pipe(favicons({
  appName: 'Just a site',
  appDescription: 'This is an example to build just a site',
  developerName: 'disjfa',
  developerURL: 'http://www.disjfa.nl/',
  background: '#c0392b',
  path: '/assets/icons/',
  url: 'https://disjfa.github.io/just-a-site/',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/?homescreen=1',
  version: 1.0,
  logging: false,
  online: false,
  html: './../../_includes/meta.html',
  pipeHTML: true,
  replace: true,
}))
  .on('error', gutil.log)
  .pipe(gulp.dest('./site/assets/icons/')));


gulp.task('deploy', [], () => gulp.src('./_site/**/*')
  .pipe(ghPages()));

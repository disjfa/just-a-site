const gulp = require('gulp');
const gutil = require('gulp-util');
const favicons = require('gulp-favicons');

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

import gulp from 'gulp';
import runSequence from 'run-sequence';
import eslint from 'gulp-eslint';
import tslint from 'gulp-tslint';

// Run eslint
gulp.task('eslint', () =>
  gulp.src(['**/*.js', '**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError()),
);

// Run tslint
gulp.task('tslint', () =>
  gulp.src(['**/*.ts', '**/*.tsx', '!node_modules/**'])
    .pipe(tslint({
      formatter: 'codeFrame',
    }))
    .pipe(tslint.report()),
);

// Default task
// 1. eslint
// 2. tslint
gulp.task('default', (callback) => {
  runSequence('eslint', 'tslint', callback);
});

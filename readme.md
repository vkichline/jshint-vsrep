# jshint-vsrep

> Visual Studio reporter for [JSHint](https://github.com/jshint/jshint)

This reporter is intended to reformat errors in such a manner that Visual Studio 2015+, using the Task Runner Explorer,
can easily detect and strip JSHint errors and warnings and redirect them to the Error List.

## Install

```sh
$ npm install --save-dev jshint-vsrep
```


## Usage

### [gulp-jshint](https://github.com/wearefractal/gulp-jshint)

```js
gulp.task('default', function () {
	gulp.src(['file.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-vsrep'));
});
```

### [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

```js
grunt.initConfig({
	jshint: {
		options: {
			reporter: require('jshint-vsrep')
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```


## License

MIT © Van Kichline




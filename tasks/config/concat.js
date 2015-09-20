/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: '.tmp/public/concat/production.js'
		},
    /*  SATELLITE */
    jsSatelliteDependency: {
      src: require('../pipeline').jsSatelliteDependencies,
      dest: '.tmp/public/concat/dependencies.js'
    },
    jsSatelliteCore: {
      src: require('../pipeline').jsSatelliteCore,
      dest: '.tmp/public/concat/core.js'
    },

		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/concat/production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};

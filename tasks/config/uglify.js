/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
			src: ['.tmp/public/concat/production.js'],
			dest: '.tmp/public/min/production.min.js'
		}
    /*  SATELLITE */
    ,distSatelliteDependency: {
      src: ['.tmp/public/concat/dependencies.js'],
      dest: '.tmp/public/min/satellite.dependencies.min.js'
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};

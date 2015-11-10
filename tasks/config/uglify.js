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
    ,distSatelliteCore: {
      src: ['.tmp/public/concat/core.js'],
      dest: '.tmp/public/min/satellite.core.min.js'
    }


    //,distStylesBavely: {
    //  src: ['.tmp/public/concat/bavely.css'],
    //  dest: '.tmp/public/min/bavely.min.css'
    //}
    ,distScriptsBavely: {
      src: ['.tmp/public/concat/bavely.js'],
      dest: '.tmp/public/min/bavely.min.js'
    }
    //,distStylesBootlistings: {
    //  src: ['.tmp/public/concat/bootlistings.css'],
    //  dest: '.tmp/public/min/bootlistings.min.css'
    //}
    ,distScriptsBootlistings: {
      src: ['.tmp/public/concat/bootlistings.js'],
      dest: '.tmp/public/min/bootlistings.min.js'
    }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};

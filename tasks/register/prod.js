module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'sails-linker:prodJs',
		'sails-linker:prodStyles',
		'sails-linker:devTpl',
		'sails-linker:prodJsJade',
		'sails-linker:prodStylesJade',
		'sails-linker:devTplJade'
/*  SATELLITE */
    , 'sails-linker:prodSatelliteDependency'
    , 'sails-linker:prodSatelliteCore'

    , 'sails-linker:prodBootlistingsStyles'
    , 'sails-linker:prodBootlistingsJs'
    , 'sails-linker:prodBavelyStyles'
    , 'sails-linker:prodBavelyJs'
	]);
};

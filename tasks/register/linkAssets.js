module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devJs',
		'sails-linker:devStyles',
		'sails-linker:devTpl',
		'sails-linker:devJsJade',
		'sails-linker:devStylesJade',
		'sails-linker:devTplJade'
    /*  SATELLITE */
    , 'sails-linker:devSatelliteDependency'
    , 'sails-linker:devSatelliteCore'

    , 'sails-linker:devBavelyStyles'
    , 'sails-linker:devBavelyJs'
    , 'sails-linker:devBootlistingsStyles'
    , 'sails-linker:devBootlistingsJs'

  ]);
};

/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [

//  'styles/admin.css',
  'styles/bootstrap-theme.css',
  'styles/bootstrap.css',
  'styles/bootstrap.min.css',
  'styles/carousel.css',
  'styles/colorbox.css',
  'styles/et-line-font.css',
  'styles/font-awesome.min.css',
  'styles/importer.css',
  'styles/less/variables.css',
  'styles/magnific-popup.css',
  //'styles/theme-blue.css',
  'styles/theme-orange.css',
  //'styles/theme-salmonpink.css',
  //'styles/theme-updates.css',
  //'styles/theme.css'

//  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  //'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here

  'js/dependencies/bootstrap.js',
  'js/dependencies/jqBootstrapValidation.js',
  'js/dependencies/jquery.flexslider.js',
  'js/dependencies/jquery.magnific-popup.js',
  'js/dependencies/jquery.mb.YTPlayer.js',
  'js/dependencies/jquery.nav.js',
  'js/dependencies/jquery.scrollTo.js',

  'js/scrollReveal.js',
  'js/isotope.js',
  'js/cbpAnimatedHeader.min.js',
  'js/classie.js',
  'js/imagesloaded.pkgd.js',
  'js/less.js',
  'js/modernizr.custom.js',
  'js/owl.carousel.js',
  'js/custom.js'

  //'js/ng/angular-1.4.1.js',
  //'js/ng/angular-1.4.1.route.js',
  //'js/ng/ui-bootstrap-tpls-0.13.0.min.js',
  //'js/ng/ng.satellite.js',
  //'js/ng/ng.application.js'

];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});

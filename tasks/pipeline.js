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
//  to change `styles/importer.less` instead.)
var cssFilesToInject = [
  //'styles/**/*.css'
  'bootstrap/css/bootstrap.css',
  'css/simpletextrotator.css',
  'css/font-awesome.css',
  'css/et-line-font.css',
  'css/magnific-popup.css',
  'css/flexslider.css',
  'css/owl.carousel.css',
  'css/animate.css',
  'css/style.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  //// Load sails.io before everything else
  //'js/dependencies/sails.io.js',
  //
  //// Dependencies like jQuery, or Angular are brought in here
  //'js/dependencies/**/*.js',
  //
  //// All of the rest of your client-side js files
  //// will be injected here in no particular order.
  //'js/**/*.js'
  'js/jquery-2.1.3.js',
  'bootstrap/js/bootstrap.js',
  'js/jquery.mb.YTPlayer.js',
  'js/appear.js',
  'js/jquery.simple-text-rotator.js',
  'js/jqBootstrapValidation.js',
  //'http://maps.google.com/maps/api/js?sensor=true',
  //'js/gmaps.js',
  'js/isotope.pkgd.js',
  'js/imagesloaded.pkgd.js',
  'js/jquery.flexslider.js',
  'js/jquery.magnific-popup.js',
  'js/jquery.fitvids.js',
  'js/smoothscroll.js',
  'js/wow.js',
  'js/owl.carousel.js',
  'js/contact.js',
  'js/custom.js'

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
  return '' + path;
});

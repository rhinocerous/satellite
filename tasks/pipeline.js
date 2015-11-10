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
  'styles/prestige/bootstrap-theme.css',
  'styles/prestige/bootstrap.css',
  'styles/prestige/bootstrap.min.css',
  'styles/prestige/carousel.css',
  'styles/prestige/colorbox.css',
  'styles/prestige/et-line-font.css',
  'styles/prestige/font-awesome.min.css',
  'styles/prestige/importer.css',
  'styles/prestige/less/variables.css',
  'styles/prestige/magnific-popup.css',
  //'styles/prestige/theme-blue.css',
  //'styles/prestige/theme-orange.css',
  //'styles/prestige/theme-salmonpink.css',
  'styles/prestige/theme-updates.css',
  'styles/prestige/theme.css',
  'styles/prestige/stuntfights.css'

//  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  'js/dependencies/bootstrap.js',
  'js/dependencies/jqBootstrapValidation.js',
  'js/dependencies/jquery.flexslider.js',
  'js/dependencies/jquery.magnific-popup.js',
  'js/dependencies/jquery.mb.YTPlayer.js',
  'js/dependencies/jquery.nav.js',
  'js/dependencies/jquery.scrollTo.js',

  //'js/prestige/docs.min.js',
  'js/prestige/scrollReveal.js',
  'js/prestige/isotope.pkgd.min.js',
  'js/prestige/isotope.js',
  'js/prestige/cbpAnimatedHeader.min.js',
  'js/prestige/classie.js',
  'js/prestige/imagesloaded.pkgd.js',
  'js/prestige/less.js',
  'js/prestige/modernizr.custom.js',
  'js/prestige/owl.carousel.js',
  //'js/prestige/jssor.slider.mini.js',
  'js/prestige/custom.js'

  //'js/ng/angular-1.4.1.js',
  //'js/ng/angular-1.4.1.route.js',
  //'js/ng/ui-bootstrap-tpls-0.13.0.min.js',
  //'js/ng/ng.satellite.js',
  //'js/ng/ng.application.js'

];
/*  SATELLITE */

var jsSatelliteDependencies = [
  '/js/ng/satellite/dependencies/jquery-2.1.3.js',
  '/js/ng/satellite/dependencies/dropzone.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.route.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.animate.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.sanitize.js',
  '/js/ng/satellite/dependencies/angular-dropzone.js',
  '/js/ng/satellite/dependencies/ui-bootstrap-tpls-0.13.4.min.js',
  '/js/ng/satellite/dependencies/textAngular-rangy.min.js',
  '/js/ng/satellite/dependencies/textAngular-sanitize.min.js',
  '/js/ng/satellite/dependencies/textAngular.min.js',
  '/js/ng/satellite/dependencies/angular-drag-n-drop.js',
  '/js/ng/satellite/dependencies/tv4.js',
  '/js/ng/satellite/dependencies/ObjectPath.js',
  '/js/ng/satellite/dependencies/ng.schema-form.js',
  '/js/ng/satellite/dependencies/bootstrap-decorator.js',
  //'/js/ng/satellite/dependencies/ng-file-upload-all.js',
  //'/js/ng/satellite/dependencies/schema-form-file.js',
  '/js/ng/satellite/dependencies/angular-toastr.tpls.js',
  '/js/ng/satellite/dependencies/select.js'
];

var jsSatelliteCore= [
  '/js/ng/satellite/core/satellite.core.js',
  '/js/ng/satellite/core/satellite.core.config.js',
  '/js/ng/satellite/core/base/*.js',
  '/js/ng/satellite/core/services/*.js',
  '/js/ng/satellite/core/install/*.js',
  '/js/ng/satellite/core/app/*.js',
  '/js/ng/satellite/core/app/*/*.js'
];


var cssBavely = [
  '/skins/bavely/bootstrap/css/bootstrap.min.css',
  '/skins/bavely/css/style.css',
  '/skins/bavely/icons/css/ionicons.min.css',
  '/skins/bavely/css/flexslider.css',
  '/skins/bavely/css/magnific-popup.css',
  '/skins/bavely/css/animate.css',
  '/skins/bavely/cubeportfolio/css/cubeportfolio.min.css',
  '/skins/bavely/css/pricing.css',
  '/skins/bavely/rs-plugin/css/settings.css',
  '/skins/bavely/html5shiv.min.js',
  '/skins/bavely/respond.min.js',
  '/skins/bavely/master-slider/style/masterslider.css',
  '/skins/bavely/master-slider/skins/default/style.css',
  '/skins/bavely/css/master-slider-custom.css',
];

var jsBavely = [
  '/skins/bavely/js/jquery.min.js',
  '/skins/bavely/js/jquery-migrate.min.js',
  '/skins/bavely/js/moderniz.min.js',
  '/skins/bavely/js/jquery.easing.1.3.js',
  '/skins/bavely/bootstrap/js/bootstrap.min.js',
  '/skins/bavely/js/bootstrap-hover-dropdown.min.js',
  '/skins/bavely/js/jquery.flexslider-min.js',
  '/skins/bavely/js/parallax.min.js',
  '/skins/bavely/js/tweetie.min.js',
  '/skins/bavely/js/waypoints.min.js',
  '/skins/bavely/js/jquery.sticky.js',
  '/skins/bavely/js/bootstrap-hover-dropdown.min.js',
  '/skins/bavely/js/wow.min.js',
  '/skins/bavely/js/template.js',
  '/skins/bavely/js/contact-form.js',
  '/skins/bavely/rs-plugin/js/jquery.themepunch.tools.min.js',
  '/skins/bavely/rs-plugin/js/jquery.themepunch.revolution.min.js',
  '/skins/bavely/js/revolution-custom.js',
  '/skins/bavely/cubeportfolio/js/jquery.cubeportfolio.min.js',
  '/skins/bavely/js/cube-portfolio.js',
  '/skins/bavely/js/pricing.js',
  '/skins/bavely/master-slider/js/masterslider.min.js',
  '/skins/bavely/js/masterslider-custom.js',
  '/skins/bavely/js/pace.min.js'
];

var cssBootlistings = [
  '/skins/bootlistings/css/bootstrap.css',
  '/skins/bootlistings/css/theme.css',
  '/skins/bootlistings/css/dropzone.css',
  '/skins/bootlistings/css/font-awesome.css',
  '/skins/bootlistings/js/fancybox/jquery.fancybox.css?v=2.1.5',
  '/skins/bootlistings/js/fancybox/helpers/jquery.fancybox-buttons.css?v=2.1.5'
];

var jsBootlistings = [
  '/skins/bootlistings/js/jquery-1.10.2.min.js',
  '/skins/bootlistings/bootstrap/js/bootstrap.js',
  '/skins/bootlistings/js/jquery.flot.js',
  '/skins/bootlistings/js/dropzone.js',
  '/skins/bootlistings/js/fancybox/jquery.fancybox.js?v=2.1.5',
  '/skins/bootlistings/js/fancybox/helpers/jquery.fancybox-buttons.js?v=2.1.5',
  '/skins/bootlistings/js/fancybox/helpers/jquery.fancybox-media.js?v=2.1.5',
  '/skins/bootlistings/js/global.js'
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


//  SKINS
module.exports.cssBavely = cssBavely.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.jsBavely = jsBavely.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.cssBootlistings = cssBootlistings.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.jsBootlistings = jsBootlistings.map(function(path) {
  return '.tmp/public/' + path;
});


/*  SATELLITE */
module.exports.jsSatelliteDependencies = jsSatelliteDependencies.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.jsSatelliteCore = jsSatelliteCore.map(function(path) {
  return '.tmp/public/' + path;
});


module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});

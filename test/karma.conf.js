module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-animate/angular-animate.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/js/app.js',
      'public/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
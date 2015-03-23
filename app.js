requirejs.config({ 
    baseUrl: 'app',
    paths: {
        app: '../app',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        jquery: '../bower_components/jquery/dist/jquery'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    },
    backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    }
});

require(['app/Main'], function (Main) {
    Main.start();
});
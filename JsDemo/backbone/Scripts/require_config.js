(function () {
    var baseurl = "/Scripts/";
    require.config({
        paths: {
            "jquery": baseurl+"jquery",
            "underscore": baseurl+"underscore",
            "backbone": baseurl+"backbone",
            "index":baseurl+"lib/index"
        },
        shim: {
            'underscore': {
                exports: '_'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    });

})();

module.exports = {
    options: {
        runBower: false,
        srcPrefix: 'bower_components'
    },
    dev: {
        options: {
            destPrefix: '<%= env.dev.dest %>/js/lib'
        },
        files: {
            'angular<%= template.dev.minSuffix %>.js': 'angular/angular<%= template.dev.minSuffix %>.js',
            'angular-animate<%= template.dev.minSuffix %>.js': 'angular-animate/angular-animate<%= template.dev.minSuffix %>.js',
            'angular-resource<%= template.dev.minSuffix %>.js': 'angular-resource/angular-resource<%= template.dev.minSuffix %>.js',
            'angular-route<%= template.dev.minSuffix %>.js': 'angular-route/angular-route<%= template.dev.minSuffix %>.js',
            'angular-sanitize<%= template.dev.minSuffix %>.js': 'angular-sanitize/angular-sanitize<%= template.dev.minSuffix %>.js',
            'ui-bootstrap<%= template.dev.minSuffix %>.js': 'angular-ui-bootstrap/dist/ui-bootstrap-0.11.0<%= template.dev.minSuffix %>.js',
            'ui-bootstrap-tpls<%= template.dev.minSuffix %>.js': 'angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.11.0<%= template.dev.minSuffix %>.js',
            'showdown.js': 'showdown/src/showdown.js'
        }
    },
    prod: {
        options: {
            srcPrefix: 'bower_components',
            destPrefix: '<%= env.prod.dest %>/js/lib'
        },
        files: {
            'angular<%= template.prod.minSuffix %>.js': 'angular/angular<%= template.prod.minSuffix %>.js',
            'angular-animate<%= template.prod.minSuffix %>.js': 'angular-animate/angular-animate<%= template.prod.minSuffix %>.js',
            'angular-resource<%= template.prod.minSuffix %>.js': 'angular-resource/angular-resource<%= template.prod.minSuffix %>.js',
            'angular-route<%= template.prod.minSuffix %>.js': 'angular-route/angular-route<%= template.prod.minSuffix %>.js',
            'angular-sanitize<%= template.prod.minSuffix %>.js': 'angular-sanitize/angular-sanitize<%= template.prod.minSuffix %>.js',
            'ui-bootstrap<%= template.prod.minSuffix %>.js': 'angular-ui-bootstrap/dist/ui-bootstrap-0.11.0<%= template.prod.minSuffix %>.js',
            'ui-bootstrap-tpls<%= template.prod.minSuffix %>.js': 'angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.11.0<%= template.prod.minSuffix %>.js',
            'showdown.js': 'showdown/compressed/showdown.js'
        }
    }
};

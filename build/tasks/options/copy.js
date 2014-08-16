module.exports = {
    options: {
        src: [
            'js/lib/**',
            'css/lib/**',
            'img/**',
            '**/*.html',
            'svc/**'
        ]
    },
    dev_ui_bootstrap: {
        expand: true,
        flatten: true,
        cwd: 'bower_components/angular-ui-bootstrap/dist',
        src: [
            'ui-bootstrap-0.4.0<%= template.dev.minSuffix %>.js',
            'ui-bootstrap-tpls-0.4.0<%= template.dev.minSuffix %>.js'
        ],
        dest: '<%= env.dev.dest %>/js/lib'
    },
    prod_ui_bootstrap: {
        expand: true,
        flatten: true,
        cwd: 'bower_components/angular-ui-bootstrap/dist',
        src: [
            'ui-bootstrap-0.4.0<%= template.prod.minSuffix %>.js',
            'ui-bootstrap-tpls-0.4.0<%= template.prod.minSuffix %>.js'
        ],
        dest: '<%= env.prod.dest %>/js/lib'
    },
    dev_showdown: {
        expand: true,
        flatten: true,
        cwd: 'bower_components/showdown/src',
        src: 'showdown.js',
        dest: '<%= env.dev.dest %>/js/lib'
    },
    prod_showdown: {
        expand: true,
        flatten: true,
        cwd: 'bower_components/showdown/compressed',
        src: 'showdown.js',
        dest: '<%= env.prod.dest %>/js/lib'
    },
    dev: {
        expand: true,
        cwd: 'src',
        src: '<%= copy.options.src %>',
        dest: '<%= env.dev.dest %>',
        filter: 'isFile'
    },
    prod: {
        expand: true,
        cwd: 'src',
        src: '<%= copy.options.src %>',
        dest: '<%= env.prod.dest %>',
        filter: 'isFile'
    }
};

module.exports = {
    options: {
        src: 'src/index.html',
        version: {
            'angular': '1.1.5',
            'angularUiBootstrap': '0.4.0',
            'showdown': '0.3.1'
        }
    },
    dev: {
        src: '<%= template.options.src %>',
        dest: '<%= env.dev.dest %>',
        env: '<%= env.dev.name %>',
        debugjs: true,
        minSuffix: '',
        version: '<%= template.options.version %>',
        mainjs: '<%= ngmin.options.dest %>'     // for dev, use the ng-minified version
    },
    prod: {
        src: '<%= template.options.src %>',
        dest: '<%= env.prod.dest %>',
        env: '<%= env.prod.name %>',
        debugjs: false,
        minSuffix: '.min',
        version: '<%= template.options.version %>',
        mainjs: '<%= uglify.options.dest %>'    // and for prod, the uglified version
    }
};

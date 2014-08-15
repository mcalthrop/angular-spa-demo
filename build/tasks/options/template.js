var ts = new Date();

module.exports = {
    options: {
        src: 'src/index.html',
        version: {
            'angular': '1.1.5',
            'angularUiBootstrap': '0.4.0',
            'showdown': '0.3.1'
        },
        timestamp: ts.toString(),
        cacheBuster: '?' + ts.getTime()
    },
    dev: {
        src: '<%= template.options.src %>',
        dest: '<%= env.dev.dest %>',
        env: '<%= env.dev.name %>',
        debugjs: true,
        minSuffix: '',
        timestamp: '<%= template.options.timestamp %>',
        cacheBuster: '<%= template.options.cacheBuster %>',
        version: '<%= template.options.version %>',
        mainjs: '<%= ngmin.options.dest %>'     // for dev, use the ng-minified version
    },
    prod: {
        src: '<%= template.options.src %>',
        dest: '<%= env.prod.dest %>',
        env: '<%= env.prod.name %>',
        debugjs: false,
        minSuffix: '.min',
        timestamp: '<%= template.options.timestamp %>',
        cacheBuster: '<%= template.options.cacheBuster %>',
        version: '<%= template.options.version %>',
        mainjs: '<%= uglify.options.dest %>'    // and for prod, the uglified version
    }
};

module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n',
        report: 'min',
        dest: 'js/app/<%= pkg.name %>.min.js'
    },
    dev: {
        src: ['<%= ngmin.dev.dest %>'],
        dest: '<%= env.dev.dest %>/<%= uglify.options.dest %>',
        options: {
            beautify: {
                width: 80,
                beautify: true
            },
            preserveComments: true,
            mangle: false,
            compress: false
        }
    },
    prod: {
        src: ['<%= ngmin.prod.dest %>'],
        dest: '<%= env.prod.dest %>/<%= uglify.options.dest %>'
    }
};

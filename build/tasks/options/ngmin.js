module.exports = {
    options: {
        src: ['src/js/app/**/*.js'],
        dest: 'js/app/<%= pkg.name %>.ngmin.js'
    },
    dev: {
        src: '<%= ngmin.options.src %>',
        dest: '<%= env.dev.dest %>/<%= ngmin.options.dest %>'
    },
    prod: {
        src: '<%= ngmin.options.src %>',
        dest: '<%= env.prod.dest %>/<%= ngmin.options.dest %>'
    }
};

module.exports = {
    options: {
        dest: '<%= env.dist %>/docs',
        html5Mode: true,
        title: '<%= pkg.name %>',
        titleLink: '/api',
        startPage: '/api',
        bestMatch: true
    },
    all: {
        src: '<%= ngmin.options.src %>'
    }
};

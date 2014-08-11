module.exports = {
    dev: {
        src: ['<%= env.dev.dest %>']
    },
    prod: {
        src: ['<%= env.prod.dest %>']
    },
    docs: {
        src: ['<%= ngdocs.options.dest %>']
    },
    all: {
        src: '<%= env.dist %>'
    }
};

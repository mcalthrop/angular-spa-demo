module.exports = {
    dist: 'dist',       // main distribution directory
    dev: {
        name: 'dev',
        dest: '<%= env.dist %>/dev'
    },
    prod: {
        name: 'prod',
        dest: '<%= env.dist %>/prod'
    }
};

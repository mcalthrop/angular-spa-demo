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

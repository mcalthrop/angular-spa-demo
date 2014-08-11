module.exports = {
    options: {
        paths: ["src/css"],
        src: 'src/css/main.less'
    },
    dev: {
        src: '<%= less.options.src %>',
        dest: '<%= env.dev.dest %>/css/main.css'
    },
    prod: {
        options: {
            yuicompress: true
        },
        src: '<%= less.options.src %>',
        dest: '<%= env.prod.dest %>/css/main.css'
    }
};

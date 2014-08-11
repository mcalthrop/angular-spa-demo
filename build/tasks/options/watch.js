module.exports = {
    files: [
        '<%= jshint.files %>',
        '<%= less.files %>'
    ],
    tasks: [
        'jshint',
        'karma'
    ]
};

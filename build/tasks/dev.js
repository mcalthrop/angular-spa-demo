module.exports = function (grunt) {
    grunt.registerTask(
        'dev',
        [
            'clean:dev',
            'jshint',
            'less:dev',
            'ngmin:dev',
            'uglify:dev',
            'copy:dev_ui_bootstrap',
            'copy:dev',
            'template:dev'
        ]
    );
};

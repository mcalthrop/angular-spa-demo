module.exports = function (grunt) {
    grunt.registerTask(
        'prod',
        [
            'clean:prod',
            'test',
            'less:prod',
            'ngmin:prod',
            'uglify:prod',
            'copy:prod_ui_bootstrap',
            'copy:prod_showdown',
            'copy:prod',
            'template:prod',
            'clean:docs',
            'ngdocs'
        ]
    );
};

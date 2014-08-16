module.exports = function (grunt) {
    grunt.registerTask(
        'dev',
        [
            'clean:dev',
            'jshint',
            'less:dev',
            'ngmin:dev',
            'uglify:dev',
            'bowercopy:dev',
            'copy:dev',
            'template:dev'
        ]
    );
};

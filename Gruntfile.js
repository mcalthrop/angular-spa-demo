/*global module */

module.exports = function (grunt) {

    'use strict';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            dist: 'dist',       // main distribution directory
            dev: {
                name: 'dev',
                dest: '<%= env.dist %>/dev'
            },
            prod: {
                name: 'prod',
                dest: '<%= env.dist %>/prod'
            }
        },
        clean: {
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
        },
        ngmin: {
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
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n',
                report: 'min',
                dest: 'js/app/<%= pkg.name %>.min.js'
            },
            dev: {
                src: ['<%= ngmin.dev.dest %>'],
                dest: '<%= env.dev.dest %>/<%= uglify.options.dest %>',
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    },
                    preserveComments: true,
                    mangle: false,
                    compress: false
                }
            },
            prod: {
                src: ['<%= ngmin.prod.dest %>'],
                dest: '<%= env.prod.dest %>/<%= uglify.options.dest %>'
            }
        },
        less: {
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
        },
        karma: {
            unit: {
                configFile: 'test/config/karma.conf.js',
                singleRun: true
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'src/js/app/**/*.js',
                'test/unit/**/*.js'
            ],
            options: {
                globals: {
                    console: true
                }
            }
        },
        copy: {
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
        },
        template: {
            options: {
                src: 'src/index.html',
                version: {
                    'angular': '1.1.5',
                    'angularUiBootstrap': '0.4.0',
                    'showdown': '0.3.1'
                }
            },
            dev: {
                src: '<%= template.options.src %>',
                dest: '<%= env.dev.dest %>',
                env: '<%= env.dev.name %>',
                debugjs: true,
                minSuffix: '',
                version: '<%= template.options.version %>',
                mainjs: '<%= ngmin.options.dest %>'     // for dev, use the ng-minified version
            },
            prod: {
                src: '<%= template.options.src %>',
                dest: '<%= env.prod.dest %>',
                env: '<%= env.prod.name %>',
                debugjs: false,
                minSuffix: '.min',
                version: '<%= template.options.version %>',
                mainjs: '<%= uglify.options.dest %>'    // and for prod, the uglified version
            }
        },
        ngdocs: {
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
        },
        watch: {
            files: [
                '<%= jshint.files %>',
                '<%= less.files %>'
            ],
            tasks: [
                'jshint',
                'karma'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hustler');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-ngdocs');

    grunt.registerTask(
        'test',
        [
            'jshint',
            'karma'
        ]
    );

    grunt.registerTask(
        'dev',
        [
            'clean:dev',
            'jshint',
            'less:dev',
            'ngmin:dev',
            'uglify:dev',
            'copy:dev',
            'template:dev'
        ]
    );

    grunt.registerTask(
        'prod',
        [
            'clean:prod',
            'test',
            'less:prod',
            'ngmin:prod',
            'uglify:prod',
            'copy:prod',
            'template:prod',
            'clean:docs',
            'ngdocs'
        ]
    );

    grunt.registerTask('docs', 'ngdocs');

    grunt.registerTask('default', 'dev');
};

/* EOF */
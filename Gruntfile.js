module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js',
            },
            ci: {
                singleRun: true,
            },
            dev: {
                reporters: 'dots'
            }
        },
        jshint: jshintConfig(),
        connect: serverConfig()
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('serve', ['connect:server']);
    grunt.registerTask('ci', ['jshint', 'karma:ci']);
    grunt.registerTask('dev', ['jshint', 'karma:dev']);
    grunt.registerTask('default', ['jshint', 'karma:dev']);
}

function jshintConfig() {
    var code, spec, jshint;

    code = {
        files: {
            src: ['js/contact/*.js']
        },
        options: {
            globals: {
                angular: true
            }
        }
    };
    spec = {
        files: {
            src: ['spec/**/*.js']
        },
        options: {
            globals: {
                beforeEach: true,
                module: true,
                inject: true,
                describe: true,
                it: true,
                expect: true,
                spyOn: true,
                jasmine: true
            }
        }
    };
    jshint = {
        code: code,
        spec: spec,
        options: {
            browser: true,
            eqeqeq: true,
            indent: 4,
            trailing: true,
            latedef: 'nofunc',
            maxdepth: 3,
            unused: true,
            nonbsp: true,
            freeze: true,
            undef: true,
            maxcomplexity: 9,
            reporter: require('jshint-stylish')
        }
    };
    return jshint;
}

function serverConfig() {
    return {
        server: {
            options: {
                port: 3333,
                keepalive: true,
                debug: true
            }
        }
    };
}
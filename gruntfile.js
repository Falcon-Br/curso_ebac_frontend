module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'build/styles/main.css': 'source/styles/main.less' // Arquivo CSS de saída: Arquivo LESS de entrada
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'build/scripts/main.min.js': 'source/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};

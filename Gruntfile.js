module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        typescript: {
          base: {
            src: ['src/**/*.ts'],
            dest: 'bin',
            options: {
              target: 'es5',
              base_path: 'src'
            }
          }
        },

          watch: {
            files: 'src/**/*.ts',
            tasks: ['typescript']
          }

    });

    grunt.registerTask('default', 'watch');
}
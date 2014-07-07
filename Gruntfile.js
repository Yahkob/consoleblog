module.exports = function(grunt) {


    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      shell: {
        build: {
          command: 'jekyll build'
        }
      },
      watch: {
        scripts:{
          files: ['_config.yml', '_posts/*'],
          tasks: ['shell:build']
        }
      }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};

module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      prod: {
        expand: true,
        cwd: 'css',
        src: ['*.css'],
        dest: 'css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
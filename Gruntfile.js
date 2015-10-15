module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cascadeDeploy: {
      'default': {
        options: {
          url: 'http://cascade.dev',
          site: 'bradley'
        },
        files: [
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-cascade-deploy');
}
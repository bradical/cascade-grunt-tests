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
          {src: ['js/*'], site: '', dest: 'resources/js', type: 'file', rewriteLinks: true, maintainAbsoluteLinks: true},
          {src: ['css/*'], site: '', dest: 'resources/css', type: 'file', rewriteLinks: true, maintainAbsoluteLinks: true}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-cascade-deploy');
}
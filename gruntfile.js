/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'],
        commitFiles: ['package.json'],
        tagName: '%VERSION%',
        tagMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        commitMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        pushTo: 'origin'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');

  // Releasing
  grunt.registerTask('release:patch', ['bump:patch']);
  grunt.registerTask('release:minor', ['bump:minor']);
  // Commenting out releasing a major version until we are ready for v1
  // grunt.registerTask('release:major', ['bump:major']);

};

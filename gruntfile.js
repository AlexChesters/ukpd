/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true,
        jasmine: true,
        esnext: true,
        globals: {
          fdescribe: true,
          beforeAll: true,
          pending: true
        }
      },
      gruntfile: { src: 'gruntfile.js' },
      src: { src: 'src/**/*.js' }
    },
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('test', ['jshint']);

  // Releasing
  grunt.registerTask('release:minor', ['test', 'bump:minor']);
  grunt.registerTask('release:patch', ['test', 'bump:patch']);
  // Commenting out releasing a major version until we are ready for v1
  // grunt.registerTask('release:major', ['test', 'bump:major']);

};

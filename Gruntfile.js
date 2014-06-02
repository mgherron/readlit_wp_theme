module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    less : {
      development : {
        options : {
          compress : true
        },
        files : {
          "dist/css/min.css" : "src/less/_modules.less"
        },
      }
    },

    browserify: {
      dist: {
        files: {
          'dist/js/combined.js': ['src/js/_modules.js']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/min.js': ['dist/js/combined.js']
        }
      }
    },

    watch: {
      stylesheets : {
        files : [
          'src/less/**/*.less',
          'src/less/*.less'
        ],
        tasks : [
          'less',
        ],
        options: {
          spawn: false,
          debounceDelay: 250
        }
      },
      browserify : {
        files : [
          'src/js/**/*.js',
          'src/js/*.js'
        ],
        tasks : [
          'browserify',
          'uglify'
        ],
        options: {
          spawn: false,
          debounceDelay: 250
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'browserify', 'uglify']);

};
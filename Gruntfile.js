module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },
    less: {
      options: {
        paths: 'assets/',
        yuicompress: false,
        ieCompat: true,
        require: [
            'css/main.less'
        ]
      },
      src: {
          expand: true,
          cwd: 'assets/',
          src: [
              'css/*.less'
          ],
          ext: '.css',
          dest: 'assets/'
      }
    },
    copy: {
      main: {
        files: [
            // includes files within path
            {
              expand: true, 
              cwd: 'bower_components/normalize.css/', 
              src: 'normalize.css',
              dest: 'assets/css/', 
              filter: 'isFile'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery/dist/',
              src: 'jquery.min.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery-ui/',
              src: 'jquery-ui.min.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true, 
              cwd: 'bower_components/jquery-ui/themes/base/', 
              src: 'resizable.css',
              dest: 'assets/css/', 
              filter: 'isFile'
            }
          ]
        }
    },
    watch: {
        css: {
                files: ['assets/css/*.less', 'assets/css/**/*.less'],
                tasks: 'less',
                options: {
                  livereload: true,
                }
            },
        js: {
              files: ['assets/js/*.js', 'assets/js/**/*.js'],
              options: {
                livereload: true
              }
            },
        views: {
                files: ['app/views/*.html', 'app/views/**/*.html'],
                options: {
                  livereload: true
                }
              },
        index: {
            files: ['index.html'],
            options: {
              livereload: true
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('default', ['connect','copy','less','watch']);

};
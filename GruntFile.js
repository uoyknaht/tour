module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var appConfig = {
    rootPath: './',
    appPath: 'public/app',
    distPath: 'public/dist'
  };

  grunt.initConfig({
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            appConfig.distPath + '/{,*/}*',
            '!' + appConfig.distPath + '/.git{,*/}*'
          ]
        }]
      },
    },    
    // wiredep: {
    //   target: {
    //     directory: appConfig.rootPath + '/public',
    //     bowerJson: appConfig.rootPath + '/public',
    //     // src: [appConfig.rootPath +  '/views/index.ejs']
    //     src: ['../views/index.ejs']
    //     // ignorePath:  /\.\.\//
    //   }
    // },    
    copy: {   
      indexHtml: {
        src: appConfig.rootPath + '/views/index.ejs',
        dest: appConfig.distPath + '/index.ejs'
      },    
      views: {
        expand: true,
        cwd: appConfig.appPath + '/views',
        src: '**',
        dest: appConfig.distPath + '/views/'
      }     
    }, 
    useminPrepare: {
      html: appConfig.rootPath + '/views/index.ejs',
      options: {
        root: appConfig.rootPath + '/public',
        dest: appConfig.distPath
      }      
    },
    usemin: {
      html: [appConfig.distPath + '/index.ejs']
    },
    filerev: {
      dist: {
        src: [
          appConfig.distPath + '/scripts/{,*/}*.js',
          appConfig.distPath + '/styles/{,*/}*.css'
        ]
      }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy:indexHtml',
    'copy:views',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'

  ]);

};
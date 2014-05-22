module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'build/iterator.min.js': ['build/iterator.js']

    typescript:
      base:
        src: ['src/**/*.ts']
        dest: 'build/iterator.js'
        options:
          sourceMap: false

      test:
        src: ['tests/**/*.ts']
        options:
          sourceMap: false

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'uglify', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js']
  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'uglify', 'clean'])

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    run: {
      options: {
        cwd: './bitsy-hacks',
      },
      default: {
        exec: 'npm run build',
      }
    },
    clean: {
      default: {
        src: 'build/'
      },
    },
    copy: {
      default: {
        files: [
          {
            expand: true,
            flatten: true,
            // cwd: 'src',
            src: ['src/**', './bitsy-hacks/dist/dungeonHack.js'],
            dest: 'build/',
          }
        ],
      },
    },
    replace: {
        default: {
            options: {
                patterns: [
                    {
                        match: /<\/head>/,
                        replacement: '<script src=dungeonHack.js></script>\n<\/head>',
                    }
                ]
              },
            files: [
                {expand: true, flatten: true, src: ['src/dungeon_adventure.html'], dest: 'build/'}
            ]
        }
    },
    watch: {
      all: {
        files: ['src/**'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('default', ['run', 'clean', 'copy', 'replace']);

};
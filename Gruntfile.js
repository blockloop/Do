module.exports = function(grunt) {
	grunt.initConfig({
    jshint: {
      allFiles: [
        'Gruntfile.js',
        'scripts/**/*js',
        '!scripts/lib/*',
        '!scripts/lib/**/*'
      ]
    },
		less: {
			development: {
				options: {
					paths: ["./styles/less"],
					yuicompress: true
				},
				files: [{
            expand: true,        // Enable dynamic expansion.
            cwd: './styles/less',  // Src matches are relative to this path.
            src: ['*.less'],     // Actual pattern(s) to match.
            dest: './styles/css',  // Destination path prefix.
            ext: '.css',         // Dest filepaths will have this extension.
        }]
			}
		},
		watch: {
			less: {
				files: "./styles/less/*",
				tasks: ["less"]
			},
      scripts: {
        files: ['./scripts/**/*.js','Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          interrupt: true,
        },
      },
		}
	});

	// Default task.
	grunt.registerTask('default', 'watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};


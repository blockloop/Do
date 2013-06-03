module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./styles/less"],
                    yuicompress: true
                },
                files: {
                    "./styles/css/todo.css": "./styles/less/todo.less"
                }
            }
        },
        watch: {
            less: {
                files: "./styles/less/*",
                tasks: ["less"]
            }
        },
    });

    // Default task.
    grunt.registerTask('default', 'watch');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};


/*

grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./assets/stylesheets/less"],
                    yuicompress: true
                },
                files: {
                    "./assets/stylesheets/css/style.css": "./assets/stylesheets/less/style.less"
                }
            }
        },
        watch: {
            files: "./assets/stylesheets/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

*/
/**
* This build file is currently just a starting point, all it does is copy
* all the files from src to public.
*
* It also has a 'watch' configured, so you can leave it running in the background
* and Grunt will run whenever a file is changed.
*
* Todo:
*  - Concat JS files
* 
**/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/**
		* Watch allows us to run grunt watch and have the build process
		* triggered whenever files are changes.
		**/
		watch: {
			scripts: {
				files: ['src/**'],
				tasks: ['dev_build'],
				options: {
					spawn: false,
				},
			},
		},
		clean: {
			build: {
				src: [ 'public' ],
			}
		},
		copy: {
			build: {
				files: [
					{ expand: true, 'cwd' : 'src/', src: 'audio/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'css/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'data/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'fonts/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'img/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'lib/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: 'js/modules/**', dest: 'public/' },
					{ expand: true, 'cwd' : 'src/', src: '*.*', dest: 'public/' },
				]
			}
		},
		concat: {
			// Concat the JS files down into two - one for the basic loading and
			// one for everything else.
			build_loader: {
				src: [ 'src/js/layout.js', 'src/js/keyboard.js', 'src/js/debug.js', 'src/js/game.js', 'src/js/scenes/loading.js'],
				dest: 'public/js/game.js'
			},
			build_all: {
				// Build everything that's not included above except for
				// modules (AMD style) which get copied as-is (for now...)
				src: [ 'src/js/**/*.js', '!src/js/modules/*', '!src/js/debug.js', '!src/js/game.js', '!src/js/scenes/loading.js'],
				dest: 'public/js/all.js'
			}
		},
		// Uglification makes files smaller (and harder to read)
		uglify: {
			build: {
				files: [
					{ expand: true, src: 'public/js/**', filter: 'isFile' }
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// `grunt watch` automaticallt does a dev_build whenever files are changes
	grunt.registerTask('default', ['build']);

	// grunt dev_build lets us build but not uglify
	grunt.registerTask('dev_build', ['clean', 'copy', 'concat']);

	// 'grunt build' packs up as much as possible ready for release
	grunt.registerTask('build', ['clean', 'copy', 'concat', 'uglify']);

};

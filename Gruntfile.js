module.exports = function(grunt){
	grunt.initConfig({
		sass:{
			dist:{
				options:{
					style: 'expanded'
				},
				files:{
					'app/css/style-theme.css':'app/sass/style-theme.scss',
					'app/css/style-login-page.css':'app/sass/style-login-page.scss',
					'app/css/style-forgotLogin-page.css':'app/sass/style-forgotLogin-page.scss',
					'app/css/style-dashboard-page.css':'app/sass/style-dashboard-page.scss'
				}
			}
		},
		uglify:{
			my_target:{
				files:{
					'app/js/script-site.min.js':['app/js/script-site.js']
				}
			}
		},
		watch:{
			js:{
				files:['app/js/script-site.js'],
				livereload:true,
				tasks:['uglify']
			},
			sass:{
				files:['app/sass/*.scss'],
				tasks:['sass']
			}
		},
		browserSync:{
			dev:{
				bsFiles:{
					src:[
						'app/css/*.css',
						'app/js/script.js',
						'app/*.html'
					]
				},
				options:{
					watchTask: true,
					server:{
						baseDir:"./app",
						index:"index.html"
					}
				}
			}
		},
		copy:{
			main:{
				expand:true,
				cwd: 'app/',
				src: ['css/**','js/**','assets/**','*.html','!sass'],
				dest:'dist'
			}
		},
		clean:{
			src: "dist/"
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('gerarApp', ['clean', 'copy']);
}
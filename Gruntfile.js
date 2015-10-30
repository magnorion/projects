module.exports = function(grunt){
	grunt.initConfig({
		sass:{
			dist:{
				options:{
					style: 'compressed'
				},
				files:{
					'app/css/style-theme.css':'app/sass/style-theme.scss',
					'app/css/style-login-page.css':'app/sass/style-login-page.scss',
					'app/css/style-forgotLogin-page.css':'app/sass/style-forgotLogin-page.scss',
					'app/css/style-dashboard-page.css':'app/sass/style-dashboard-page.scss',
					'app/css/style-signin-page.css':'app/sass/style-signin-page.scss',
					'app/css/style-userProfile-page.css':'app/sass/style-userProfile-page.scss',
					'app/css/style-search-page.css':'app/sass/style-search-page.scss',
					'app/css/style-stage-page.css':'app/sass/style-stage-page.scss',
					'app/css/style-stageEvent-page.css':'app/sass/style-stageEvent-page.scss',
					'app/css/style-myData-page.css':'app/sass/style-myData-page.scss'
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
			options:{
				livereload: 8080,
			},
			js:{
				files:['app/js/**/*.js'],
			},
			sass:{
				files:['app/sass/*.scss'],
				tasks:['sass']
			},
			php:{
				files:['app/*.html','app/*.php','app/includes/*.html','app/includes/*.php','play/**/*.html']
			},
			cwd:{
				files:['app/']
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
    grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('gerarApp', ['clean', 'copy']);
}

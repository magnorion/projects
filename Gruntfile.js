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
					'app/css/style-userProfile-page.css':'app/sass/style-userProfile-page.scss'
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
				tasks:['uglify'],
				options:{
					livereload:460
				},
			},
			sass:{
				files:['app/sass/*.scss'],
				tasks:['sass'],
				options:{
					livereload:460
				},
			},
			php:{
				files:['app/*.html','app/*.php','app/includes/*.html','app/includes/*.php'],
				options:{
					livereload: 460,
				}
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
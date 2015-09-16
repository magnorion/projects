<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
		<link rel="stylesheet" href="css/style-userProfile-page.css" /> <!-- Style profile -->
		<link rel="stylesheet" href="css/style-stage-page.css" /> <!-- Style profile -->
	</head>
	<body>
		<!-- Menu principal -->
		<?php require_once("includes/_top-menu.html"); ?>
		<!-- Menu principal end -->
		<div id="body-site">
			<div id="slide-box-placement" class="container inside-color">
				<div id="slide-bogus">
					<img src="css/imgs/background-slide.jpg" />
					<span> Cenário Título | Players: 0 </span>
				</div>
			</div>
			<div id="container">
				<!-- Dados do usuário -->
				<?php require_once("includes/_stage-menu.php"); ?>
				<!-- Dados do usuário end -->
				<div id="data-panel">
					<!-- Sobre -->
					<div class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-file"></i> Sobre </span>
						</div>
						<div id="about-player" class="container inside-color">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
					</div>
					<!-- Sobre end -->
					<!-- Todas as batalhas -->
					<div id="battle-box" class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-globe"></i> Eventos </span>
						</div>
						<div class="container inside-color">
							<ul class="notifications">
								<li class="battle-info"><i class="fa fa-globe"></i> Evento 1 <span class="info-status"> Ver </span></li>
								<li class="battle-info"><i class="fa fa-globe"></i> Evento 2 <span class="info-status"> Ver </span></li>
								<li class="battle-info"><i class="fa fa-globe"></i> Evento 3 <span class="info-status"> Ver </span></li>
								<li> &nbsp; <span class="info-status"> <i class="fa fa-dot-circle-o"></i> Ver todas os eventos </span></li>
							</ul>
						</div>
					</div>
					<!-- Batalhas end -->
				</div>
			</div>
			<!-- Footer site -->
			<?php require_once("includes/_footer.html");?>
			<!-- footer end -->
		</div>
		<!-- scripts -->
		<?php require_once("includes/_scripts-page.html");?>
	</body>
</html>
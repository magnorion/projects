<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
		<link rel="stylesheet" href="css/style-userProfile-page.css" /> <!-- Style profile -->
		<link rel="stylesheet" href="css/style-stage-page.css" /> <!-- Style profile -->
		<link rel="stylesheet" href="css/style-stageEvent-page.css" /> <!-- Style profile -->
	</head>
	<body>
		<!-- Menu principal -->
		<?php require_once("includes/_top-menu.html"); ?>
		<!-- Menu principal end -->
		<div id="body-site">
			<?php require_once("includes/_stage-top.php"); ?>
			<div id="container">
				<!-- Talvez, um menu aqui! -->
				<!-- talvez end( ????? ) -->
				<div id="data-panel">
					<div id="post-add">
						<ul>
							<li> <a href="#">1</a> </li>
							<li> <a href="#">2</a> </li>
							<li> <a href="#">3</a> </li>
						</ul>
					</div>
					<!-- Sobre -->
					<div class="container-data">
						<div class="action-box container inside-color">
							<div class="action-container">
								<div class="left-user-data">
									<div class="action-user-pic">
										<img src="css/imgs/avatar.png" />
									</div>
									<div class="action-user-data">
										<span> Ação feita no dia: ás: </span>
									</div>
									<ul>
										<li><i class="fa fa-user"></i> <a href="user-profile.php">Profile</a></li>
										<li><i class="fa fa-plus"></i> <a href="user-profile.php">Adicionar Player</a></li>
										<li><i class="fa fa-users"></i> <a href="#">Ver personagens</a></li>
									</ul>
								</div>
								<span class="action-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
						</div>
					</div>
				</div>	
				<div id="search-pagination">
					<ul>
						<li> <a href="#">1</a> </li>
						<li> <a href="#">2</a> </li>
						<li> <a href="#">3</a> </li>
					</ul>
				</div>				
				<!-- Footer site -->
				<?php require_once("includes/_footer.html");?>
				<!-- footer end -->
			</div>
		</div>
		<!-- scripts -->
		<?php require_once("includes/_scripts-page.html");?>
	</body>
</html>
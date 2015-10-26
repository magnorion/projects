<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
		<style>
			.user-friends{ margin-left: 0px !important; }
		</style>
		<link rel="stylesheet" href="assets/owl.carousel/dist/assets/owl.carousel.min.css" />
	</head>
	<body>
		<!-- Menu principal -->
		<?php require_once("includes/_top-menu.html"); ?>
		<!-- Menu principal end -->
		<div id="body-site">
			<div id="container">
				<!-- Dados do usuário -->
				<?php require_once("includes/_user-datails.html"); ?>
				<!-- Dados do usuário end -->
				<div id="data-panel">
					<!-- busca -->
					<div id="search-placement">
						<div id="search-input" class="theme-color">
							<input type="text" class="inside-color" placeholder="Buscar bogus" name="search-site" />
							<button> <i class="fa fa-search"></i> </button>
						</div>
					</div>
					<!-- end -->
					<!-- Bogus select -->
					<div class="container-data theme-color">
						<div class="box-title">
							<span> <i class="fa fa-users"></i> Meus Personagens </span>
							<span class="obs-cards"> <span>2/10</span> </span>
						</div>
						<div class="container inside-color">
							<div id="bogus-select-carousel" class="cards-placement owl-carousel">
								<div class="card config-slot" id="new-bogus">
									<i class="fa fa-user-plus"></i>
								</div>
								<div class="card bogus-select" title="bogus">
									<img src="css/imgs/avatar.png" />
								</div>
								<div class="card bogus-select" title="bogus">
									<img src="css/imgs/avatar.png" />
								</div>
								<div class="card config-slot" id="new-slot">
									<i class="fa fa-plus"></i>
								</div>
							</div>
						</div>
					</div>
					<!-- Bogus select end -->
					<?php ############# Relatório de batalha #############################
					/*
					<!-- Feeding -->
					<div class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-exclamation"></i> Relatórios </span>
						</div>
						<div class="container inside-color">
							<ul class="notifications">
								<li class="status-win"><i class="fa fa-dot-circle-o"></i> Personagem A - Venceu! <span class="info-status"> <a href="#" data-reveal-id="statusBattle">Ver Info</a> </span></li>
								<li class="status-loose"><i class="fa fa-dot-circle-o"></i> Personagem B - Perdeu! <span class="info-status"> <a href="#" data-reveal-id="statusBattle">Ver Info</a> </span></li>
								<li class="status-win"><i class="fa fa-dot-circle-o"></i> Personagem C - Venceu! <span class="info-status"> <a href="#" data-reveal-id="statusBattle">Ver Info</a> </span></li>
								<li> &nbsp; <span class="info-status"> <i class="fa fa-dot-circle-o"></i> Ver todas as notificações </span></li>
							</ul>
						</div>
					</div>
					<!-- Feeding end -->
					*/
					######################################################### ?>
					<!-- cenário select -->
					<div class="container-data theme-color after-box">
						<div class="box-title">
							<span> <i class="fa fa-globe"></i> Meus Cenários </span>
						</div>
						<div class="container inside-color">
							<div id="stage-select-carousel" class="cards-placement owl-carousel">
								<a href="search-page.php">
									<div class="card config-slot" id="find-cenary">
										<i class="fa fa-search"></i>
									</div>
								</a>
								<div class="card cenary-select">
									<a href="stage.php"><img src="css/imgs/thumb-search.jpg" /></a>
								</div>
								<div class="card cenary-select">
									<a href="stage.php"><img src="css/imgs/thumb-search.jpg" /></a>
								</div>
								<div class="card cenary-select">
									<a href="stage.php"><img src="css/imgs/thumb-search.jpg" /></a>
								</div>
							</div>
						</div>
					</div>
					<!-- Bogus select end -->
					<!-- end -->
					<?php ############################ Área de batalhas ######################## 
					/*
					<!-- Todas as batalhas -->
					<div id="battle-box" class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-trophy"></i> Minhas batalhas </span>
						</div>
						<div class="container inside-color">
							<ul class="notifications">
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 1 <span class="info-status"> <a href="stage.php">Ir para o local</a> </span></li>
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 2 <span class="info-status"> <a href="stage.php">Ir para o local</a> </span></li>
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 3 <span class="info-status"> <a href="stage.php">Ir para o local</a> </span></li>
								<li> &nbsp; <span class="info-status"> <i class="fa fa-dot-circle-o"></i> Ver todas as batalhas </span></li>
							</ul>
						</div>
					</div>
					<!-- Batalhas end -->
					############################################
					*/ ?>

				</div>
			</div>
			<!--- MODAL CONTROL -->
			<div id="statusBattle" class="reveal-modal">
			     <h1></h1>
			     <p></p>
			     <a class="close-reveal-modal">&#215;</a>
			</div>
			<!-- MODAL END -->		
			<!-- Footer site -->
			<?php require_once("includes/_footer.html");?>
			<!-- footer end -->
		</div>
		<!-- scripts -->
		<?php require_once("includes/_scripts-page.html");?>
		<script src="assets/owl.carousel/dist/owl.carousel.min.js"></script>
		<script>
			$("#bogus-select-carousel").owlCarousel();
			$("#stage-select-carousel").owlCarousel();
		</script>
	</body>
</html>
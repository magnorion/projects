<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
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
						</div>
						<div class="container inside-color">
							<div id="cards-placement">
								<div class="card config-slot" id="new-bogus">
									<i class="fa fa-user-plus"></i>
								</div>
								<div class="card bogus-select">
									<img src="css/imgs/avatar.png" />
								</div>
								<div class="card bogus-select">
									<img src="css/imgs/avatar.png" />
								</div>
								<div class="card config-slot" id="new-slot">
									<i class="fa fa-plus-square-o"></i>
								</div>
							</div>
						</div>
					</div>
					<!-- Bogus select end -->
					<!-- Feeding -->
					<div class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-exclamation"></i> Notificações </span>
						</div>
						<div class="container inside-color">
							<ul class="notifications">
								<li class="status-win"><i class="fa fa-dot-circle-o"></i> Personagem A - Venceu! <span class="info-status"> Ver Info </span></li>
								<li class="status-loose"><i class="fa fa-dot-circle-o"></i> Personagem B - Perdeu! <span class="info-status"> Ver Info </span></li>
								<li class="status-win"><i class="fa fa-dot-circle-o"></i> Personagem C - Venceu! <span class="info-status"> Ver Info </span></li>
								<li> &nbsp; <span class="info-status"> <i class="fa fa-dot-circle-o"></i> Ver todas as notificações </span></li>
							</ul>
						</div>
					</div>
					<!-- Feeding end -->
					<!-- Todas as batalhas -->
					<div id="battle-box" class="container-data after-box">
						<div class="box-title">
							<span> <i class="fa fa-trophy"></i> Minhas batalhas </span>
						</div>
						<div class="container inside-color">
							<ul class="notifications">
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 1 <span class="info-status"> Ir para o local </span></li>
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 2 <span class="info-status"> Ir para o local </span></li>
								<li class="battle-info"><i class="fa fa-dot-circle-o"></i> Field 3 <span class="info-status"> Ir para o local </span></li>
								<li> &nbsp; <span class="info-status"> <i class="fa fa-dot-circle-o"></i> Ver todas as batalhas </span></li>
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
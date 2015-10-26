<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
		<style>
			.user-friends{ margin-left: 0px !important; }
		</style>
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
							<span> <i class="fa fa-file"></i> Minhas Informações </span>
						</div>
						<div class="container inside-color">
							<form name="data-user" id="data-user" method="post">
								<div>
									<label>  </label>
								</div>
							</form>
						</div>
					</div>
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
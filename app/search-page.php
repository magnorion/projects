<html>
	<head>
		<?php require_once("includes/_title-page.php"); ?>
		<meta charset="utf-8" />
		<?php require_once("includes/_style-page.html"); ?>
		<link rel="stylesheet" href="css/style-search-page.css" /> <!-- Style dashboard -->
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
						<form name="search-site">
							<div id="search-input" class="theme-color">
								<input type="text" class="inside-color" placeholder="Buscar..." name="search-site" />
								<div id="params-search">
									<span><label> Bogus </label><input type="radio" checked name="search-type" value="bogus" /></span>
									<span><label> Player </label><input type="radio" name="search-type" value="player" /></span>
									<span><label> Cenário </label><input type="radio" name="search-type" value="comunidade" /></span>
								</div>
								<button> <i class="fa fa-search"></i> </button>
							</div>
						</form>
					</div>
					<!-- end -->
					<!-- Bogus select -->
					<div class="container-data theme-color">
						<div class="box-title">
							<span> <i class="fa fa-search"></i> Resultado da pesquisa </span>
						</div>
						<div class="container inside-color border-correct">
							<div class="search-result-box">
								<img class="img-result" src="css/imgs/thumb-search.jpg" />
								<div class="text-search-container">
									<span> Resultado 1 </span>
								</div>
							</div>							
							<div class="search-result-box">
								<img class="img-result" src="css/imgs/thumb-search.jpg" />
								<div class="text-search-container">
									<span> Resultado 2 </span>
								</div>
							</div>							
							<div class="search-result-box">
								<img class="img-result" src="css/imgs/thumb-search.jpg" />
								<div class="text-search-container">
									<span> Resultado 3 </span>
								</div>
							</div>							
							<div class="search-result-box">
								<img class="img-result" src="css/imgs/thumb-search.jpg" />
								<div class="text-search-container">
									<span> Resultado 4 </span>
								</div>
							</div>							
							<div class="search-result-box">
								<img class="img-result" src="css/imgs/thumb-search.jpg" />
								<div class="text-search-container">
									<span> Resultado 5 </span>
								</div>
							</div>
							<div id="search-pagination">
								<ul>
									<li> <a href="#">1</a> </li>
									<li> <a href="#">2</a> </li>
									<li> <a href="#">3</a> </li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Bogus select end -->
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
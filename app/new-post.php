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
				<div id="data-panel">
					<div class="container-data new-post-placement">
							<div class="box-title">
								<span> <i class="fa fa-plus"></i> Nova ação </span>
								<span id="post-test"> <a href="#"><i class="fa fa-desktop"></i> Preview </a></span>
							</div>
						<div class="action-box container inside-color" id="new-post-action">
							<form id='new-form'>
								<textarea name='post-input'></textarea>
								<div id="preview-post"></div>
								<button class="btn btn-submit"> END </button>
								<p id="chars-count"> Faltam <span>2200</span> caracteres</p>
							</form>
						</div>
					</div>					
				</div>
			</div>
			<!--- MODAL CONTROL -->
			<a href="#" id="modalTrigger" data-reveal-id="banTags">&nbsp;</a>
			<div id="banTags" class="reveal-modal">
			     <h1> Atenção </h1>
			     <p> Algumas tags foram <span>banidas</span> </p>
			     <ul>
			     	<li>style</li>
					<li>body</li>
					<li>html</li>
					<li>iframe</li>
					<li>script</li>
					<li>action</li>
					<li>background</li>
			     </ul>
			     <a class="close-reveal-modal">&#215;</a>
			</div>
			<!-- MODAL END -->
			<!-- Footer site -->
			<?php require_once("includes/_footer.html");?>
			<!-- footer end -->
		</div>
		<!-- scripts -->
		<?php require_once("includes/_scripts-page.html");?>
	</body>
</html>
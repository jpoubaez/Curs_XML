<?php
	$musica = simplexml_load_file("https://tallerxmljpou.000webhostapp.com/musica.xml"); // carrega el DOM de l'XML
?>
<!DOCTYPE html>
<!-- saved from url=(0041)http://ferranprofe.x10host.com/portfoli0/ -->
<html lang="catalan">
	<head>
		<META charset="UTF-8">
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
		<style type="text/css">
			#playlist , #playlist img , #playlist audio{width: 300px; }
			#playlist ul {
				list-style : none; 
				background-color: black; 
				color: white; 
				padding-top: 10px; 
				padding-bottom: 10px; }
			#playlist ul li {cursor : pointer; }
			.active { color: orange; }
		</style>
		<script type="text/javascript">
			$(function(){
				$("#llista li:first-child").addClass("active"); 

				$("#llista li").on("click",function(){
				$("#llista li").removeClass("active"); 
				$("#audio").attr("src",$(this).attr("audio")); 
				document.getElementById("audio").play(); 
				$("#portada").attr("src",$(this).attr("portada")); 
				$(this).addClass("active"); 
			}); 
			}); 
		</script>
	</head>
	<body>
		<!-- 1a canço per defecte -->
		<h1>Música Rock</h1>
		<div id="playlist">
			<img id="portada" src="<?php echo $musica->canco[0]->portada ?>">
			<audio controls id="audio"><source id="source" src="<?php echo $musica->canco[0]->audio ?>" type="audio/mpeg">El teu navegador no soporta audio
			</audio>
			<ul id="llista">
				<?php for ($x=0;$x<count($musica->canco);$x++): ?>
				<li audio="<?php echo $musica->canco[$x]->audio ?>" portada="<?php echo $musica->canco[$x]->portada ?>">
					<?php echo $musica->canco[$x]->artista . " - " .  $musica->canco[$x]->titol ?>
				</li>
				<?php endfor ?>
			</ul>
		</div>
	</body>
</html>
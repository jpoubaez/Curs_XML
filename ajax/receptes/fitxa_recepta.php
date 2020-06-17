<?php
error_reporting(E_ALL);       // Activem en fase de desenvolupament per tal de veure els errors
ini_set('display_errors', '1');

$params = array('id' => $_GET['id']);   // Agafem el parametre "id" que serà enviat per l'Ajax i que correspont al número de mineral escollit en el desplegable

$id = $_GET["id"]; 

$xslDoc = new DOMDocument();
$xslDoc->load("fitxa_recepta.xsl");

$xmlDoc = new DOMDocument();
$xmlDoc->load("https://script.google.com/macros/s/AKfycbwYS6JJDLVC7ynsoBO0yiLrD5Upd6hN8Bn6Xf3z2b67cAiyJvA/exec?accio=xml&id=" . $id);

$xsltProcessor = new XSLTProcessor();
$xsltProcessor->registerPHPFunctions();
$xsltProcessor->importStyleSheet($xslDoc);

echo $xsltProcessor->transformToXML($xmlDoc);
?>
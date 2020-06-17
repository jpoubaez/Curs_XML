<?php
error_reporting(E_ALL);       // Activem en fase de desenvolupament per tal de veure els errors 
ini_set('display_errors', '1');

$params = array('id' => $_GET['id']);   // Agafem el parametre "id" que serà enviat per l'Ajax i que correspont al número de mineral escollit en el desplegable 

$xslDoc = new DOMDocument();
$xslDoc->load("ws_minerals5.xsl");

$xmlDoc = new DOMDocument();
$xmlDoc->load("ws_minerals5.xml");

$xsltProcessor = new XSLTProcessor();
$xsltProcessor->registerPHPFunctions();
$xsltProcessor->importStyleSheet($xslDoc);

foreach ($params as $key => $val)
$xsltProcessor->setParameter('', $key, $val);

echo $xsltProcessor->transformToXML($xmlDoc);
?>


<?php
error_reporting(E_ALL);       // Activem en fase de desenvolupament per tal de veure els errors 
ini_set('display_errors', '1');


$xslDoc = new DOMDocument();
$xslDoc->load("ajax_discos.xsl");

$xmlDoc = new DOMDocument();
$xmlDoc->load("https://script.google.com/macros/s/AKfycbwhaUpQgYZvyKlm7XObi9YMUXRBNhfSGIaSl0oBNOG9Z5Tm7N8/exec?accio=xml&metode=llista&id=0");
			  
$xsltProcessor = new XSLTProcessor();
$xsltProcessor->registerPHPFunctions();
$xsltProcessor->importStyleSheet($xslDoc);

//foreach ($params as $key => $val)
//$xsltProcessor->setParameter('', $key, $val);

echo $xsltProcessor->transformToXML($xmlDoc);
?>


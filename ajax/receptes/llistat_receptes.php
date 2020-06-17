<?php
error_reporting(E_ALL);       // Activem en fase de desenvolupament per tal de veure els errors 
ini_set('display_errors', '1');


$xslDoc = new DOMDocument();
$xslDoc->load("ajax_receptes.xsl");

$xmlDoc = new DOMDocument();
$xmlDoc->load("https://script.google.com/macros/s/AKfycbwYS6JJDLVC7ynsoBO0yiLrD5Upd6hN8Bn6Xf3z2b67cAiyJvA/exec?accio=xml&id=0&metode=llista");

$xsltProcessor = new XSLTProcessor();
$xsltProcessor->registerPHPFunctions();
$xsltProcessor->importStyleSheet($xslDoc);

//foreach ($params as $key => $val)
//$xsltProcessor->setParameter('', $key, $val);

echo $xsltProcessor->transformToXML($xmlDoc);
?>


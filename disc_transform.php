<?php

if(isset($_REQUEST["model"])) $model = "&model=".$_REQUEST["model"] ; 
else $model = ""; 

if(isset($_REQUEST["id"])) $id= "&id=" . $_REQUEST["id"] ; 
else $id = "&id=0"; 

if(isset($_REQUEST["idioma"])) $idioma= "&idioma=" . $_REQUEST["idioma"] ; 
else $idioma = "&idioma=ca"; 

 

$url="https://script.google.com/macros/s/AKfycbxoHDmx15Tnbu85U2LE2-5MdzRiCK33F19Lwo75pCjPPhrP-z4/exec?accio=xml".$model.$id .$idioma ; // url de la pagina que queremos obtener  



$xml_doc = new DOMDocument();
$xml_doc->load($url);


// XSL
$xsl_doc = new DOMDocument();
$xsl_doc->load("discos.xsl");

// Proc
$proc = new XSLTProcessor();
$proc->importStylesheet($xsl_doc);
$newdom = $proc->transformToDoc($xml_doc);

print $newdom->saveXML();

?>
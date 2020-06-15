

<?php

// Comprovem paràmetres rebuts i els posem a variables
$accio="xml"; // xml o json
$metode_xml=""; // resumit o sencer
$metode_json=""; // llista o un sol element
$id="0"; // 0 o 1 2 3 ...
$idioma="ca"; // en fr ...

if (isset($_GET["sortida"]))  $accio=$_GET["sortida"]; // xml o json
if (isset($_GET["indx_mostrar"]))  $id=$_GET["indx_mostrar"]; // 0 o 1 2 3 ...

if (isset($_GET["XMLResumit"])) $metode_xml=$_GET["XMLResumit"]; // resumit o sencer en XML
if (isset($_GET["JSONllista"])) $metode_json=$_GET["JSONllista"]; // llistat o un de sol en JSON

if (isset($_GET["idioma"])) $idioma=$_GET["idioma"]; // en fr de ...

//var_dump($_GET);

// Construim crida al web service segons paràmetre rebut
if ($accio=="xml") {
	// Si XML
	$url1 = "https://script.google.com/macros/s/AKfycbwhaUpQgYZvyKlm7XObi9YMUXRBNhfSGIaSl0oBNOG9Z5Tm7N8/exec?accio=".$accio."&id=".$id."&metode=".$metode_xml."&idioma=".$idioma;
} else {
	// Si JSON
	$url1 = "https://script.google.com/macros/s/AKfycbwhaUpQgYZvyKlm7XObi9YMUXRBNhfSGIaSl0oBNOG9Z5Tm7N8/exec?accio=".$accio."&id=".$id."&metode=".$metode_json."&idioma=".$idioma;
}


// Printem xml o json rebut
$data =file_get_contents($url1);   // carreguem les dades procedents del webservice a la variable $data
echo($data);
?>
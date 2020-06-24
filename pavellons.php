<?php

$conn=mysqli_connect("localhost","root","","pavellons"); 
//$conn=mysqli_connect("localhost","id13758673_joanpou","J1anpoubaez_","id13758673_prova_rss");


$sql="SELECT * FROM pavellons " ; 
$result=mysqli_query($conn, $sql);   

// Capçalera fitxer XML a generar

$t = '<?xml version="1.0" encoding="utf-8" ?>' .chr(13).chr(10) ;
$t .= '<kml xmlns="http://www.opengis.net/kml/2.2">' . chr(13) . chr(10) ; // etiqueta arrel
$t .= '<Document>' . chr(13) . chr(10) ; // etiqueta Document
$t .= '<name>Lliga ACB </name> ' . chr(13) . chr(10) ;
$t .= '<description><![CDATA[ Descripció del fitxer ]]></description>' . chr(13) . chr(10) ;
$t .= '<Folder>' . chr(13) . chr(10) ;
$t .= '<name>Pavellons ACB</name>' . chr(13) . chr(10) ;
$t .= "<Style id='basket'>" . chr(13) . chr(10) ;
$t .= "<IconStyle>" . chr(13) . chr(10) ;
//$t .= "<color>ff0000ff</color>" . chr(13) . chr(10) ;
$t .= "<scale>1.1</scale>" . chr(13) . chr(10) ;
$t .= "<Icon>" . chr(13) . chr(10) ;
$t .= "<href>http://tallerxml.web44.net/unitat2/basket.png</href>" . chr(13) . chr(10) ;
$t .= "</Icon>" . chr(13) . chr(10) ;
$t .= "</IconStyle>" . chr(13) . chr(10) ;
$t .= "</Style>" . chr(13) . chr(10) ;

// A partir de la consulta anirem omplint cada node
while ($row = $result->fetch_assoc()) 
{
$t .= '<Placemark>' . chr(13) . chr(10) ; // Obrim node de cada lloc
$t .= "<styleUrl>#basket</styleUrl> " . chr(13) . chr(10) ; // defineix l'estil de l'icona del lloc
$t .= '<name>'. utf8_encode($row["club"]) . "</name>" . chr(13) . chr(10) ;
$t .="<description><![CDATA[". utf8_encode($row["descripcio"]) . "]]></description>" . chr(13) . chr(10) ;
$t .= '<Point>';
$t .= '<coordinates>'. utf8_encode($row["coordenades"]) . "</coordinates>" . chr(13) . chr(10) ;
$t .= '</Point>' . chr(13) . chr(10) ;
$t .= '</Placemark>' . chr(13) . chr(10) ;
}
$t .= '</Folder>' . chr(13) . chr(10) ;
$t .= '</Document>' . chr(13) . chr(10) ; // etiqueta Document
$t .= '</kml>';

header("Content-type: text/xml; charset=utf-8"); // Capçalera de fitxer XML
echo $t ;
?>
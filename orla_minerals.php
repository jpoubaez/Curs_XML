<?php

//$conn=mysqli_connect("local","usuari","contrasenya","Base_Dades"); 
$conn=mysqli_connect("localhost","id13758673_joanpou","J1anpoubaez_","id13758673_prova_rss");


if(isset($_REQUEST["grup"])) $grup = $_REQUEST["grup"];
else $grup="Silicat" ;

$sql ="SELECT * FROM minerals Where upper(grup) like '%" . $grup . "%'" ;
$result=mysqli_query($conn, $sql);   

$t = '<?xml version="1.0" encoding="UTF-8"?>' . chr(13) . chr(10);
$t .= '<svg width="1060" height="960" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' .chr(13) . chr(10);
$t .= '<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->' . chr(13) . chr(10);
$t .='<!-- Generat amb un script creat pel Taller XML -->' . chr(13) . chr(10);
$t .=' <g> ' . chr(13) . chr(10) ;
$t .= '<image xlink:href="https://cdn.pixabay.com/photo/2017/01/24/10/58/sand-2005066_960_720.jpg" id="svg_1" height="920" width="1060" y="-150.222222" x="2"/>';
$t .='<title>' . $grup . '</title>' . chr(13) . chr(10);
$t .= '<text transform="matrix(5.34483, 0, 0, 4.05, -2268, -260.267)" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="titol" y="99.7531" x="496.27959" stroke-width="2" stroke="#0000ff" fill="#000000">' . $grup . '</text>' . chr(13) . chr(10);
$c = 0;
$f= 0;

$x=0; 

while ($row = $result->fetch_assoc())
{
if (strlen($row["foto"])>1) // eliminar si no tenen foto 
{
$x++ ; 	
$c++;
//if( ($c%7) == 0 )
if( ($c%5) == 0 )
{
$c = 1;
$f = $f+1;
}

$posy_i= 200 + (200*$f) ;
$posx_i=(182 * ($c-1) ) + 50 ;
$posy_t=330 + (200*$f) ;
$posx_t= $posx_i + 50 ;

$t .= '<image xlink:href="' . $row["foto"] . '" id="mineral' . $x .'" height="110.000002" width="132.000006" y="' . $posy_i . '" x="' . $posx_i .'"/> ' . chr(13) . chr(10) ;
//$t .= '<text transform="matrix(1.18627, 0, 0, 1, -5.12255, 0)" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="14" id="svg_' . $x .'" y="' . $posy_t .'" x="' . $posx_t .'" stroke-width="0" stroke="#000000" fill="#000000">' . utf8_decode(mysql_result($res,$x,"nom")) .'</text>' . chr(13) . chr(10) ;
$t .= '<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="14" id="svg_' . $x .'" y="' . $posy_t .'" x="' . $posx_t .'" stroke-width="0" stroke="#000000" fill="#000000">' . utf8_encode($row["nom"]) .'</text>' . chr(13) . chr(10) ;
}
}


$t .= ' </g> ' . chr(13) . chr(10) ;
$t .= ' </svg> ' . chr(13) . chr(10) ;

// Capçalera fitxer XML a generar


header("Content-type: text/xml; charset=utf-8"); // Capçalera de fitxer XML
echo $t ;
?>
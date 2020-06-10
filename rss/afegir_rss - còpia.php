<?php
 
$conn=mysqli_connect("servidor mysql","usuari","** contrasenya**","BD"); 
 
$sx = simplexml_load_file('https://micocina-facil.com/rss-news.xml'); // carrega el fitxer XML de la font RSS que li indiquem

// llegix la informació del canal
foreach($sx->channel as $item)
{
$tit = addslashes($item->title);
echo $tit ."<br>";
echo $item->link ."<br>";
echo $item->language ."<br>";
$cp = addslashes($item->copyright);
echo $cp ."<br>";

// Grava les dades del canal a la taula "canals"

$sql = "INSERT INTO canals (data_alta,title,link,language,copyright) VALUES (NOW(),'$tit','$item->link','$item->language','$cp') ";  
$res=mysqli_query($conn, $sql); 
if($res) echo "Hem gravat la capçalera" ;  
else echo "Error en la gravació <br> ";
$id = $res; 
}


// Llegirem noticies
foreach($sx->channel->item as $item)
{
$tit = addslashes($item->title);
echo $tit ."<br>";
echo $item->link ."<br>";
echo $item->guid ."<br>";
$descri = addslashes($item->description);  //  L'addslahes ens afegueix les barres "/" per evitar tenir problemes amb els caràcters especials com les cometes ,,,,
echo $descri . "<br>";

// Grava cada noticia llegida del RSS a la taula de noticies
$sql = "INSERT INTO noticies (id_canal,data,title,guid,description) VALUES ($id,NOW(),'$tit','$item->guid','$descri') "; 
$res=mysqli_query($conn, $sql); 
if($res) echo "Registre afegit" . $tit ;
else echo "Error en la gravació <br> ";
}
echo "Fi de la gravació <br />" ;
?>
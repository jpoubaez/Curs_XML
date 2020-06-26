<?php

$nom = $_REQUEST["nom"]; 
$email = $_REQUEST["email"]; 
$comentaris = $_REQUEST["comentaris"]; 
$edat = $_REQUEST["edat"]; 
$disc = $_REQUEST["Discos"]; 

/* connexió BD del servidor sigui local o hosting */

/* $conn=mysqli_connect("servidor","usuari","contrasenya","BD"); */
$conn=mysqli_connect('localhost','id13758673_joanpou','J1anpoubaez_','id13758673_prova_rss');
if (!$conn) echo "No connecta!!<br>";
else echo "Connectat OK!!<br>";

$sql= "INSERT INTO formularidiscos (data,nom,email,comentaris,edat,disc) VALUES(now(),'$nom','$email','$comentaris',$edat,'$disc')"; 

//$sql= "INSERT INTO formulari (nom) VALUES('$nom')";

$result=mysqli_query($conn, $sql); 

if (!$result) echo "No hem pogut fer l'insert!!";  
else echo "Inserció feta" ;  // Enviem ok
?>
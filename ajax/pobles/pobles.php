<?php
$prov=$_REQUEST["prov"];

//connexió BD del servidor sigui local o hosting
//$conn=mysqli_connect("servidor","usuari","contrasenya","BD");
$conn=mysqli_connect("localhost","root","","pobles");
 

$sql= "SELECT * FROM poblacion where codigopr ='" .  $prov  . "' ORDER BY poblacion " ; // consulta Mysql dels pobles que tenen el codi provincia escollit
$result=mysqli_query($conn, $sql);   

// A partir de la consulta anirem omplint cada node "item"
$t = '<select name="poble" >';   // Obrim un desplegable

//while ($row = $result->fetch_assoc())
while ($row = mysqli_fetch_assoc($result))
{
$t .="<option>".  $row["poblacion"] . "</option>" . chr(13) . chr(10) ;//  Afegim opció
}

$t .="</select>" . chr(13) . chr(10) ;   // Tanquem el desplegable

echo $t ;   // Enviem el codi creat

?>
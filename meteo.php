<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Meteo</title>
    <style type="text/css">
        body {
            background-color: #cccccc;
        }
div {
 width: 300px;
 height: 300px;
}

.temp {
font-size:30px;
font-decoration: bold;
color: white;
text-align:center;  
top: -10px;
}

.ciutat {
font-size:20px;
font-decoration: bold;
color: gray;
text-align:center;  
}

.cel {
font-size:22px;
font-decoration: bold;
color: white;
text-align:center;  
}

</style>
</head>
<body>

<?php

//Llegim la IP del client per identificar localització geogràfica del client

$ip = $_SERVER['REMOTE_ADDR'];  // Variables d'entorn Apache llegides pel php : https://www.php.net/manual/es/reserved.variables.server.php

//$ip = "192.64.147.150"; //  IP NASA  https://api.jsonbin.io/g/192.64.147.150

//$ip = "147.161.80.120"; //  IP casa https://api.jsonbin.io/g/147.161.80.120

echo "La meva ip és: ".$ip."<br/>";
$url1 = "https://api.jsonbin.io/g/".$ip;   // contruim la url per obtenir les dades de geolocalització a partir de la IP
//$url = "geoip.json";

$data = file_get_contents($url1);   // carreguem les dades procedents del webservice a la variable $data
$lc = json_decode($data, true);     // decodifiquem les dades JSON a una matriu(array)


// Mirem abans l'estructura de les dades retornades emprant un JSON PARSER pere exemple : https://jsonformatter.org/json-parser

$ciutat = $lc["data"]["city"];  // recuperem la ciutat
$lat = $lc["data"]["ll"][0]  ;  // Recuperem la 1a coordenada la latitud  
$long = $lc["data"]["ll"][1]  ;  // Recuperem la 2a coordenada la longitud

echo "estic a : ".$ciutat . " / lat: " . $lat . " long: " . $long . " <br /> <hr /><br />";


// A partir de les coordenades obtenim les dades metereològiques
// Farem servir el servei de http://api.openweathermap.org
// Ens haurem de validar per obtenir l'APPID(API_KEY)
// En aquesta ocasió els parametres que pasarem son:
// latitut i longitud del lloc
//l'AAID és la clau d'usuari una vegada donats d'alta
//Lang el codi de l'idioma que volem ens mostri els resultats
//units = En quin sistema volem ens presenti els resultats


//$url2="http://api.openweathermap.org/data/2.5/weather?lat=" . $lat . "&lon=" . $long ."&APPID=860e58f27bb7578c0db0b31bc5b40953&lang=es&units=metric";

$ID ="860e58f27bb7578c0db0b31bc5b40953";  // APPID faclitat al donar-se d'alta a openweathermap  

//$url2="http://api.openweathermap.org/data/2.5/weather?q=" . $ciutat."&APPID=". $ID ."&lang=es&units=metric";
$url2="http://api.openweathermap.org/data/2.5/weather?lat=" . $lat . "&lon=" . $long."&APPID=". $ID ."&lang=ca&units=metric";


$data2 = file_get_contents($url2);   // carreguem le sdades procedents del webservice a la variable $data
$meteo = json_decode($data2, true);     // decodifiquem le sdades JSON a una matriu(array)
//var_dump($meteo);
$cel =  $meteo["weather"]["0"]["description"];
$icona= $meteo["weather"]["0"]["icon"];

$temperatura = $meteo["main"]["temp"];
$ciutat2= $meteo["name"];

$url_icona= 'http://openweathermap.org/img/wn/'. $icona .'@2x.png';

// http://openweathermap.org/img/wn/10d@2x.png  patró per a la icona
echo '<div id="temps" > ';
echo '<img src="' . $url_icona . '"  align="center"/> <br />' ;
echo '<span class="temp">' . $temperatura . ' ºC <br /></span>';
echo '<span class="ciutat">' . $ciutat2 . '</span><br />';
echo '<span class="cel">' . $cel . '</span>';
echo '</div>';
echo '<style>';

?>
</body>
</html>
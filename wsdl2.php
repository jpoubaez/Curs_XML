<?php
$IP_ADDRESS=$_SERVER["REMOTE_ADDR"] ;  // Agafem la Ip del client des del servidor  
$url = "http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl"; // url del servei WSDL 
try {
 $client = new SoapClient($url, [ "trace" => 1 ] ); // Creem un objecte de connexió Soap
 $result = $client->ResolveIP( [ "ipAddress" => $IP_ADDRESS, "licenseKey" => "0" ] ); // Enviem les dades de les dues variables com a paràmetres 
 
 // Llegim les dades rebudes de cada variable 
 echo "Ciutat : <b>" . $result->ResolveIPResult->City . "</b><br/>"; 
 echo "Numero provincia : <b>" . $result->ResolveIPResult->StateProvince . "</b><br/>"; 
 echo "País : <b>" . $result->ResolveIPResult->Country . "</b><br/>"; 
 echo "Organització : <b>" . $result->ResolveIPResult->Organization . "</b><br/>"; 
 echo "Latitud : <b>" . $result->ResolveIPResult->Latitude . "</b><br/>"; 
 echo "Longitud : <b>" . $result->ResolveIPResult->Longitude . "</b><br/>"; 
 echo "Codi Àrea : <b>" . $result->ResolveIPResult->AreaCode . "</b><br/>"; 
 echo "Zona horària : <b>" . $result->ResolveIPResult->TimeZone  . "</b><br/>"; 
 echo "Nom Regió : <b>" . $result->ResolveIPResult->RegionName  . "</b><br/>"; 
 echo "Codi país : <b>" . $result->ResolveIPResult->CountryCode  . "</b><br/>"; 
 
//print_r($result);  // per fer una visualització general de les dades rebudes 
} catch ( SoapFault $e ) { // En cas de rebre missatges d'error 
 echo $e->getMessage();
}

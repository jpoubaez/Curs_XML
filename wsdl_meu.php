<?php
//$IP_ADDRESS=$_SERVER["REMOTE_ADDR"] ;  // Agafem la Ip del client des del servidor 
// No ho necessitem aquí 
// li passem codi ISO del país
$url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL"; // url del servei WSDL
if ((isset($_POST["codi"])) && ($_POST["codi"]!="")) $codi_pais=$_POST["codi"];
else $codi_pais="AD";
try {
 $client = new SoapClient($url, [ "trace" => 1 ] ); // Creem un objecte de connexió Soap
 $result = $client->FullCountryInfo ( [ "sCountryISOCode" => $codi_pais ] ); // Enviem les dades  com a paràmetres 
 
 // Llegim les dades rebudes de cada variable 
  echo "Codi ISO és : <b>" . $result->FullCountryInfoResult->sISOCode . "</b><br/>";
  echo "El país és : <b>" . $result->FullCountryInfoResult->sName . "</b><br/>";  
  if ($result->FullCountryInfoResult->sCapitalCity) {
	 
	  echo "La capital de ".$codi_pais." és : <b>" . $result->FullCountryInfoResult->sCapitalCity . "</b><br/>"; 
	  echo "El prefix telefònic de ".$codi_pais." és : <b>" . $result->FullCountryInfoResult->sPhoneCode . "</b><br/>"; 
	  echo "El codi del continent de ".$codi_pais." és : <b>" . $result->FullCountryInfoResult->sContinentCode . "</b><br/>";
	  echo "La moneda de ".$codi_pais." és : <b>" . $result->FullCountryInfoResult->sCurrencyISOCode . "</b><br/>";
	  echo "La bandera de ".$codi_pais." és : <span><img src='".$result->FullCountryInfoResult->sCountryFlag."' alt='bandera' width='250' height='125'></span> <br/>";
	  
		  if (is_array($result->FullCountryInfoResult->Languages->tLanguage)) {
		  	foreach ($result->FullCountryInfoResult->Languages->tLanguage as $llengua) {
		  		echo "La llengua de ".$codi_pais." és : <b>" . $llengua->sISOCode . " -- " . $llengua->sName . "</b><br/>";
		  	}

		  }
		  else echo "La llengua de ".$codi_pais." és : <b>" . $result->FullCountryInfoResult->Languages->tLanguage->sISOCode . " -- " . $result->FullCountryInfoResult->Languages->tLanguage->sName . "</b><br/>";
	}	  


//print_r($result);  // per fer una visualització general de les dades rebudes 
} catch ( SoapFault $e ) { // En cas de rebre missatges d'error 
 echo $e->getMessage();
}

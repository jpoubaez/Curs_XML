<?php
require_once "nusoap/lib/nusoap.php";  // linkem a la llibreria nusoap
    
    //$conn=mysqli_connect("localhost","usuari","contrasenya","Base Dades");

$conn=mysqli_connect('localhost','id13758673_joanpou','J1anpoubaez_','id13758673_prova_rss');
//if (!$conn) echo "No connecta!!<br>";
//else echo "Connectat OK!!<br>";

// Creem les funcions que volem implementar     
    function foto($mineral) {        // Definim una funció foto que agafa el nom del mineral
        $sql="SELECT * from minerals Where nom like '%" . $mineral ."%'" ;  // Fem la consulta que cerca el mineral indicat
        $res=mysqli_query($conn, $sql);   
        if ($res>0 ) return $res[0]->foto ;    // si troba le mineral retorna la foto del mineral
        else return "error amb el nom";           // Si no troba cap registre retorna error
    }
    
    function fitxa($mineral) {  // Definim una segona funció que agafa també el nom del mineral
        $sql="SELECT * from minerals Where nom like '%" . $mineral ."%'" ;  // Fem la consulta el nom de mineral indicat
        // Si trova el mineral retorna un array amb algunes de les dades del mineral
        
        $res=mysqli_query($conn, $sql);   
       if($res >0 ) return mysqli_fetch_row($res)[0] ; 
         else return "error amb el nom";     // Si no trova el mineral retorna error
        
        //if ($res>0 ) return array("composicio" => mysql_result($res,0,"composicio"),"grup" => mysql_result($res,0,"grup"), "color" => mysql_result($res,0,"color"),"densitat" => mysql_result($res,0,"densitat"),"foto" => mysql_result($res,0,"foto")) ;
        //else return "error amb el nom";     // Si no trova el mineral retorna error
      }
// Creem el servei WSDL       
    $server = new soap_server();    // Creem el objecte WSDL
    $server->configureWSDL("foto", "urn:foto");   // Configurem el servei WSDL
    $server->wsdl->addComplexType(      // Definim l'array que retorna le sdades de la fitxa
    'Dades_fitxa',
    'complexType',
    'struct',
    'all',
    '',
    array(
        'composicio' => array('name'=>'composicio','type'=>'xsd:string'),
        'grup' => array('name'=>'grup','type'=>'xsd:string'),
        'color' => array('name'=>'color','type'=>'xsd:string'),
        'densitat' => array('name'=>'densitat','type'=>'xsd:string'),
        'foto' => array('name'=>'foto','type'=>'xsd:string')
          )
);
          
// Definim la funció foto dins del WSDL         
    $server->register("foto",    // Nom de la funcío
        array("mineral" => "xsd:string"),   // parametres d'entrada
        array("return" => "xsd:string"),    // Resultats de sortida
        "urn:foto",
        "urn:foto#foto",
        "rpc",
        "encoded",
        "Ens dona una llista de productes de cada categoría");
// Definim la funció fitxa      
    $server->register("fitxa",  // Nom de la funció
        array("mineral" => "xsd:string"),   // Parametres d'entrada
        array("return" => "tns:Dades_fitxa"), // Resultat de sortida
        "urn:fitxa",
        "urn:fitxa#fitxa",
        "rpc",
        "encoded",
        "L'ordre de retorn es = composicio,grup,color,densitat i foto ");        
$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';  // Definim per quin servei fem la sortida = http
 $server ->service($HTTP_RAW_POST_DATA); // Enviem el resultat de sortida pel servei indicat
?>
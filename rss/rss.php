<?php
 $conn=mysqli_connect("localhost","id13758673_joanpou","J1anpoubaez_","id13758673_prova_rss");

// Capçalera fitxer XML a generar

header("Content-type: text/xml");
$t = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>" .chr(13).chr(10) ;
$t .="<rss VERSION=\"2.0\">" . chr(13) . chr(10);

$t .= "<channel>" . chr(13) . chr(10);
//Creem el canal amb la informació de l'emisor de noticies
$t .="<title> Noticies Joan </title>" . chr(13) . chr(10);
$t .="<link> http://www.xtec.cat </link>" .chr(13). chr(10);
$t .="<language> ca </language>" . chr(13) . chr(10) ;
$t .="<webMaster> Joan Pou </webMaster>" . chr(13) . chr(10);
$t .="<copyright> CCC </copyright> " . chr(13) . chr(10) ;
$t .="<pubDate>" . date('D, d M Y g:i:s O', time()) . "</pubDate>" . chr(13) . chr(10) ;

$sql="SELECT * FROM noticies ORDER BY id DESC LIMIT 10";
$result=mysqli_query($conn, $sql);


// A partir de la consulta anirem omplint cada node "item"
while ($row = $result->fetch_assoc()) {
 
  $t .="<item>" . chr(13) . chr(10) ;
  $t .="<title>" .$row["title"] . "</title>" . chr(13) . chr(10) ;
  $t .="<guid>" . $row["guid"] . "</guid>" . chr(13) . chr(10) ;
  $t .="<description><![CDATA[" . $row["description"] . "]]></description>" . chr(13) . chr(10) ;
  $t .="</item>" . chr(13) . chr(10) ;  
}
$t .="</channel>" . chr(13) . chr(10) ;
$t .="</rss>" ;

echo $t ;
?>
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <head>
  </head>
  <body>
  <h2>Receptes</h2>

<!--  Inici del AJAX -->   
<SCRIPT language="JavaScript">
function omplir(id) {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
 
  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = muestraContenido;
 
  // Realizar peticion HTTP
  peticion_http.open('GET', 'fitxa_recepta.php?id='+id, true);
  peticion_http.send(null);
 
  function muestraContenido() {
    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {
        document.getElementById('tria_recepta').innerHTML =peticion_http.responseText;
      }
    }
  }
}
</SCRIPT>

<!-- Fi de l'AJAX -->    


<select name="escull" onchange="omplir(this.value);" >
<option value="0"> Selecciona Recepta </option>
    <xsl:for-each select="receptes/recepta" >
    <option>
<xsl:attribute name="value">
<xsl:value-of select="id" />
</xsl:attribute>
<xsl:value-of select="titol" />
</option>
   </xsl:for-each>
</select>
<div id="tria_recepta" >
Mostra la recepta 
</div>  
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>     
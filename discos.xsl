<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/discos">
  <html>
    <head>
        <style type="text/css">
.titol {
    font-size:2.83em;
	color:#000000;
	font-family:Tahoma, "Lucida Sans Unicode", Verdana, sans-serif;
	font-weight:bold;
}

.subtitol {
    font-size:1.23em;
	color:#000000;
	font-family:Arial;
	font-weight:bold;
}

.ingredients {
    font-size:0.9em;
	color:#000000;
	font-family:Arial;
	}


.categoria {

width: 300px;	
height: 40px;

    font-size:1.6em;
	color:#000000;
	font-family:Tahoma, "Lucida Sans Unicode", Verdana, sans-serif;
	font-weight:bold;	
    padding:0.3em 1em;
	
border-radius: 0px 27px 26px 0px; 
-moz-border-radius: 0px 27px 26px 0px; 
-webkit-border-radius: 0px 27px 26px 0px; 


color: #ffffff;
background: #6495FC;
}        
		
.info {		
background: #AFE1FA ; 
width: 400px;
height: 90px;
padding: 30px;
}

.info2{		
background: #DAF3F8 ; 
width: 400px;
padding: 30px;
}

.rodona {
    position: relative; 
	border-radius: 50%;
	width: 30px;
	height: 30px; 
    background: #6495FC;
	color: #ffffff;
	font-size:1.2em;
	font-family:Tahoma, "Lucida Sans Unicode", Verdana, sans-serif;
	font-weight:bold;	
	text-align: center; 
	/* width and height can be anything, as long as they're equal */
}

.prepa {
position: relative ; 
top: -25px; 
left: 40px; 
width: 830px;
font-weight:bold;
}

.foto{
padding: 0px;
}

.columna{
float:left;
height: 390px;
font-size:30px;
}

#columna1{
	width: 20%;
	padding: 10px;
	background: red;
	height: 370px;
	text-align: center;
	color:white;
}
#columna3{
	width: 30%;
	padding: 10px;
	padding-left: 30px;
	height: 370px;
	font-size:20px;
}

#fila1_1{
    padding-top: 20px;
	height: 45px;
	border-bottom: 5px solid white;
}
#fila2_1{
	padding-top: 5px;
	height: 195px;
	
}
#nom{
	color:red;
	font-size:20px;
	padding-bottom: 10px;
	padding-top: 10px;
}

#tot {
	border: red solid 1px;
	height: 390px;
	margin: 2px;
}
        </style>
    </head>
<body>
	<xsl:for-each select="disc">
		<div id="tot">
			<div class="columna" id="columna1">
				<div id="fila1_1">Títol</div>
				<div id="fila2_1"><xsl:value-of select="titol"/></div>
			</div>
			<div class="columna" id="columna2">
				<xsl:element name="img">
					<xsl:attribute name="src">
						<xsl:value-of select="portada"/>
					</xsl:attribute>
					<xsl:attribute name="height">
						<xsl:value-of select="390"/>
				   	</xsl:attribute>
			 	</xsl:element>
			</div>
			<div class="columna" id="columna3">
				<div id="nom"><xsl:value-of select="correu"/></div><br/>
				<xsl:value-of select="hora"/> m<br/>
				<b><xsl:value-of select="idioma"/></b><br/>
				<xsl:value-of select="consentiment"/><br/>
			</div>

		</div>
	</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
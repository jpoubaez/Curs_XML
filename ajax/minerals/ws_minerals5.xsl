<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:param name="id" />    <!-- Parametre que rebrà en la tarnsformació -->  
<xsl:template match="/">
  <html>
  <head>
  <link rel="stylesheet" type="text/css" href="ajax0.css" />
  </head>
  <body>
  <h2>Mineral</h2>
 

	
    <xsl:for-each select="minerals/ws_minerals[id=$id]">
 <p><table> 
  <tr>
  <TD HEIGHT='36'>  <B> <xsl:value-of select="nom"/></B></TD>
  <TD>  <xsl:value-of select="nom"/></TD>
  <TD>  <xsl:value-of select="composicio" /></TD>
  <TD>  <B>Grup: </B> <xsl:value-of select="grup"/></TD>
  </tr>
  </table></p>
  <p>
  <table >
<tr>
<TD >  <B> Pes específic: </B><xsl:value-of select="densitat"/></TD>
<TD ROWSPAN='9'>  <P ALIGN="CENTER">
<img>
    <xsl:attribute name="src">
      <xsl:value-of select="foto" />
    </xsl:attribute> 
  </img>
  </P>
</TD>
</tr>
<tr>
<TD>  <B>Duresa: </B> <xsl:value-of select="duresa" /></TD>
</tr>
<tr>
<TD>  <B>Exfoliació: </B><xsl:value-of select="exfoliacio"/></TD>
</tr>
<tr>
<TD>   <B>Color: </B><xsl:value-of select="color"/><B> Ratlla: </B><xsl:value-of select="ratlla"/> </TD>
</tr>
<tr>
<TD>  <B>Lluïssor: </B><xsl:value-of select="lluisor" /></TD>
</tr>
  </table></p>
 </xsl:for-each>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet> 

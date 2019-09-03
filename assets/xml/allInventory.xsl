<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
   <head>
      <title>All Inventory</title>
   </head>
   <body>

      <h3>All Inventory</h3>

      <table border="1">
         <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Size</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Is Outdoor</th>
            <th>Discount</th>
            <th>Price</th>
         </tr>

      <xsl:for-each select="INVENTORY/BALL">
         <tr>
            <td><xsl:value-of select="NAME"/></td>
            <td><xsl:value-of select="CATEGORY"/></td>
            <td><xsl:value-of select="SIZE"/></td>
            <td><xsl:value-of select="BRAND"/></td>
            <td><xsl:value-of select="COLOR"/></td>
            <td><xsl:value-of select="IsOUTDOOR"/></td>
            <td><xsl:value-of select="DISCOUNT"/></td>
            <td>$<xsl:value-of select="PRICE"/></td>
         </tr>
      </xsl:for-each>
      </table>
   </body>
</html>

</xsl:template>

</xsl:stylesheet>

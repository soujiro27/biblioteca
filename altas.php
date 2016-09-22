<?php
include 'conecta.php';
$autor=$_POST['autor'];
$nacionalidad=$_POST['pais'];
$query="insert into autor(nombre,nacionalidad) values ('$autor','$nacionalidad')";
mysql_query($query);
?>

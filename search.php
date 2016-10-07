
<?php
include 'conecta.php';
$autor=$_GET['autor'];
$query="select id from autor where nombre='$autor'";
$resultados=mysql_query($query);
if($autores=mysql_fetch_array($resultados))
{
  $id=$autores['id'];
  $query="select * from libros where id_autor=$id";
  $resultados=mysql_query($query);
  while($libros=mysql_fetch_array($resultados))
  {
    $arreglo = array('id' =>$libros['id'] ,'idAutor' => $libros['id_autor'], 'titulo' => $libros['titulo'],'idEditorial'=> $libros['id_editorial'], 'categoria'=> $libros['categoria'],'precio'=>$libros['precio'] );
  }
}
echo json_encode($arreglo);

 ?>

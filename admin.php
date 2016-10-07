<?php
session_start();
if($_SESSION['admin']==false)
{
  if($_SESSION['admin']!=0)
  {
    header('location:index.html');
  }

}
else
{
  header('location:index.html');
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Panel de Administrador</title>
    <link rel="stylesheet" href="estilo.css" >
  </head>
  <body>
      <header>
        <h1>Panel de Administrador</h1>
        <nav>
          <ul class="menu">
            <li>Altas
              <ul class="submenu">
                  <li class="autor">Autor</li>
                  <li class="editorial">Editorial</li>
                  <li class="libro">Libro</li>
              </ul>
            </li>
            <li>Bajas</li>
            <li>Actualizacion</li>
            <li>Cerrar Sesion</li>
          </ul>
        </nav>
      </header>

      <section class="altas">
          <div class="autor">
              <form id="formAutor">
                <input type="text" placeholder="Nombre del Autor" required id="autor">
                <input type="text" placeholder="Nacionalidad" required id="nacionalidad">
                <input type="submit"  value="Dar Alta">
              </form>
          </div>
          <div class="editorial">
            <form id="formEditorial">
              <input type="text"  placeholder="Editorial" id="nombreEditorial">
              <input type="submit"  value="Dar Alta">
            </form>
          </div>

          <div class="libros">
            <form class="formLibros" >
              <input type="text" placeholder="Titulo" id="titulo">
              <select class="autor">
                <option value="0">Escoga Autor</option>
              </select>
              <select class="editorial" >
                <option value="0">Escoga Editorial</option>
              </select>
              <input type="text" placeholder="Categoria" id="categoria">
              <input type="number" placeholder="Precio" id="precio">
              <input type="submit" value="Alta Libro">
            </form>

          </div>
      </section>

      <section class="bajas">
        <form class="bajas-form" >
          <input type="text" id="bajas-form-search" placeholder="Busqueda por Autor" required>
          <input type="submit"  value="Buscar">
        </form>
        <table id="bajas">
          <thead>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Categoria</th>
            <th>precio</th>
            <th>Eliminar</th>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </section>



      <script type="text/javascript" src="jquery.js"></script>
      <script type="text/javascript" src="codigo.js"></script>
  </body>
</html>

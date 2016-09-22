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
  </head>
  <body>
      <header>
        <h1>Panel de Administrador</h1>
        <nav>
          <ul>
            <li>Altas
              <ul>
                  <li>Autor</li>
                  <li>Editorial</li>
                  <li>Libro</li>
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
      </section>

      <script type="text/javascript" src="jquery.js"></script>
      <script type="text/javascript" src="codigo.js"></script>
  </body>
</html>

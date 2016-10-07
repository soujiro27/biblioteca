$(function(){

  $('form#formAutor').on('submit',altaAutor);
  $('form#formEditorial').on('submit',altaEditorial);
  $('form.formLibros').on('submit',altaLibros);
  $('form.bajas-form').on('submit',searchAutor);

  cargaAutor();
  cargaEditorial();
  $('li.autor').on('click',menuAutor);
  $('li.editorial').on('click',menuEditorial);
  $('li.libro').on('click',menuLibro);


});


function altaAutor(e)
{
  e.preventDefault();
  var autor=$('input#autor').val();
  var nacionalidad=$('input#nacionalidad').val();
$.ajax({
  url: 'altas.php',
  type: 'POST',
  dataType: 'JSON',
  data: {autor: autor,
        pais:nacionalidad,
        tipo:0
        }
})
.done(function() {

});

}
function altaEditorial(e)
{
    e.preventDefault();
    var editorial=$('input#nombreEditorial').val();
    $.ajax({
      url: 'altas.php',
      type: 'POST',
      dataType: 'JSON',
      data: {editorial: editorial,tipo:1}
    })
    .done(function() {

    });

}


function cargaAutor()
{
  $.ajax({
    url: 'cargaAutor.php',
    type: 'GET',
    dataType: 'JSON',
  })
  .done(function(data) {
    var cadena="";

    for(x in data)
    {
      cadena=cadena+'<option value='+data[x].id+'>'+data[x].nombre+'</option>';
    }
    $('select.autor').append(cadena);
  });

}




function cargaEditorial()
{
  var cadena="";
  $.ajax({
    url: 'cargaEditorial.php',
    type: 'GET',
    dataType: 'JSON',
  })
  .done(function(data) {

    for(x in data)
    {
      cadena=cadena+'<option value='+data[x].id+'>'+data[x].nombre+'</option>';
    }
    $('select.editorial').append(cadena);
  });
}


function altaLibros(e)
{
  e.preventDefault();
  var titulo=$('input#titulo').val();
  var autor=$('select.autor').val();
  var editorial=$('select.editorial').val();
  var categoria=$('input#categoria').val();
  var precio=$('input#precio').val();
  $.ajax({
    url: 'altas.php',
    type: 'POST',
    dataType: 'JSON',
    data: {titulo: titulo,
          autor:autor,
          editorial:editorial,
          categoria:categoria,
          precio:precio,
          tipo:2
          }
  })
  .done(function() {

  });

}


function menuAutor()
{
    $('form#formAutor').show('slow');
    $('form#formEditorial').hide('slow');

    $('form.formLibros').hide('slow');
}


function menuEditorial()
{
    $('form#formEditorial').show('slow');
    $('form.formLibros').hide('slow');
    $('form#formAutor').hide('slow');

}

function menuLibro()
{
    $('form.formLibros').show('slow');
    $('form#formAutor').hide('slow');
    $('form#formEditorial').hide('slow');

}

function searchAutor(e)
{
  e.preventDefault();
  var autor=$('input#bajas-form-search').val();
  $.ajax({
    url: 'search.php',
    type: 'GET',
    dataType: 'JSON',
    data: {autor: autor}
  })
  .done(function(data) {
    console.log(data);
    var tabla="<tr>";

        tabla+="<td>"+data.titulo+"</td>";
        tabla+="<td>"+data.idAutor+"</td>";
        tabla+="<td>"+data.idEditorial+"</td>";
        tabla+="<td>"+data.categoria+"</td>";
        tabla+="<td>"+data.precio+"</td>";
        tabla+="<td><img src=trash.png data-id="+data.id+"></td>";


    tabla=tabla+"</tr>"
    $('table#bajas').append(tabla);
    $('table tbody img').on('click',elimina);
  });

}



function elimina()
{
  var id=$(this).data('id');
  console.log(id);
  if(confirm("desea eliminar")){
    $.ajax({
      url: 'elimina.php',
      type: 'POST',
      dataType: 'JSON',
      data: {id: id}
    })
    .done(function() {
    console.log("master"); 
    });

  }
}

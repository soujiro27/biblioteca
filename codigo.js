$(function(){

  $('form#formAutor').on('submit',altaAutor);
  $('form#formEditorial').on('submit',altaEditorial);
  $('form.formLibros').on('submit',altaLibros);
  cargaAutor();
  cargaEditorial();
  $('li.autor').on('click',menuAutor);
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
  console.log("success");
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
      console.log("success");
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
    console.log(data[0]);
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
    console.log(data);
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
    console.log("success");
  });

}


function menuAutor()
{
    $('form#formAutor').show('slow');
}

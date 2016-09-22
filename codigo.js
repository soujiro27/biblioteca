$(function(){

  $('form#formAutor').on('submit',altaAutor)
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
        }
})
.done(function() {
  console.log("success");
});

}

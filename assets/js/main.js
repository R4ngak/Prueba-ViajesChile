$(function(){
  
    // esconde descripcion de destacados
    $('.card-title').click(function(){
        $('.card-text').toggle();
    });
    // le cambia el color a traves de css
    $('#h2Ingredientes').on('dblclick',function(){
        $(this).css("color","red");
    })
    $('#h2Preparacion').on('dblclick',function(){
        $(this).css("color","red");
    })
      // alerta como pop-up
      $('#suscribir').click(function(){
        alert("Gracias por Suscribirte a Viajes Chile!")
    });
})
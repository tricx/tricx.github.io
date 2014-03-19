$(document).ready(function(){
  $(window).scroll(function() {
    watch();
  }); 
})

function watch(){
  var scrollpos = $(window).scrollTop();
  rotate($('#moire2'), scrollpos/150+3);
  
}

function rotate(object, degrees) {
    console.log(object, degrees);
    object.css({
      '-webkit-transform' : 'rotate('+degrees+'deg)',
         '-moz-transform' : 'rotate('+degrees+'deg)',  
          '-ms-transform' : 'rotate('+degrees+'deg)',  
           '-o-transform' : 'rotate('+degrees+'deg)',  
              'transform' : 'rotate('+degrees+'deg)',  
                   'zoom' : 1

    });
}

$(document ).ready(function() {
	//oculte lo que tengo
	$('#izquierda').fadeOut(1000); 
	//me muestre lo que tengo oculto de arriba hacia abajo como una cortina
	$('#imagen').slideDown('slow');

	//cuando el mouse pase por alli 
	$('#centro').mouseenter(function(){
		//me opaque o desaparesca el contenido
		//el slow que lo realize despacio y seguido es el porcentaje
		//en este ejemplo es del 50%
		$('#centro').fadeTo('slow',0.2);
	});
	
	$('#centro').mouseleave(function(){
		//1 es para mostrar completamente
		$('#centro').fadeTo('fast',1);
	});

	$('#clic').click(function(){
		$('#clic').fadeOut('fast');
	});
	
	var $item=$('#imagen');
	$item.click(function(){
		$('#clic').fadeIn('slow');
	});

	//para hacer que solo afecte a uno solo le agregamos el this
	$('.esfera').click(function(){
		$(this).fadeOut('slow');
	});

	//mostrar o ocultar de arriba hacia abajo o viceversa
	$('.toggle').click(function() {
		$('.toggle').slideToggle('slow');
	});

	$('.esfera').click(function(){
		$('.toggle').slideToggle('slow');
	});
});
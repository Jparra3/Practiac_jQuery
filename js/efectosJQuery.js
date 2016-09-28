$(document).ready(function() {
	//efecto que hace explotar al momento de dar click
	$('.circulo').click(function(){
	    $(this).effect('explode');
	    });
	//este es para hacer rebotar el onbjeto
	$('.rebote').click(function(){
		//lo hace rebotar 2 veces en un tiempo de 1000 milisegundos
	    $(this).effect('bounce',{times:2},1000);
	    });
	//para poder mover el objeto donde quiera
	$('.mover').draggable({
		appendTo:"body"
	});

	//slide lo arrastra de izquierda a derecha 
	$('.aparece').click(function(){
		//se le puede agregar el tiempo
	    $(this).effect('slide',2000);
	    }); 
	//muestre un menú tipo acordeon
	$("#menu").accordion();
	//para poder mover el objeto donde quiera
	$('#carro').draggable();

	$(".camTam").resizable({
		autoHide: true});

	//ejecute la clase que esta almacenada en css cuando la seleccione
	// $('ol').selectable();

	//para poder ordenarlas como quiera se puede con el codigo
	//anterior solo cambiando por la funcion sortable
	$('ol').sortable();
});
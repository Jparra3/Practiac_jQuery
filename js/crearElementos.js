$(document).ready(function() {
	//con el append agregas como el ultimo hijo
	//tambn está para agregarlo al inicio como prepend
	$('.info').append('<p> Hola agonia</p>');
	//el before para que lo agregue antes del div y after para despues
	$('.info').before('<h1>Saludo</h1>');
	//empty elimina todo su contenido y todos los descendientes
	$('li').empty();
	//remove elimina el elemnto en sí
	//$('li').remove();

	//para agregar una clase y para eliminar es removeClass
	$('#texto').click(function() {
		$(this).addClass('resaltar');
	});

	//para agregarla clase si no la tiene o eliminar si la tiene toggleClass()
	$('#title').click(function(){
		$(this).toggleClass('resaltar');
	});

	//modificar alto y ancho con width y height tambn se puede agregar una sentencia css
	var $modi=$('.modifica');
	$modi.width('240px');
	$modi.height('240px');
	$modi.css({
		'border': 'dashed white',
		'background-color': '#124b5f'
	});

	//sirve para modificar la primera etiqueta que esté en html
	$('h2').html('...Hello Friend...');

	$('#boton').click(function() {
		var agregar=$('input[name=itemLista]').val();
		$('.lista').append('<div class="item">'+agregar+'</div>');
	});

	//funcion sirve para seleccionar del item que creamos de manera dinamica y lo tache
	$(document).on('click', '.item', function() {
		 $(this).css('text-decoration','line-through');
	});

	//funcion para desaparecer con dobleClick
	$modi.dblclick(function() {
		$(this).fadeOut('slow');
	});

	//cambiar el foco de cualquier cosa seleccionada

	$('#entrada').css('outline-color','green');

	//para que se valla moviendo cada vesz que tecleo una tecla
	$(document).keydown(function() {
		//se deben utilizar las comillas doble
		$('.keydown').animate({"left":"+=10px"}, '1000');
	});

	//el parametro key ayudara a jQuery que sepa
	//cual fue la tecla que se presionó
	//hay que tener encuenta position: relative top and left in 0px
	 $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 65:
				$('img').animate({left: "-=10px"}, 'fast'); 
				break;
			case 83:
				$('img').animate({top: "+=10px"},'fast');
				break;
			case 87:
				$('img').animate({top: "-=10px"},'fast');
				break;
			case 68:
				$('img').animate({left: "+=10px"},'fast');
				break;
			default:
				break;
		}
	});

});
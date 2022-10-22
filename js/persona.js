// comprobar_form_persona_add()
// funcion para validar el submit del formulario persona para las acciones que no sean search

function comprobar_form_persona_add(){
	alert('entro en comprobar_form_persona_add');

	if (comprobar_dni() && comprobar_nombre_persona() && comprobar_apellidos_persona() && comprobar_fechaNacimiento_persona() && 
		comprobar_direccion_persona() && comprobar_telefono_persona() && comprobar_email_persona() && comprobar_foto_persona()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_persona_search()
// funcion para validar el submit del formulario de persona para la accion search
function comprobar_form_persona_search(){
	alert('entro en comprobar_form_persona_search');

	if (comprobar_dni_search() && comprobar_nombre_persona_search() && comprobar_apellidos_persona_search() && comprobar_fechaNacimiento_persona_search() && 
		comprobar_direccion_persona_search() && comprobar_telefono_persona_search() && comprobar_email_persona_search() && comprobar_foto_persona_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_dni()
// funcion de validación de formato de dni en acciones que no sean search
function comprobar_dni(){

	if(!size_minimo('id_dni',9)){
		mensajeKO('id_dni', 'Tamaño del dni demasiado corto (8 Números y 1 Letra)');
		return false;
	}
	if(!size_maximo('id_dni',9)){
		mensajeKO('id_dni', 'Tamaño del dni demasiado largo (8 Números Y 1 Letra)');
		return false;
	}


	dni = document.getElementById('id_dni').value;
	var letras_may = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letras_min = ['t', 'r', 'w', 'a', 'g', 'm', 'Y', 'f', 'p', 'd', 'x', 'b', 'n', 'j', 'z', 's', 'q', 'v', 'h', 'l', 'c', 'k', 'e', 't'];

	if( !(/^[0-9]{8}[A-Za-z]$/.test(dni)) ) {
		mensajeKO('id_dni', 'Formato del dni incorrecto (8 Números Y 1 Letra)');
	  	return false;
	}

	if(dni.charAt(8) != letras_may[(dni.substring(0, 8))%23] && dni.charAt(8) != letras_min[(dni.substring(0, 8))%23]) {
		mensajeKO('id_dni', 'El dni es incorrecto (Los números no se corresponden con la letra)');
	  	return false;
	}


	else{
		mensajeOK('id_dni');
		return true;
	}
	
}

// comprobar_dni_search()
// funcion de validación de formato de dni en search
function comprobar_dni_search(){
	if(!size_maximo('id_dni',9)){
		mensajeKO('id_dni', 'Tamaño del dni demasiado largo (8 Números Y 1 Letra)');
		return false;
	}

	dni = document.getElementById('id_dni').value;

	if( !(/^[0-9]{8}[A-Za-z]$/.test(dni)) ) {
		mensajeKO('id_dni', 'Formato del dni incorrecto (8 Números Y 1 Letra)');
	  	return false;
	}

	else{
		mensajeOK('id_dni');
		return true;
	}
}

// comprobar_nombre_persona()
// funcion de validación de formato de nombre_persona en acciones que no sean search
function comprobar_nombre_persona(){

	if (!size_minimo('id_nombre_persona',3)){
		mensajeKO('id_nombre_persona', 'Tamaño nombre demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('id_nombre_persona',45)){
		mensajeKO('id_nombre_persona', 'Tamaño nombre demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!letras_con_acento_guion_y_espacio('id_nombre_persona')){
		mensajeKO('id_nombre_persona', 'El nombre contiene carecteres no permitidos (solo letras, espacios y guiones (-)');
		return false;
	}

	mensajeOK('id_nombre_persona');
	return true;

}

// comprobar_nombre_persona_search()
// funcion de validación de formato de nombre_persona en search
function comprobar_nombre_persona_search(){
	
	if (!size_maximo('id_nombre_persona',45)){
		mensajeKO('id_nombre_persona', 'Tamaño nombre demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!letras_con_acento_guion_y_espacio('id_nombre_persona')){
		mensajeKO('id_nombre_persona', 'El nombre contiene carecteres no permitidos (solo letras, espacios y guiones (-)');
		return false;
	}

	mensajeOK('id_nombre_persona');
	return true;
}

// comprobar_apellidos_persona()
// funcion de validación de formato de nombre_persona en acciones que no sean search
function comprobar_apellidos_persona(){

	if (!size_minimo('id_apellidos_persona',5)){
		mensajeKO('id_apellidos_persona', 'Tamaño apellidos demasiado corto (min 5 caracteres)');
		return false;
	}
	if (!size_maximo('id_apellidos_persona',100)){
		mensajeKO('id_apellidos_persona', 'Tamaño apellidos demasiado largo (max 100 caracteres)');
		return false;
	}
	if (!letras_con_acento_guion_y_espacio('id_apellidos_persona')){
		mensajeKO('id_apellidos_persona', 'Los apellidos contienen carecteres no permitidos (solo letras, espacios y guiones (-)');
		return false;
	}

	mensajeOK('id_apellidos_persona');
	return true;

}

// comprobar_apellidos_persona_search()
// funcion de validación de formato de nombre_persona en search
function comprobar_apellidos_persona_search(){
	
	if (!size_maximo('id_apellidos_persona',100)){
		mensajeKO('id_apellidos_persona', 'Tamaño apellidos demasiado largo (max 100 caracteres)');
		return false;
	}
	if (!letras_con_acento_guion_y_espacio('id_apellidos_persona')){
		mensajeKO('id_apellidos_persona', 'Los apellidos contienen carecteres no permitidos (solo letras, espacios y guiones (-)');
		return false;
	}

	mensajeOK('id_apellidos_persona');
	return true;
}

// comprobar_fechaNacimiento_persona()
// funcion de validación de formato de fechaNacimiento_persona en acciones que no sean search
function comprobar_fechaNacimiento_persona(){

	if (!size_minimo('id_fechaNacimiento_persona',10)){
		mensajeKO('id_fechaNacimiento_persona', 'Tamaño fecha demasiado corto (min 10 caracteres)');
		return false;
	}
	if (!size_maximo('id_fechaNacimiento_persona',10)){
		mensajeKO('id_fechaNacimiento_persona', 'Tamaño fecha demasiado largo (max 10 caracteres)');
		return false;
	}
	if (!numeros_y_barra_diagonal('id_fechaNacimiento_persona')){
		mensajeKO('id_fechaNacimiento_persona', 'La fecha contiene carecteres no permitidos (DD/MM/AAAA)');
		return false;
	}

	mensajeOK('id_fechaNacimiento_persona');
	return true;

}

// comprobar_fechaNacimiento_persona_search()
// funcion de validación de formato de fechaNacimiento_persona en search
function comprobar_fechaNacimiento_persona_search(){
	
	if (!size_maximo('id_fechaNacimiento_persona',10)){
		mensajeKO('id_fechaNacimiento_persona', 'Tamaño fecha demasiado largo (max 10 caracteres)');
		return false;
	}
	if (!numeros_y_barra_diagonal('id_fechaNacimiento_persona')){
		mensajeKO('id_fechaNacimiento_persona', 'La fecha contiene carecteres no permitidos (solo letras, espacios y guiones (-)');
		return false;
	}

	mensajeOK('id_fechaNacimiento_persona');
	return true;
}


// comprobar_direccion_persona()
// funcion de validación de formato de direccion_persona en acciones que no sean search
function comprobar_direccion_persona(){

	if (!size_minimo('id_direccion_persona',10)){
		mensajeKO('id_direccion_persona', 'Tamaño dirección demasiado corto (min 10 caracteres)');
		return false;
	}
	if (!size_maximo('id_direccion_persona',200)){
		mensajeKO('id_direccion_persona', 'Tamaño dirección demasiado largo (max 200 caracteres)');
		return false;
	}
	if (!expr_direccion('id_direccion_persona')){
		mensajeKO('id_direccion_persona', 'La dirección incluye caracteres no permitidos (Se permiten caracteres alfabéticos con acentos, números, espacios, ‘/’, ’-’, ’,’, ’º’ y ‘ª’)');
		return false;
	}

	mensajeOK('id_direccion_persona');
	return true;

}

// comprobar_direccion_persona_search()
// funcion de validación de formato de direccion_persona en search
function comprobar_direccion_persona_search(){
	
	if (!size_maximo('id_direccion_persona',200)){
		mensajeKO('id_direccion_persona', 'Tamaño dirección demasiado largo (max 200 caracteres)');
		return false;
	}
	if (!expr_direccion('id_direccion_persona')){
		mensajeKO('id_direccion_persona', 'La dirección incluye caracteres no permitidos (Se permiten caracteres alfabéticos con acentos, números, espacios, ‘/’, ’-’, ’,’, ’º’ y ‘ª’)');
		return false;
	}

	mensajeOK('id_direccion_persona');
	return true;
}

// comprobar_telefono_persona()
// funcion de validación de formato de telefono_persona en acciones que no sean search
function comprobar_telefono_persona(){

	if (!size_minimo('id_telefono_persona',9)){
		mensajeKO('id_telefono_persona', 'Tamaño teléfono demasiado corto (min 9 caracteres)');
		return false;
	}
	if (!size_maximo('id_telefono_persona',9)){
		mensajeKO('id_telefono_persona', 'Tamaño teléfono demasiado largo (max 9 caracteres)');
		return false;
	}
	if (!solo_numeros('id_telefono_persona')){
		mensajeKO('id_telefono_persona', 'El teléfono contiene carecteres no permitidos (solo números (-)');
		return false;
	}

	if (!expr_telefono('id_telefono_persona')){
		mensajeKO('id_telefono_persona', 'El teléfono no tiene formato de España (Empieza por 6,7,8 o 9)');
		return false;
	}

	mensajeOK('id_telefono_persona');
	return true;

}

// comprobar_telefono_persona_search()
// funcion de validación de formato de telefono_persona en search
function comprobar_telefono_persona_search(){
	
	if (!size_maximo('id_telefono_persona',9)){
		mensajeKO('id_telefono_persona', 'Tamaño teléfono demasiado largo (max 9 caracteres)');
		return false;
	}
	if (!solo_numeros('id_telefono_persona')){
		mensajeKO('id_telefono_persona', 'El teléfono contiene carecteres no permitidos (solo números');
		return false;
	}

	mensajeOK('id_telefono_persona');
	return true;
}

// comprobar_email_persona()
// funcion de validación de formato de email_persona en acciones que no sean search
function comprobar_email_persona(){

	if (!size_minimo('id_email_persona',8)){
		mensajeKO('id_email_persona', 'Tamaño email demasiado corto (min 8 caracteres)');
		return false;
	}
	if (!size_maximo('id_email_persona',45)){
		mensajeKO('id_email_persona', 'Tamaño email demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!caracteres_email('id_email_persona')){
		mensajeKO('id_email_persona', 'El email contiene carecteres no permitidos (Se permiten: letras minúsculas sin acento, números, guiones (‘-’ o ‘_’) puntos, apóstrofos (‘) y ‘@’)');
		return false;
	}

	if (!expr_email('id_email_persona')){
		mensajeKO('id_email_persona', 'El email no tiene el formato adecuado ( ejemplo@dominio.extension )');
		return false;
	}
	
	mensajeOK('id_email_persona');
	return true;

}

// comprobar_email_persona_search()
// funcion de validación de formato de email_persona en search
function comprobar_email_persona_search(){
	
	if (!size_maximo('id_email_persona',45)){
		mensajeKO('id_email_persona', 'Tamaño email demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!caracteres_email('id_email_persona')){
		mensajeKO('id_email_persona', 'El email contiene carecteres no permitidos (Se permiten: letras minúsculas sin acento, números, guiones (‘-’ o ‘_’) puntos, apóstrofos (‘) y ‘@’)');
		return false;
	}

	mensajeOK('id_email_persona');
	return true;
}

// comprobar_foto_persona()
// funcion de validación de formato de foto_persona en acciones que no sean search
function comprobar_foto_persona(){

	if (!size_minimo('id_foto_persona',6)){
		mensajeKO('id_foto_persona', 'Tamaño foto demasiado corto (min 6 caracteres)');
		return false;
	}
	if (!size_maximo('id_foto_persona',40)){
		mensajeKO('id_foto_persona', 'Tamaño foto demasiado largo (max 40 caracteres)');
		return false;
	}
	if (!caracteres_foto('id_foto_persona')){
		mensajeKO('id_foto_persona', 'La foto contiene carecteres no permitidos (solo letras sin acentos y ".")');
		return false;
	}

	if (!expr_foto('id_foto_persona')){
		mensajeKO('id_foto_persona', 'La foto no utuliza el formato permitido (ejemplo.png o ejemplo.jpg)');
		return false;
	}


	mensajeOK('id_foto_persona');
	return true;

}

// comprobar_foto_persona_search()
// funcion de validación de formato de foto_persona en search
function comprobar_foto_persona_search(){
	
	if (!size_maximo('id_foto_persona',40)){
		mensajeKO('id_foto_persona', 'Tamaño foto demasiado largo (max 40 caracteres)');
		return false;
	}
	if (!caracteres_foto('id_foto_persona')){
		mensajeKO('id_foto_persona', 'La foto contiene carecteres no permitidos (solo letras sin acentos y ".")');
		return false;
	}

	mensajeOK('id_foto_persona');
	return true;
}





















// peticionADDpersonaBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir una persona
function peticionADDpersonaBack(){

	alert('peticion a back add');
	ADDpersonaajax();
	//document.getElementById('id_form_persona').submit();
	
}

// peticionEDITpersonaBack()
// funcion que utilizariamos para hacer una solicitud a back para editar una persona
function peticionEDITpersonaBack(){

	alert('peticion a back edit');
	EDITpersonaajax();
	
	//document.getElementById('id_form_persona').submit();
	
}

// peticionDELETEpersonaBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar una persona
function peticionDELETEpersonaBack(){

	alert('peticion a back delete');
	DELETEpersonaajax();
	//document.getElementById('id_form_persona').submit();
	
}

// peticionSEARCHpersonaBack()
// funcion que utilizariamos para hacer una solicitud a back para buscar personas
function peticionSEARCHpersonaBack(){

	alert('peticion a back search');
	SEARCHpersonaajax();
	//document.getElementById('id_form_persona').submit();
	
}





// add_persona()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_persona(){

	if (comprobar_form_persona_add()){
		peticionADDpersonaBack();
	}

}

// edit_persona()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_persona(){

	if (comprobar_form_persona_add()){
		peticionEDITpersonaBack();
	}

}

// delete_persona()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_persona(){

	peticionDELETEpersonaBack();

}

// search_persona()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_persona(){

	//if (comprobar_form_persona_search()){
		peticionSEARCHpersonaBack();
	//}else{
	//	alert('search con campos incorrectos')
	//}
}

// resetearformpersona()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformpersona(){


	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_dni").val('');
	$("#id_dni").on('blur',false);
	$("#id_nombre_persona").attr('readonly',false);
	$("#id_nombre_persona").val('');
	$("#id_apellidos_persona").attr('readonly',false);
	$("#id_apellidos_persona").val('');
	$("#id_fechaNacimiento_persona").attr('readonly',false);
	$("#id_fechaNacimiento_persona").val('');
	$("#id_direccion_persona").attr('readonly',false);
	$("#id_direccion_persona").val('');
	$("#id_telefono_persona").attr('readonly',false);
	$("#id_telefono_persona").val('');
	$("#id_email_persona").attr('readonly',false);
	$("#id_email_persona").val('');
	$("#id_foto_persona").attr('readonly',false);
	$("#id_foto_persona").val('');

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_persona").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: none');

	setLang();

}

// crearformADDpersona() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionpersona.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_persona al pulsarla y esta llama a peticionADDpersonaBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDpersona(){

	// resetear el formulario
	resetearformpersona();

	// se rellena el action del formulario
	document.getElementById('id_form_persona').action = 'http://193.147.87.202/procesaform.php';
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	// se coloca el onblur del nombre_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_nombre_persona').onblur = comprobar_nombre_persona;
	document.getElementById('id_nombre_persona').value = '';

	// se coloca el onblur del apellidos_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_apellidos_persona').onblur = comprobar_apellidos_persona;
	document.getElementById('id_apellidos_persona').value = '';

	// se coloca el onblur del fechaNacimiento_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_fechaNacimiento_persona').onblur = comprobar_fechaNacimiento_persona;
	document.getElementById('id_fechaNacimiento_persona').value = '';

	// se coloca el onblur del direccion_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_direccion_persona').onblur =  comprobar_direccion_persona;
	document.getElementById('id_direccion_persona').value = '';

	// se coloca el onblur del telefono_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_telefono_persona').onblur = comprobar_telefono_persona;
	document.getElementById('id_telefono_persona').value = '';

	// se coloca el onblur del email_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_email_persona').onblur = comprobar_email_persona;
	document.getElementById('id_email_persona').value = '';

	// se coloca el onblur del foto_persona y se pone a vacio el valor (o podriamos hacerlo en el resetearformpersona())
	document.getElementById('id_foto_persona').onblur = comprobar_foto_persona;
	document.getElementById('id_foto_persona').value = '';



	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_persona;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_persona').style.display = 'block';

}

//Función ajax con promesas
function personaADDAjaxPromesa(){

	crearformoculto('id_form_persona','');
	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function ADDpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaADDAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'add_persona_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_persona').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformEDITpersona() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionpersona.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_persona al pulsarla y esta llama a peticionEDITpersonaBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){

	// resetear al formulario
	resetearformpersona();
	
	// se crea el action del formulario 
	$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el persona
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly',true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);



	// se pone la función de validación de nombre_persona y se pone el valor por defecto proporcionado como parametro
	$('#id_nombre_persona').on('blur',comprobar_nombre_persona);
	$('#id_nombre_persona').val(nombre_persona);

	// se pone la función de validación de apellidos_persona y se pone el valor por defecto proporcionado como parametro
	$('#id_apellidos_persona').on('blur',comprobar_apellidos_persona);
	$('#id_apellidos_persona').val(apellidos_persona);

	// se pone la función de validación de fechaNacimiento_persona y se pone el valor por defecto proporcionado como parametro
	$('#id_fechaNacimiento_persona').on('blur',comprobar_fechaNacimiento_persona);
	$('#id_fechaNacimiento_persona').val(fechaNacimiento_persona);

	// se pone la función de validación de direccion_persona y se pone el valor por defecto proporcionado como parametro	
	$('#id_direccion_persona').on('blur',comprobar_direccion_persona);
	$('#id_direccion_persona').val(direccion_persona);

	// se pone la función de validación de telefono_persona y se pone el valor por defecto proporcionado como parametro
	$('#id_telefono_persona').on('blur',comprobar_telefono_persona);
	$('#id_telefono_persona').val(telefono_persona);

	// se pone la función de validación de email_persona y se pone el valor por defecto proporcionado como parametro	
	$('#id_email_persona').on('blur',comprobar_email_persona);
	$('#id_email_persona').val(email_persona);

	// se pone la función de validación de foto_persona y se pone el valor por defecto proporcionado como parametro	
	$('#id_foto_persona').on('blur',comprobar_foto_persona);
	$('#id_foto_persona').val(foto_persona);



	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_persona);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

//Función ajax con promesas
function personaEDITAjaxPromesa(){

	crearformoculto('id_form_persona','');
	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function EDITpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'edit_persona_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_persona').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}






// crearformDELETEpersona() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionpersona.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_persona al pulsarla y esta llama a peticionDELETEpersonaBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){

	resetearformpersona();
	
	$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre_persona);

	$("#id_apellidos_persona").attr('readonly','true')
	$("#id_apellidos_persona").val(apellidos_persona);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechaNacimiento_persona);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion_persona);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono_persona);

	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email_persona);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto_persona);


	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_persona);

	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

//Función ajax con promesas
function personaDELETEAjaxPromesa(){

	crearformoculto('id_form_persona','');
	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function DELETEpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'delete_persona_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_persona').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformSEARCHpersona() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionpersona.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_persona en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHpersona(){

	// reseteo el formulario
	resetearformpersona();
	
	// creo la accion para el formulario y el onsubmit
	//$("#id_form_persona").attr('action','http://193.147.87.202/procesaform.php');
	$("#id_form_persona").on('submit', search_persona);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);
	$("#id_dni").val('');

	// pongo el campo de nombre_persona editable y le asocio la funcion para el onblur
	$("#id_nombre_persona").attr('readonly',false)
	$("#id_nombre_persona").blur(comprobar_nombre_persona_search);
	$("#id_nombre_persona").val('');

	// pongo el campo de apellidos_persona editable y le asocio la funcion para el onblur
	$("#id_apellidos_persona").attr('readonly',false)
	$("#id_apellidos_persona").blur(comprobar_apellidos_persona_search);
	$("#id_apellidos_persona").val('');

	// pongo el campo de fechaNacimiento_persona editable y le asocio la funcion para el onblur
	$("#id_fechaNacimiento_persona").attr('readonly',false)
	$("#id_fechaNacimiento_persona").blur(comprobar_fechaNacimiento_persona_search);
	$("#id_fechaNacimiento_persona").val('');

	// pongo el campo de direccion_persona editable y le asocio la funcion para el onblur
	$("#id_direccion_persona").attr('readonly',false)
	$("#id_direccion_persona").blur(comprobar_direccion_persona_search);
	$("#id_direccion_persona").val('');

	// pongo el campo de telefono_persona editable y le asocio la funcion para el onblur
	$("#id_telefono_persona").attr('readonly',false)
	$("#id_telefono_persona").blur(comprobar_telefono_persona_search);
	$("#id_telefono_persona").val('');

	// pongo el campo de email_persona editable y le asocio la funcion para el onblur
	$("#id_email_persona").attr('readonly',false)
	$("#id_email_persona").blur(comprobar_email_persona_search);
	$("#id_email_persona").val('');

	// pongo el campo de foto_persona editable y le asocio la funcion para el onblur
	$("#id_foto_persona").attr('readonly',false)
	$("#id_foto_persona").blur(comprobar_foto_persona_search);
	$("#id_foto_persona").val('');

		
	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("input");
	botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.title= "Buscar";
	botonsubmit.alt= "Buscar";
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	
	// coloco la imagen para submit en el formulario
	$("#id_form_persona").append(botonsubmit);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}

//Función ajax con promesas
function personaSEARCHAjaxPromesa(){

	crearformoculto('id_form_persona','');
	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function SEARCHpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_persona_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_persona').remove();
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

function crearformSHOWCURRENTpersona(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){

	// reseteo el formulario
	resetearformpersona();
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre_persona);

	$("#id_apellidos_persona").attr('readonly','true')
	$("#id_apellidos_persona").val(apellidos_persona);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechaNacimiento_persona);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion_persona);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono_persona);

	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email_persona);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto_persona);
	
	$("#id_caja_formulario_persona").attr('style', 'display: block');
	
	
}

//Función ajax con promesas
function devolverpersonasAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'persona');
	insertacampo('form_generico','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function devolverpersonasajax() {
	
	var idioma = getCookie('lang');

	await devolverpersonasAjaxPromesa()
		.then((res) => {
			
			getListPersonas(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListPersonas(listapersonas){

	//listapersonas = devolverpersonas();
	//listapersonas = devolverpersonasajax();
	
	$("#id_datospersonas").html = '';

	for (let persona of listapersonas){

		datosfila = "'"+persona.dni+"',"+"'"+persona.nombre_persona+"',"+"'"+persona.apellidos_persona+"',"+"'"+persona.fechaNacimiento_persona+
		"',"+"'"+persona.direccion_persona+"',"+"'"+persona.telefono_persona+"',"+"'"+persona.email_persona+"',"+"'"+persona.foto_persona+"'";

		lineatabla = '<tr><td>'+persona['dni']+'</td><td>'+persona['nombre_persona']+'</td><td>'+persona['apellidos_persona']+'</td><td>'+persona['fechaNacimiento_persona']+'</td><td>'+persona['direccion_persona']+'</td><td>'+persona['telefono_persona']+'</td><td>'+persona['email_persona']+'</td><td>'+persona['foto_persona']+"</td>";


		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITpersona('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEpersona('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTpersona('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datospersonas").append(lineatabla);
	}

}


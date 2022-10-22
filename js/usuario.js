// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_usuario_add(){
	alert('entro en comprobar_form_usuario_add');

	if (comprobar_dni() && comprobar_usuario() && comprobar_id_rol()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_usuario_search(){
	alert('entro en comprobar_form_usuario_search');

	if (comprobar_dni_search() && comprobar_usuario_search() && comprobar_id_rol_search()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_usuario(){

	if (!size_minimo('id_usuario',3)){
		mensajeKO('id_usuario', 'Tamaño login demasiado corto (min 3 caracteres)');
		return false;
	}
	if (!size_maximo('id_usuario',45)){
		mensajeKO('id_usuario', 'Tamaño login demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!letras_sin_acento_y_numeros('id_usuario')){
		mensajeKO('id_usuario', 'El login contiene carecteres no permitidos (solo letras sin acentos y números)');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

// comprobar_usuario_search()
// funcion de validación de formato de usuario en search
function comprobar_usuario_search(){
	if (!size_maximo('id_usuario',45)){
		mensajeKO('id_usuario', 'Tamaño login demasiado largo (max 45 caracteres)');
		return false;
	}
	if (!letras_sin_acento_y_numeros('id_usuario')){
		mensajeKO('id_usuario', 'El login contiene carecteres no permitidos (solo letras sin acentos y números)');
		return false;
	}

	mensajeOK('id_usuario');
	return true;
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

// comprobar_id_rol()
// funcion de validacion del formato de id_rol en acciones que no son search
function comprobar_id_rol(){
	return true;
}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search(){
	return true;
}


// crearselect(
// id que va tener el select, 
// name que va tener el select, 
// atributo del array datos que utilizamos para el value de cada option, 
// atributo del array datos que vamos utilizar para el text de cada option, 
// array de datos con las filas de la entidad, 
// value que queremos que este como selected en el select)
// devuelve un elemento select
function crearselect(id, name, valueoption, textoption, datos, itemseleccionado){
	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;
	//alert(datos[0][valueoption]);

	for (let i=0;i<datos.length;i++){
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado){
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}
	
	return rol_select;

}

// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDusuarioBack(){

	alert('peticion a back add');
	ADDusuarioajax();
	//document.getElementById('id_form_usuario').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITusuarioBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEusuarioBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionSEARCHusuarioBack(){

	alert('peticion a back search');
	document.getElementById('id_form_usuario').submit();
	
}


function devolverusuarios(){

	datosusuarios = new Array();
	controlrol = 0;
	dnibase = '53820748';
	numerousuarios = 5;

	for (let i=0;i<numerousuarios;i++){
		
		usuario = new Array();
		dnibase = String(Number(dnibase)+Number(23));
		usuario['dni'] = dnibase + 'N';
		usuario['usuario'] = 'login'+i;

		rol = new Array();
		switch(controlrol){
			case 0:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'admin';
				rol['descrip_rol'] = 'descripcion admin';
				controlrol++;
				break;
			case 1:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'responsable';
				rol['descrip_rol'] = 'descripcion responsable';
				controlrol++;
				break;
			case 2:
				rol['id_rol'] = controlrol;
				rol['nombre_rol'] = 'coordinador';
				rol['descrip_rol'] = 'descripcion coordinador';
				controlrol = 0;
				break;
			default:
				break;

		}

		usuario['id_rol'] = rol;

		datosusuarios[i] = usuario;
	}

	return datosusuarios;

}



// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol

function devolverroles(){

	let rol1= new Array();
	rol1['id_rol']='0';
	rol1['nombre_rol']='admin';
	rol1['descrip_rol']='descripcion admin';
	
	let rol2= new Array();
	rol2['id_rol']='1';
	rol2['nombre_rol']='responsable';
	rol2['descrip_rol']='descripcion responsable';

	let rol3= new Array();
	rol3['id_rol']='2';
	rol3['nombre_rol']='coordinador';
	rol3['descrip_rol']='descripcion coordinador';
	
	datosroles = new Array();
	datosroles[0] = rol1;
	datosroles[1] = rol2;
	datosroles[2] = rol3;

	return datosroles;
}

// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_usuario(){

	if (comprobar_form_usuario_add()){
		peticionADDusuarioBack();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_usuario(){

	if (comprobar_form_usuario_add()){
		peticionEDITusuarioBack();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_usuario(){

	peticionDELETEusuarioBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_usuario(){

	if (comprobar_form_usuario_search()){
		peticionSEARCHusuarioBack();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformusuario(){

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_dni").val('');
	$("#id_dni").on('blur',false);
	$("#id_usuario").attr('readonly',false);
	$("#id_usuario").val('');
	$("#id_id_rol").attr('readonly',false);
	$("#id_id_rol").val('');

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_usuario").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: none');

	setLang();

}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDusuario(){

	// resetear el formulario
	resetearformusuario();

	// se rellena el action del formulario
	document.getElementById('id_form_usuario').action = 'javascript:ADDusuarioajax()';
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_usuario').onblur = comprobar_usuario;
	document.getElementById('id_usuario').value = '';

	// se crea un array con los roles como si viniera del back
	datosroles = devolverroles();

	// se crea un elemento select a partir de los datos del array datosroles y se coloca dentro del div del formulario para el select
	rol_select = crearselect('id_id_rol','id_rol','id_rol','nombre_rol', datosroles, '');
	document.getElementById('caja_select_rol').appendChild(rol_select);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_usuario;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_usuario').style.display = 'block';

}

//Función ajax con promesas
function usuarioADDAjaxPromesa(){

	crearformoculto('id_form_usuario','');
	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
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

async function ADDusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioADDAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'add_usuario_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_usuario').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITusuario(dni, usuario, rol){

	// resetear al formulario
	resetearformusuario();
	
	// se crea el action del formulario 
	$("#id_form_usuario").attr('action','javascript:EDITusuarioajax()');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly',true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_usuario").on('blur',comprobar_usuario);
	$("#id_usuario").val(usuario);

	// se crea un array de roles como vendría del back
	datosroles = devolverroles();
	
	// se crea un elemento select para el formulario con todos los roles que vienen en el array datosroles
	rol_select = crearselect('id_id_rol','id_rol', 'id_rol', 'nombre_rol', datosroles, rol);
	
	// se añade el select a su div contenedor
	$("#caja_select_rol").append(rol_select);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_usuario);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}



//Función ajax con promesas
function usuarioEDITAjaxPromesa(){

	crearformoculto('id_form_usuario','');
	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
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

async function EDITusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'edit_usuario_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_usuario').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEusuario(dni, usuario, rol){

	resetearformusuario();
	
	$("#id_form_usuario").attr('action','javascript:DELETEusuarioajax()');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly','true')
	$("#id_usuario").val(usuario);

	datosroles = devolverroles();
	rol_select = crearselect('id_id_rol','id_rol', 'id_rol', 'nombre_rol', datosroles, rol);
	$("#caja_select_rol").append(rol_select);
	// como readonly solo es aplicable en input y textarea 
	// y si se utiliza disable sobre el select este no se visualiza
	// se pone cada uno de los input del select que no este selected a disable
	$("#id_id_rol:not(:selected)").attr('disabled',true);
	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_usuario);

	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

//Función ajax con promesas
function usuarioDELETEAjaxPromesa(){

	crearformoculto('id_form_usuario','');
	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
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

async function DELETEusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'delete_usuario_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_usuario').remove();
		document.getElementById('id_imagen_enviar_form').remove(); 
}


function crearformSEARCHusuario(){

	// reseteo el formulario
	resetearformusuario();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_usuario").attr('action','javascript:SEARCHusuarioajax()');
	$("#id_form_usuario").on('submit', search_usuario);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);
	$("#id_dni").val('');

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly',false)
	$("#id_usuario").blur(comprobar_usuario_search);
	$("#id_usuario").val('');

	// rellena el array datosroles con filas de roles
	datosroles = devolverroles();
	// crea el objeto select con roles a partir de los datos proporcionados en datosroles
	rol_select = crearselect('id_id_rol','id_rol', 'id_rol', 'nombre_rol', datosroles, '');

	// al ser search se necesita el valor vacio. Se crea el option vacio y se incluye colocandolo como seleccionado
	optionrolvacio = document.createElement("option");
	optionrolvacio.value = ' ';
	optionrolvacio.text = ' ';
	optionrolvacio.selected = true;

	// se añade el option vacio creado al select
	rol_select.append(optionrolvacio);

	// se añade el select a la caja de select
	$("#caja_select_rol").append(rol_select);
		
	//eliminamos la imagen que utilizamos en las otras acciones para poder hacer un submit con el formulario
	$("#id_imagen_enviar_form").remove();

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';

	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("input");
	botonsubmit.type = 'image';
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.title= "Buscar";
	botonsubmit.alt= "Buscar";
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	
	// coloco la imagen para submit en el formulario
	$("#id_form_usuario").append(botonsubmit);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

//Función ajax con promesas
function usuarioSEARCHAjaxPromesa(){

	crearformoculto('id_form_usuario','');
	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
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

async function SEARCHusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_usuario_OK';
			}
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		document.getElementById('id_form_usuario').remove();
		//document.getElementById('botonsubmit').remove(); 
}

function crearformSHOWCURRENTusuario(dni, usuario, rol){

	// reseteo el formulario
	resetearformusuario();
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly','true')
	$("#id_usuario").val(usuario);

	datosroles = devolverroles();
	rol_select = crearselect('id_id_rol','id_rol', 'id_rol', 'nombre_rol', datosroles, rol);
	$("#caja_select_rol").append(rol_select);
	$("#id_id_rol").attr('readonly','true');
	
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
	
	
}

//Función ajax con promesas
function devolverusuariosAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'usuario');
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

async function devolverusuariosajax() {
	
	var idioma = getCookie('lang');

	await devolverusuariosAjaxPromesa()
		.then((res) => {
			
			getListUsuarios(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListUsuarios(listausuarios){

	//listausuarios = devolverusuarios();
	//listausuarios = devolverusuariosajax();
	
	$("#id_datosusuarios").html = '';

	for (let usuario of listausuarios){

		datosfila = "'"+usuario.dni+"',"+"'"+usuario.usuario+"',"+"'"+usuario.id_rol.id_rol+"'";

		lineatabla = '<tr><td>'+usuario['dni']+'</td><td>'+usuario['usuario']+'</td><td>'+usuario['id_rol'].nombre_rol+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITusuario('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEusuario('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTusuario('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosusuarios").append(lineatabla);
	}

}
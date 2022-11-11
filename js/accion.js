// comprobar_form_accion_add()
// funcion para validar el submit del formulario accion para las acciones que no sean search

function comprobar_form_accion_add(){

	if (comprobar_id_accion() && comprobar_nombre_accion() && comprobar_descrip_accion()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_accion_search()
// funcion para validar el submit del formulario de accion para la accion search
function comprobar_form_accion_search(){
	
	if (comprobar_id_accion_search() && comprobar_nombre_accion_search() && comprobar_descrip_accion_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_dni()
// funcion de validación de formato de dni en acciones que no sean search
function comprobar_id_accion(){
		return true;	
}


function comprobar_id_accion_search(){

	if(document.getElementById('id_id_accion').value == null || document.getElementById('id_id_accion').value == ''){
		mensajeOK('id_id_accion');
		return true;
	}
	if (!size_maximo('id_id_accion',5)){
		mensajeKO('id_id_accion', 'id_accion_largo_ko');
		return false;
	}
	if (!solo_numeros('id_id_accion')){
		mensajeKO('id_id_accion', 'id_accion_formato_ko');
		return false;
	}

	mensajeOK('id_id_accion');
	return true;
}



// comprobar_nombre_accion()
// funcion de validación de formato de nombre_accion en acciones que no sean search
function comprobar_nombre_accion(){

	if (!size_minimo('id_nombre_accion',6)){
		mensajeKO('id_nombre_accion', 'nombre_accion_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_accion',48)){
		mensajeKO('id_nombre_accion', 'nombre_accion_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_accion')){
		mensajeKO('id_nombre_accion', 'nombre_accion_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_accion');
	return true;

}

// comprobar_nombre_accion_search()
// funcion de validación de formato de nombre_accion en search
function comprobar_nombre_accion_search(){

	if(document.getElementById('id_nombre_accion').value == null || document.getElementById('id_nombre_accion').value == ''){
		mensajeOK('id_nombre_accion');
		return true;
	}
	if (!size_maximo('id_nombre_accion',48)){
		mensajeKO('id_nombre_accion', 'nombre_accion_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_accion')){
		mensajeKO('id_nombre_accion', 'nombre_accion_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_accion');
	return true;

}

// comprobar_descrip_accion()
// funcion de validación de formato de descrip_accion en acciones que no sean search
function comprobar_descrip_accion(){

	if (!size_minimo('id_descrip_accion',20)){
		mensajeKO('id_descrip_accion', 'descrip_accion_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_accion',200)){
		mensajeKO('id_descrip_accion', 'descrip_accion_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_accion')){
		mensajeKO('id_descrip_accion', 'descrip_accion_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_accion');
	return true;

}

// comprobar_descrip_accion_search()
// funcion de validación de formato de descrip_accion en search
function comprobar_descrip_accion_search(){

	if(document.getElementById('id_descrip_accion').value == null || document.getElementById('id_descrip_accion').value == ''){
		mensajeOK('id_descrip_accion');
		return true;
	}
	if (!size_maximo('id_descrip_accion',200)){
		mensajeKO('id_descrip_accion', 'descrip_accion_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_accion')){
		mensajeKO('id_descrip_accion', 'descrip_accion_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_accion');
	return true;

}






// add_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_accion(){

	if (comprobar_form_accion_add()){
		ADDaccionajax();
	}

}

// edit_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_accion(){

	if (comprobar_form_accion_add()){
		EDITaccionajax();
	}

}

// delete_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_accion(){

	DELETEaccionajax();
}

// search_accion()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_accion(){

	if (comprobar_form_accion_search()){
		SEARCHaccionajax();
	}
}

// resetearformaccion()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformaccion(){

	document.getElementById('id_id_accion_label').style.display = 'inline';
	document.getElementById('id_id_accion').style.display = 'inline';

	// quitar el readonly de los atributos
	$("#id_id_accion").attr('readonly',false);
	$("#id_id_accion").val('');
	$("#id_id_accion").on('blur',false);
	document.getElementById('id_id_accion').onblur = "";
	document.getElementById('id_id_accion').style.borderColor = "#676774";

	$("#id_nombre_accion").attr('readonly',false);
	$("#id_nombre_accion").val('');
	document.getElementById('id_nombre_accion').onblur = "";
	document.getElementById('id_nombre_accion').style.borderColor = "#676774";

	$("#id_descrip_accion").attr('readonly',false);
	$("#id_descrip_accion").val('');
	document.getElementById('id_descrip_accion').onblur = "";
	document.getElementById('id_descrip_accion').style.borderColor = "#676774";


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_accion").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: none');

	setLang();

}

// crearformADDaccion() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionaccion.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_accion al pulsarla y esta llama a peticionADDaccionBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDaccion(){

	// resetear el formulario
	resetearformaccion();

	// se rellena el action del formulario
	document.getElementById('id_form_accion').action = 'http://193.147.87.202/procesaform.php';
	
	// se elimina el id_accion
	document.getElementById('id_id_accion_label').style.display = 'none';
	document.getElementById('id_id_accion').style.display = 'none';

	// se coloca el onblur del nombre_accion y se pone a vacio el valor (o podriamos hacerlo en el resetearformaccion())
	document.getElementById('id_nombre_accion').onblur = comprobar_nombre_accion;
	document.getElementById('id_nombre_accion').value = '';

	// se coloca el onblur del descrip_accion y se pone a vacio el valor (o podriamos hacerlo en el resetearformaccion())
	document.getElementById('id_descrip_accion').onblur = comprobar_descrip_accion;
	document.getElementById('id_descrip_accion').value = '';


	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_accion;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_accion').style.display = 'block';

}

//Función ajax con promesas
function accionADDAjaxPromesa(){

	crearformoculto('id_form_accion','');
	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function ADDaccionajax() {
	
	var idioma = getCookie('lang');

	await accionADDAjaxPromesa()
		.then((res) => {
			devolveraccionesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'add_accion_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformaccion();

}


// crearformEDITaccion() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionaccion.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_accion al pulsarla y esta llama a peticionEDITaccionBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITaccion(id_accion, nombre_accion, descrip_accion){

	// resetear al formulario
	resetearformaccion();
	
	// se crea el action del formulario 
	$("#id_form_accion").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el id_accion al ser clave primaria y no querer que se modifique por el id_accion
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_accion").attr('readonly',true);
	$("#id_id_accion").blur(comprobar_id_accion);
	$("#id_id_accion").val(id_accion);


	// se pone la función de validación de nombre_accion y se pone el valor por defecto proporcionado como parametro
	$('#id_nombre_accion').on('blur',comprobar_nombre_accion);
	$('#id_nombre_accion').val(nombre_accion);

	// se pone la función de validación de descrip_accion y se pone el valor por defecto proporcionado como parametro
	$('#id_descrip_accion').on('blur',comprobar_descrip_accion);
	$('#id_descrip_accion').val(descrip_accion);

	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_accion);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

//Función ajax con promesas
function accionEDITAjaxPromesa(){
	
	crearformoculto('id_form_accion','');
	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function EDITaccionajax() {
	
	var idioma = getCookie('lang');

	await accionEDITAjaxPromesa()
		.then((res) => {
			devolveraccionesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'edit_accion_OK';
			}
			mensajeactionOK(res.code);
			
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformaccion();
}






// crearformDELETEaccion() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionaccion.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_accion al pulsarla y esta llama a peticionDELETEaccionBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEaccion(id_accion, nombre_accion, descrip_accion){

	resetearformaccion();
	
	$("#id_form_accion").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_id_accion").attr('readonly','true')
	$("#id_id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);


	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_accion);

	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

//Función ajax con promesas
function accionDELETEAjaxPromesa(){

	crearformoculto('id_form_accion','');
	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_accion").serialize(),
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

async function DELETEaccionajax() {
	
	var idioma = getCookie('lang');

	await accionDELETEAjaxPromesa()
		.then((res) => {
			devolveraccionesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'delete_accion_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformaccion();
}


// crearformSEARCHaccion() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionaccion.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_accion en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHaccion(){

	// reseteo el formulario
	resetearformaccion();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_accion").on('submit', search_accion);
	
	// pongo el campo de id_accion editable y le asocio la funcion para el onblur
	$("#id_id_accion").attr('readonly', false);
	$("#id_id_accion").blur(comprobar_id_accion_search);
	$("#id_id_accion").val('');

	// pongo el campo de nombre_accion editable y le asocio la funcion para el onblur
	$("#id_nombre_accion").attr('readonly',false)
	$("#id_nombre_accion").blur(comprobar_nombre_accion_search);
	$("#id_nombre_accion").val('');

	// pongo el campo de descrip_accion editable y le asocio la funcion para el onblur
	$("#id_descrip_accion").attr('readonly',false)
	$("#id_descrip_accion").blur(comprobar_descrip_accion_search);
	$("#id_descrip_accion").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_accion").on('click', search_accion);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}



//Función ajax con promesas
function accionSEARCHAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'accion');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','id_accion', document.getElementById('id_id_accion').value);
	insertacampo('form_generico','nombre_accion', document.getElementById('id_nombre_accion').value);
	insertacampo('form_generico','descrip_accion', document.getElementById('id_descrip_accion').value);

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
			alert('fail!!!:' + jqXHR.status);
			mensajeHTTPFAIL(jqXHR.status);
		});
	}
	)
}


async function SEARCHaccionajax() {
	
	var idioma = getCookie('lang');
	
	await accionSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_accion_OK';	}
			getListAcciones(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}

function crearformSHOWCURRENTaccion(id_accion, nombre_accion, descrip_accion){

	// reseteo el formulario
	resetearformaccion();
	
	$("#id_id_accion").attr('readonly','true')
	$("#id_id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);
	
	$("#id_caja_formulario_accion").attr('style', 'display: block');
	
}



//Función ajax con promesas
function devolveraccionesAjaxPromesa(){

	crearformoculto('form_devolver_acciones','');
	insertacampo('form_devolver_acciones','controlador', 'accion');
	insertacampo('form_devolver_acciones','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_devolver_acciones").serialize(),
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

async function devolveraccionesajax() {
	
	var idioma = getCookie('lang');

	await devolveraccionesAjaxPromesa()
		.then((res) => {
			
			getListAcciones(res.resource);
					
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang();
		});

		document.getElementById('form_devolver_acciones').remove();
}

//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// accion: valor para colocar por defecto en el select
//
async function pintarselectaccionesAjax(deshabilitado = false, convacio = false, accion=null) {
	var idioma = getCookie('lang');

	await devolveraccionesAjaxPromesa()
		.then((res) => {
			let accion_select = crearselect(convacio,'id_id_accion','id_accion', 'id_accion', 'nombre_accion', res.resource, accion);
			$("#caja_select_acc").append(accion_select);
			if (deshabilitado){
				$("#id_id_accion:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_acciones').remove();
}


function getListAcciones(listaacciones){
	
	document.getElementById('id_datosacciones').innerHTML= '';

	for (let accion of listaacciones){

		datosfila = "'"+accion.id_accion+"',"+"'"+accion.nombre_accion+"',"+"'"+accion.descrip_accion+"'";

		lineatabla = '<tr><td>'+accion['id_accion']+'</td><td>'+accion['nombre_accion']+'</td><td>'+accion['descrip_accion']+"</td>";

		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITaccion('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEaccion('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTaccion('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosacciones").append(lineatabla);
		
	
	}

}
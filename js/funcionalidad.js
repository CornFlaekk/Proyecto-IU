// comprobar_form_funcionalidad_add()
// funcion para validar el submit del formulario funcionalidad para las funcionalidades que no sean search

function comprobar_form_funcionalidad_add(){

	if (comprobar_id_funcionalidad() && comprobar_nombre_funcionalidad() && comprobar_descrip_funcionalidad()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_funcionalidad_search()
// funcion para validar el submit del formulario de funcionalidad para la funcionalidad search
function comprobar_form_funcionalidad_search(){
	
	if (comprobar_id_funcionalidad_search() && comprobar_nombre_funcionalidad_search() && comprobar_descrip_funcionalidad_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_dni()
// funcion de validación de formato de dni en funcionalidades que no sean search
function comprobar_id_funcionalidad(){
		return true;	
}


function comprobar_id_funcionalidad_search(){
	return true;	
}



// comprobar_nombre_funcionalidad()
// funcion de validación de formato de nombre_funcionalidad en funcionalidades que no sean search
function comprobar_nombre_funcionalidad(){

	if (!size_minimo('id_nombre_funcionalidad',6)){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_funcionalidad',48)){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_funcionalidad')){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_funcionalidad');
	return true;

}

// comprobar_nombre_funcionalidad_search()
// funcion de validación de formato de nombre_funcionalidad en search
function comprobar_nombre_funcionalidad_search(){

	if(document.getElementById('id_nombre_funcionalidad').value == null || document.getElementById('id_nombre_funcionalidad').value == ''){
		mensajeOK('id_nombre_funcionalidad');
		return true;
	}
	if (!size_maximo('id_nombre_funcionalidad',48)){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_funcionalidad')){
		mensajeKO('id_nombre_funcionalidad', 'nombre_funcionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_funcionalidad');
	return true;

}

// comprobar_descrip_funcionalidad()
// funcion de validación de formato de descrip_funcionalidad en funcionalidades que no sean search
function comprobar_descrip_funcionalidad(){

	if (!size_minimo('id_descrip_funcionalidad',20)){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_funcionalidad',200)){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_funcionalidad')){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_funcionalidad');
	return true;

}

// comprobar_descrip_funcionalidad_search()
// funcion de validación de formato de descrip_funcionalidad en search
function comprobar_descrip_funcionalidad_search(){

	if(document.getElementById('id_descrip_funcionalidad').value == null || document.getElementById('id_descrip_funcionalidad').value == ''){
		mensajeOK('id_descrip_funcionalidad');
		return true;
	}
	if (!size_maximo('id_descrip_funcionalidad',200)){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_funcionalidad')){
		mensajeKO('id_descrip_funcionalidad', 'descrip_funcionalidad_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_funcionalidad');
	return true;

}






// add_funcionalidad()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la funcionalidad
function add_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		ADDfuncionalidadajax();
	}

}

// edit_funcionalidad()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la funcionalidad
function edit_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		EDITfuncionalidadajax();
	}

}

// delete_funcionalidad()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la funcionalidad
function delete_funcionalidad(){

	DELETEfuncionalidadajax();
}

// search_funcionalidad()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_funcionalidad(){

	if (comprobar_form_funcionalidad_search()){
		SEARCHfuncionalidadajax();
	}
}

// resetearformfuncionalidad()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de funcionalidades
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformfuncionalidad(){

	document.getElementById('id_id_funcionalidad_label').style.display = 'inline';
	document.getElementById('id_id_funcionalidad').style.display = 'inline';

	// quitar el readonly de los atributos
	$("#id_id_funcionalidad").attr('readonly',false);
	$("#id_id_funcionalidad").val('');
	$("#id_id_funcionalidad").on('blur',false);
	document.getElementById('id_id_funcionalidad').onblur = "";
	document.getElementById('id_id_funcionalidad').style.borderColor = "#676774";

	$("#id_nombre_funcionalidad").attr('readonly',false);
	$("#id_nombre_funcionalidad").val('');
	document.getElementById('id_nombre_funcionalidad').onblur = "";
	document.getElementById('id_nombre_funcionalidad').style.borderColor = "#676774";

	$("#id_descrip_funcionalidad").attr('readonly',false);
	$("#id_descrip_funcionalidad").val('');
	document.getElementById('id_descrip_funcionalidad').onblur = "";
	document.getElementById('id_descrip_funcionalidad').style.borderColor = "#676774";


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_funcionalidad").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_funcionalidadsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');

	setLang();

}

// crearformADDfuncionalidad() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionfuncionalidad.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_funcionalidad al pulsarla y esta llama a peticionADDfuncionalidadBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDfuncionalidad(){

	// resetear el formulario
	resetearformfuncionalidad();

	// se rellena el action del formulario
	document.getElementById('id_form_funcionalidad').action = 'http://193.147.87.202/procesaform.php';
	
	// se elimina el id_funcionalidad
	document.getElementById('id_id_funcionalidad_label').style.display = 'none';
	document.getElementById('id_id_funcionalidad').style.display = 'none';

	// se coloca el onblur del nombre_funcionalidad y se pone a vacio el valor (o podriamos hacerlo en el resetearformfuncionalidad())
	document.getElementById('id_nombre_funcionalidad').onblur = comprobar_nombre_funcionalidad;
	document.getElementById('id_nombre_funcionalidad').value = '';

	// se coloca el onblur del descrip_funcionalidad y se pone a vacio el valor (o podriamos hacerlo en el resetearformfuncionalidad())
	document.getElementById('id_descrip_funcionalidad').onblur = comprobar_descrip_funcionalidad;
	document.getElementById('id_descrip_funcionalidad').value = '';


	// se coloca una imagen para la funcionalidad de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_funcionalidad;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'block';

}

//Función ajax con promesas
function funcionalidadADDAjaxPromesa(){

	crearformoculto('id_form_funcionalidad','');
	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function ADDfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadADDAjaxPromesa()
		.then((res) => {
			devolverfuncionalidadesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'add_funcionalidad_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformfuncionalidad();

}


// crearformEDITfuncionalidad() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionfuncionalidad.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_funcionalidad al pulsarla y esta llama a peticionEDITfuncionalidadBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	// resetear al formulario
	resetearformfuncionalidad();
	
	// se crea el action del formulario 
	$("#id_form_funcionalidad").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el id_funcionalidad al ser clave primaria y no querer que se modifique por el id_funcionalidad
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_funcionalidad").attr('readonly',true);
	$("#id_id_funcionalidad").blur(comprobar_id_funcionalidad);
	$("#id_id_funcionalidad").val(id_funcionalidad);


	// se pone la función de validación de nombre_funcionalidad y se pone el valor por defecto proporcionado como parametro
	$('#id_nombre_funcionalidad').on('blur',comprobar_nombre_funcionalidad);
	$('#id_nombre_funcionalidad').val(nombre_funcionalidad);

	// se pone la función de validación de descrip_funcionalidad y se pone el valor por defecto proporcionado como parametro
	$('#id_descrip_funcionalidad').on('blur',comprobar_descrip_funcionalidad);
	$('#id_descrip_funcionalidad').val(descrip_funcionalidad);

	
	// se coloca una imagen para la funcionalidad de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_funcionalidad);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

//Función ajax con promesas
function funcionalidadEDITAjaxPromesa(){
	
	crearformoculto('id_form_funcionalidad','');
	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function EDITfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadEDITAjaxPromesa()
		.then((res) => {
			devolverfuncionalidadesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'edit_funcionalidad_OK';
			}
			mensajeactionOK(res.code);
			
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformfuncionalidad();
}






// crearformDELETEfuncionalidad() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionfuncionalidad.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_funcionalidad al pulsarla y esta llama a peticionDELETEfuncionalidadBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	resetearformfuncionalidad();
	
	$("#id_form_funcionalidad").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_id_funcionalidad").attr('readonly','true')
	$("#id_id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);


	
	// se coloca una imagen para la funcionalidad de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_funcionalidad);

	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

//Función ajax con promesas
function funcionalidadDELETEAjaxPromesa(){

	crearformoculto('id_form_funcionalidad','');
	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_funcionalidad").serialize(),
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

async function DELETEfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadDELETEAjaxPromesa()
		.then((res) => {
			devolverfuncionalidadesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'delete_funcionalidad_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformfuncionalidad();
}


// crearformSEARCHfuncionalidad() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionfuncionalidad.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_funcionalidad en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHfuncionalidad(){

	// reseteo el formulario
	resetearformfuncionalidad();
	
	// creo la funcionalidad para el formulario y el onsubmit
	$("#id_form_funcionalidad").on('submit', search_funcionalidad);
	
	// pongo el campo de id_funcionalidad editable y le asocio la funcion para el onblur
	$("#id_id_funcionalidad").attr('readonly', false);
	$("#id_id_funcionalidad").blur(comprobar_id_funcionalidad_search);
	$("#id_id_funcionalidad").val('');

	// pongo el campo de nombre_funcionalidad editable y le asocio la funcion para el onblur
	$("#id_nombre_funcionalidad").attr('readonly',false)
	$("#id_nombre_funcionalidad").blur(comprobar_nombre_funcionalidad_search);
	$("#id_nombre_funcionalidad").val('');

	// pongo el campo de descrip_funcionalidad editable y le asocio la funcion para el onblur
	$("#id_descrip_funcionalidad").attr('readonly',false)
	$("#id_descrip_funcionalidad").blur(comprobar_descrip_funcionalidad_search);
	$("#id_descrip_funcionalidad").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_funcionalidad").on('click', search_funcionalidad);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}



//Función ajax con promesas
function funcionalidadSEARCHAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'funcionalidad');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','id_funcionalidad', document.getElementById('id_id_funcionalidad').value);
	insertacampo('form_generico','nombre_funcionalidad', document.getElementById('id_nombre_funcionalidad').value);
	insertacampo('form_generico','descrip_funcionalidad', document.getElementById('id_descrip_funcionalidad').value);

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


async function SEARCHfuncionalidadajax() {
	
	var idioma = getCookie('lang');
	
	await funcionalidadSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_funcionalidad_OK';	}
			getListFuncionalidades(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}

function crearformSHOWCURRENTfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	// reseteo el formulario
	resetearformfuncionalidad();
	
	$("#id_id_funcionalidad").attr('readonly','true')
	$("#id_id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);
	
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
	
}





//Función ajax con promesas
function devolverfuncionalidadesAjaxPromesa(){

	crearformoculto('form_devolver_funcionalidades','');
	insertacampo('form_devolver_funcionalidades','controlador', 'funcionalidad');
	insertacampo('form_devolver_funcionalidades','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_devolver_funcionalidades").serialize(),
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

async function devolverfuncionalidadesajax() {
	
	var idioma = getCookie('lang');

	await devolverfuncionalidadesAjaxPromesa()
		.then((res) => {
			
			getListFuncionalidades(res.resource);
					
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang();
		});

		document.getElementById('form_devolver_funcionalidades').remove();
}

//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// funcionalidad: valor para colocar por defecto en el select
//
async function pintarselectfuncionalidadesAjax(deshabilitado = false, convacio = false, funcionalidad=null) {
	var idioma = getCookie('lang');

	await devolverfuncionalidadesAjaxPromesa()
		.then((res) => {
			let funcionalidad_select = crearselect(convacio,'id_id_funcionalidad','id_funcionalidad', 'id_funcionalidad', 'nombre_funcionalidad', res.resource, funcionalidad);
			$("#caja_select_fun").append(funcionalidad_select);
			if (deshabilitado){
				$("#id_id_funcionalidad:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
            alert(res.rescode);
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_funcionalidades').remove();
}


function getListFuncionalidades(listafuncionalidades){
	
	document.getElementById('id_datosfuncionalidades').innerHTML= '';

	for (let funcionalidad of listafuncionalidades){

		datosfila = "'"+funcionalidad.id_funcionalidad+"',"+"'"+funcionalidad.nombre_funcionalidad+"',"+"'"+funcionalidad.descrip_funcionalidad+"'";

		lineatabla = '<tr><td>'+funcionalidad['id_funcionalidad']+'</td><td>'+funcionalidad['nombre_funcionalidad']+'</td><td>'+funcionalidad['descrip_funcionalidad']+"</td>";

		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEfuncionalidad('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTfuncionalidad('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosfuncionalidades").append(lineatabla);
		
	
	}

}
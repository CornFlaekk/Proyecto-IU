// comprobar_form_rol_add()
// funcion para validar el submit del formulario rol para las acciones que no sean search

function comprobar_form_rol_add(){
	alert('entro en comprobar_form_rol_add');

	if (comprobar_id_rol() && comprobar_nombre_rol() && comprobar_descrip_rol()){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_rol_search()
// funcion para validar el submit del formulario de rol para la accion search
function comprobar_form_rol_search(){
	alert('entro en comprobar_form_rol_search');
	
	if (comprobar_id_rol_search() && comprobar_nombre_rol_search() && comprobar_descrip_rol_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_dni()
// funcion de validación de formato de dni en acciones que no sean search
function comprobar_id_rol(){
		return true;	
}


function comprobar_id_rol_search(){
	return true;	
}



// comprobar_nombre_rol()
// funcion de validación de formato de nombre_rol en acciones que no sean search
function comprobar_nombre_rol(){

	if (!size_minimo('id_nombre_rol',6)){
		mensajeKO('id_nombre_rol', 'nombre_rol_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_rol',48)){
		mensajeKO('id_nombre_rol', 'nombre_rol_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_rol')){
		mensajeKO('id_nombre_rol', 'nombre_rol_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_rol');
	return true;

}

// comprobar_nombre_rol_search()
// funcion de validación de formato de nombre_rol en search
function comprobar_nombre_rol_search(){

	if(document.getElementById('id_nombre_rol').value == null || document.getElementById('id_nombre_rol').value == ''){
		mensajeOK('id_nombre_rol');
		return true;
	}
	if (!size_maximo('id_nombre_rol',48)){
		mensajeKO('id_nombre_rol', 'nombre_rol_largo_ko');
		return false;
	}
	if (!letras_sin_acento('id_nombre_rol')){
		mensajeKO('id_nombre_rol', 'nombre_rol_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_rol');
	return true;

}

// comprobar_descrip_rol()
// funcion de validación de formato de descrip_rol en acciones que no sean search
function comprobar_descrip_rol(){

	if (!size_minimo('id_descrip_rol',20)){
		mensajeKO('id_descrip_rol', 'descrip_rol_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_rol',200)){
		mensajeKO('id_descrip_rol', 'descrip_rol_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_rol')){
		mensajeKO('id_descrip_rol', 'descrip_rol_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_rol');
	return true;

}

// comprobar_descrip_rol_search()
// funcion de validación de formato de descrip_rol en search
function comprobar_descrip_rol_search(){

	if(document.getElementById('id_descrip_rol').value == null || document.getElementById('id_descrip_rol').value == ''){
		mensajeOK('id_descrip_rol');
		return true;
	}
	if (!size_maximo('id_descrip_rol',200)){
		mensajeKO('id_descrip_rol', 'descrip_rol_largo_ko');
		return false;
	}
	if (!caracteres_descripcion('id_descrip_rol')){
		mensajeKO('id_descrip_rol', 'descrip_rol_caracteres_ko');
		return false;
	}

	mensajeOK('id_descrip_rol');
	return true;

}






// add_rol()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_rol(){

	if (comprobar_form_rol_add()){
		ADDrolajax();
	}

}

// edit_rol()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_rol(){

	if (comprobar_form_rol_add()){
		EDITrolajax();
	}

}

// delete_rol()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_rol(){

	DELETErolajax();
}

// search_rol()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_rol(){

	if (comprobar_form_rol_search()){
		SEARCHrolajax();
	}
}

// resetearformrol()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformrol(){

	document.getElementById('id_id_rol_label').style.display = 'inline';
	document.getElementById('id_id_rol').style.display = 'inline';

	// quitar el readonly de los atributos
	$("#id_id_rol").attr('readonly',false);
	$("#id_id_rol").val('');
	$("#id_id_rol").on('blur',false);
	document.getElementById('id_id_rol').onblur = "";
	document.getElementById('id_id_rol').style.borderColor = "#676774";

	$("#id_nombre_rol").attr('readonly',false);
	$("#id_nombre_rol").val('');
	document.getElementById('id_nombre_rol').onblur = "";
	document.getElementById('id_nombre_rol').style.borderColor = "#676774";

	$("#id_descrip_rol").attr('readonly',false);
	$("#id_descrip_rol").val('');
	document.getElementById('id_descrip_rol').onblur = "";
	document.getElementById('id_descrip_rol').style.borderColor = "#676774";


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_rol").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: none');

	setLang();

}

// crearformADDrol() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionrol.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_rol al pulsarla y esta llama a peticionADDrolBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDrol(){

	// resetear el formulario
	resetearformrol();

	// se rellena el action del formulario
	document.getElementById('id_form_rol').action = 'http://193.147.87.202/procesaform.php';
	
	// se elimina el id_rol
	document.getElementById('id_id_rol_label').style.display = 'none';
	document.getElementById('id_id_rol').style.display = 'none';

	// se coloca el onblur del nombre_rol y se pone a vacio el valor (o podriamos hacerlo en el resetearformrol())
	document.getElementById('id_nombre_rol').onblur = comprobar_nombre_rol;
	document.getElementById('id_nombre_rol').value = '';

	// se coloca el onblur del descrip_rol y se pone a vacio el valor (o podriamos hacerlo en el resetearformrol())
	document.getElementById('id_descrip_rol').onblur = comprobar_descrip_rol;
	document.getElementById('id_descrip_rol').value = '';


	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_rol;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rol').style.display = 'block';

}

//Función ajax con promesas
function rolADDAjaxPromesa(){

	crearformoculto('id_form_rol','');
	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function ADDrolajax() {
	
	var idioma = getCookie('lang');

	await rolADDAjaxPromesa()
		.then((res) => {
			devolverrolesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'add_rol_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformrol();

}


// crearformEDITrol() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionrol.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_rol al pulsarla y esta llama a peticionEDITrolBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITrol(id_rol, nombre_rol, descrip_rol){

	// resetear al formulario
	resetearformrol();
	
	// se crea el action del formulario 
	$("#id_form_rol").attr('action','http://193.147.87.202/procesaform.php');
	
	// se pone no editable el id_rol al ser clave primaria y no querer que se modifique por el id_rol
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_rol").attr('readonly',true);
	$("#id_id_rol").blur(comprobar_id_rol);
	$("#id_id_rol").val(id_rol);


	// se pone la función de validación de nombre_rol y se pone el valor por defecto proporcionado como parametro
	$('#id_nombre_rol').on('blur',comprobar_nombre_rol);
	$('#id_nombre_rol').val(nombre_rol);

	// se pone la función de validación de descrip_rol y se pone el valor por defecto proporcionado como parametro
	$('#id_descrip_rol').on('blur',comprobar_descrip_rol);
	$('#id_descrip_rol').val(descrip_rol);

	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_rol);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

//Función ajax con promesas
function rolEDITAjaxPromesa(){
	
	crearformoculto('id_form_rol','');
	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function EDITrolajax() {
	
	var idioma = getCookie('lang');

	await rolEDITAjaxPromesa()
		.then((res) => {
			devolverrolsajax();
			if (res.code = 'SQL_OK'){
				res.code = 'edit_rol_OK';
			}
			mensajeactionOK(res.code);
			
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformrol();
}






// crearformDELETErol() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionrol.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_rol al pulsarla y esta llama a peticionDELETErolBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETErol(id_rol, nombre_rol, descrip_rol){

	resetearformrol();
	
	$("#id_form_rol").attr('action','http://193.147.87.202/procesaform.php');
	
	$("#id_id_rol").attr('readonly','true')
	$("#id_id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(nombre_rol);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(descrip_rol);


	
	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_rol);

	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

//Función ajax con promesas
function rolDELETEAjaxPromesa(){

	crearformoculto('id_form_rol','');
	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_rol").serialize(),
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

async function DELETErolajax() {
	
	var idioma = getCookie('lang');

	await rolDELETEAjaxPromesa()
		.then((res) => {
			devolverrolesajax();
			if (res.code = 'SQL_OK'){
				res.code = 'delete_rol_OK';
			}
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformrol();
}


// crearformSEARCHrol() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionrol.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_rol en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHrol(){

	// reseteo el formulario
	resetearformrol();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_rol").on('submit', search_rol);
	
	// pongo el campo de id_rol editable y le asocio la funcion para el onblur
	$("#id_id_rol").attr('readonly', false);
	$("#id_id_rol").blur(comprobar_id_rol_search);
	$("#id_id_rol").val('');

	// pongo el campo de nombre_rol editable y le asocio la funcion para el onblur
	$("#id_nombre_rol").attr('readonly',false)
	$("#id_nombre_rol").blur(comprobar_nombre_rol_search);
	$("#id_nombre_rol").val('');

	// pongo el campo de descrip_rol editable y le asocio la funcion para el onblur
	$("#id_descrip_rol").attr('readonly',false)
	$("#id_descrip_rol").blur(comprobar_descrip_rol_search);
	$("#id_descrip_rol").val('');


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_rol").on('click', search_rol);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}



//Función ajax con promesas
function rolSEARCHAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rol');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','id_rol', document.getElementById('id_id_rol').value);
	insertacampo('form_generico','nombre_rol', document.getElementById('id_nombre_rol').value);
	insertacampo('form_generico','descrip_rol', document.getElementById('id_descrip_rol').value);

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


async function SEARCHrolajax() {
	
	var idioma = getCookie('lang');
	
	await rolSEARCHAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_rol_OK';	}
			getListRoles(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}

function crearformSHOWCURRENTrol(id_rol, nombre_rol, descrip_rol){

	// reseteo el formulario
	resetearformrol();
	
	$("#id_id_rol").attr('readonly','true')
	$("#id_id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(nombre_rol);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(descrip_rol);
	
	$("#id_caja_formulario_rol").attr('style', 'display: block');
	
}



//Función ajax con promesas
function devolverrolesAjaxPromesa(){

	crearformoculto('form_devolver_roles','');
	insertacampo('form_devolver_roles','controlador', 'rol');
	insertacampo('form_devolver_roles','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_devolver_roles").serialize(),
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

async function devolverrolesajax() {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			getListRoles(res.resource);
					
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang();
		});

		document.getElementById('form_devolver_roles').remove();
}

//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// rol: valor para colocar por defecto en el select
//
async function pintarselectrolesAjax(deshabilitado = false, convacio = false, rol=null) {
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			let rol_select = crearselect(convacio,'id_id_rol','id_rol', 'id_rol', 'nombre_rol', res.resource, rol);
			$("#caja_select_rol").append(rol_select);
			if (deshabilitado){
				$("#id_id_rol:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
            alert(res.rescode);
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_roles').remove();
}



function getListRoles(listaroles){
	
	document.getElementById('id_datosroles').innerHTML= '';

	for (let rol of listaroles){

		datosfila = "'"+rol.id_rol+"',"+"'"+rol.nombre_rol+"',"+"'"+rol.descrip_rol+"'";

		lineatabla = '<tr><td>'+rol['id_rol']+'</td><td>'+rol['nombre_rol']+'</td><td>'+rol['descrip_rol']+"</td>";

		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosroles").append(lineatabla);
		
	
	}

}
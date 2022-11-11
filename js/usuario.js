// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_usuario_add() {
	alert('entro en comprobar_form_usuario_add');

	if (comprobar_dni() && comprobar_usuario() && comprobar_id_rol()) {
		return true;
	}
	else {
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_usuario_search() {
	alert('entro en comprobar_form_usuario_search');

	if (comprobar_dni_search() && comprobar_usuario_search() && comprobar_id_rol_search()) {
		return true;
	}
	else {
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_usuario() {

	if (!size_minimo('id_usuario', 3)) {
		mensajeKO('id_usuario', 'usuario_corto_ko');
		return false;
	}
	if (!size_maximo('id_usuario', 45)) {
		mensajeKO('id_usuario', 'usuario_largo_ko');
		return false;
	}
	if (!letras_sin_acento_y_numeros('id_usuario')) {
		mensajeKO('id_usuario', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

// comprobar_usuario_search()
// funcion de validación de formato de usuario en search
function comprobar_usuario_search() {

	if(document.getElementById('id_usuario').value == ''){
		mensajeOK('id_usuario');
		return true;
	}
	if (!size_maximo('id_usuario', 45)) {
		mensajeKO('id_usuario', 'usuario_largo_ko');
		return false;
	}
	if (!letras_sin_acento_y_numeros('id_usuario')) {
		mensajeKO('id_usuario', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_usuario');
	return true;
}



// comprobar_id_rol()
// funcion de validacion del formato de id_rol en acciones que no son search
//al solo poder buscar por el select no hay fallo
function comprobar_id_rol() {
	return true;
}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search() {
	return true;
}



// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_usuario() {

	if (comprobar_form_usuario_add()) {
		ADDusuarioajax();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_usuario() {

	if (comprobar_form_usuario_add()) {
		EDITusuarioajax();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_usuario() {

	DELETEusuarioajax();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_usuario() {

	if (comprobar_form_usuario_search()) {
		SEARCHusuarioajax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformusuario() {

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly', false);
	$("#id_dni").val('');
	$("#id_dni").on('blur', false);
	document.getElementById('id_dni').style.borderColor = "#676774";

	$("#id_usuario").attr('readonly', false);
	$("#id_usuario").val('');
	$("#id_usuario").on('blur', false);
	document.getElementById('id_usuario').style.borderColor = "#676774";

	$("#id_id_rol").attr('readonly', false);
	$("#id_id_rol").val('');
	$("#id_id_rol").on('blur', false);

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

function crearformADDusuario() {

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

	// se invoca una función que crea el select de roles desde datos del back
	pintarselectrolesAjax(false, false, '');


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_usuario;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_usuario').style.display = 'block';

}

//Función ajax con promesas
function usuarioADDAjaxPromesa() {

	crearformoculto('id_form_usuario', '');
	insertacampo('id_form_usuario', 'controlador', 'usuario');
	insertacampo('id_form_usuario', 'action', 'ADD');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function ADDusuarioajax() {

	var idioma = getCookie('lang');

	await usuarioADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'add_usuario_OK';
			}
			devolverusuariosajax();
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	resetearformusuario();
}


// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITusuario(dni, usuario, rol) {

	// resetear al formulario
	resetearformusuario();

	// se crea el action del formulario 
	$("#id_form_usuario").attr('action', 'javascript:EDITusuarioajax()');

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly', true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_usuario").on('blur', comprobar_usuario);
	$("#id_usuario").val(usuario);

	// se invoca una funcion para pintar el select de roles con datos del back
	pintarselectrolesAjax(false, false, rol);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
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
function usuarioEDITAjaxPromesa() {

	crearformoculto('id_form_usuario', '');
	insertacampo('id_form_usuario', 'controlador', 'usuario');
	insertacampo('id_form_usuario', 'action', 'EDIT');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function EDITusuarioajax() {

	var idioma = getCookie('lang');

	await usuarioEDITAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK') {
				res.code = 'edit_usuario_OK';
			}
			devolverusuariosajax();
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	resetearformusuario();
}


// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEusuario(dni, usuario, rol) {

	resetearformusuario();

	$("#id_form_usuario").attr('action', 'javascript:DELETEusuarioajax()');

	$("#id_dni").attr('readonly', 'true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly', 'true')
	$("#id_usuario").val(usuario);

	// se invoca una función para crear el select de los roles
	pintarselectrolesAjax(true, false, rol);

	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/delete4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', delete_usuario);

	setLang();

	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

//Función ajax con promesas
function usuarioDELETEAjaxPromesa() {

	crearformoculto('id_form_usuario', '');
	insertacampo('id_form_usuario', 'controlador', 'usuario');
	insertacampo('id_form_usuario', 'action', 'DELETE');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_usuario").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function DELETEusuarioajax() {

	var idioma = getCookie('lang');

	await usuarioDELETEAjaxPromesa()
		.then((res) => {

			if (res.ok) {
				res.code = 'delete_usuario_OK';
			}
			mensajeactionOK(res.code);
			devolverusuariosajax();
			
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

	setLang();
	resetearformusuario();
}


function crearformSEARCHusuario() {

	// reseteo el formulario
	resetearformusuario();

	// creo la accion para el formulario y el onsubmit
	$("#id_form_usuario").attr('action', 'javascript:SEARCHusuarioajax()');
	$("#id_form_usuario").on('submit', search_usuario);

	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);
	$("#id_dni").val('');

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly', false)
	$("#id_usuario").blur(comprobar_usuario_search);
	$("#id_usuario").val('');

	// se llama a una funcion para crear el select de roles
	pintarselectrolesAjax(false, true, '');


	// se coloca una imagen para la accion de buscar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/search4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', search_usuario);

	setLang();
	// se muestra el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: block');

}

//Función ajax con promesas
function usuarioSEARCHAjaxPromesa() {
	

	crearformoculto('form_generico', '');
	insertacampo('form_generico', 'controlador', 'usuario');
	insertacampo('form_generico', 'action', 'SEARCH');
	insertacampo('form_generico','dni', document.getElementById('id_dni').value);
	insertacampo('form_generico','usuario', document.getElementById('id_usuario').value);
	alert(document.getElementById('id_id_rol').value);
	insertacampo('form_generico','id_rol', document.getElementById('id_id_rol').value);

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
				mensajeHTTPFAIL(jqXHR.status);
			});
	});
}

async function SEARCHusuarioajax() {

	var idioma = getCookie('lang');

	await usuarioSEARCHAjaxPromesa()
		.then((res) => {

			if (res.ok == true) {
				mensajeactionOK('search_usuario_OK');
			}
			//mensajeOK(res.code);
			getListUsuarios(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});
	document.getElementById('form_generico').remove();
	setLang();
	resetearformusuario();
}

function crearformSHOWCURRENTusuario(dni, usuario, rol) {

	// reseteo el formulario
	resetearformusuario();

	$("#id_dni").attr('readonly', 'true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly', 'true')
	$("#id_usuario").val(usuario);

	pintarselectrolesAjax(true, false, rol);

	// se coloca una imagen para la accion de cerrar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/detail4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', cerrarSHOWCURRENT);

	setLang();
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

function cerrarSHOWCURRENT() {
	$("#id_caja_formulario_usuario").attr('style', 'display: none');
	$("#id_imagen_enviar_form").attr('style', 'display: none');
}

//Función ajax con promesas
function devolverusuariosAjaxPromesa() {

	crearformoculto('form_devolver_usuarios', '');
	insertacampo('form_devolver_usuarios', 'controlador', 'usuario');
	insertacampo('form_devolver_usuarios', 'action', 'SEARCH');

	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_devolver_usuarios").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else {
				resolve(res);
			}
		})
			.fail(function (jqXHR) {
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

	document.getElementById('form_devolver_usuarios').remove();
}

function getListUsuarios(listausuarios) {

	document.getElementById('id_datosusuarios').innerHTML= '';


	for (let usuario of listausuarios) {

		datosfila = "'" + usuario.dni + "'," + "'" + usuario.usuario + "'," + "'" + usuario.id_rol.id_rol + "'";

		lineatabla = '<tr><td>' + usuario['dni'] + '</td><td>' + usuario['usuario'] + '</td><td>' + usuario['id_rol'].nombre_rol + "</td>";
		
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITusuario(' + datosfila + ');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEusuario(' + datosfila + ');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTusuario(' + datosfila + ')";></td>';

		lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

		$("#id_datosusuarios").append(lineatabla);
	}

}
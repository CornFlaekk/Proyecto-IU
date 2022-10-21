function comprobar_form_login(){
	if (comprobar_usuario() && comprobar_contrasena()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}

function comprobar_usuario(){

	if (!size_minimo('id_usuario',3)){
		mensajeKO('id_usuario', 'usuario_corto_ko');
		return false;
	}
	if (!size_maximo('id_usuario',15)){
		mensajeKO('id_usuario', 'usuario_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_usuario');
	return true;

}

function comprobar_contrasena(){

	if (!size_minimo('id_contrasena',3)){
		mensajeKO('id_contrasena', 'contrasena_corto_ko');
		return false;
	}
	if (!size_maximo('id_contrasena',15)){
		mensajeKO('id_contrasena', 'contrasena_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_contrasena')){
		mensajeKO('id_contrasena', 'contrasena_formato_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;

}

//Función ajax con promesas
function loginAjaxPromesa(){

	insertacampo('id_form_login','controlador', 'AUTH');
	insertacampo('id_form_login','action', 'LOGIN');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_login").serialize(),
		}).done(res => {
			if (res.code != 'LOGIN_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeFAIL(jqXHR.status);
		});
	});
}

async function login() {
	
	var idioma = getCookie('lang');

	await loginAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('usuarioSistema', document.getElementById("id_usuario").value);
			window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}




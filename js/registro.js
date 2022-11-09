// comprobar_contrasena()
// funcion de validación de formato de contrasena en acciones que no sean search
function comprobar_contrasena() {

	if (!size_minimo('id_contrasena', 3)) {
		mensajeKO('id_contrasena', 'contrasena_corto_ko');
		return false;
	}
	if (!size_maximo('id_contrasena', 45)) {
		mensajeKO('id_contrasena', 'contrasena_largo_ko');
		return false;
	}
	if (!caracteres_contrasena('id_contrasena')) {
		mensajeKO('id_contrasena', 'contrasena_formato_ko');
		return false;
	}

	mensajeOK('id_contrasena');
	return true;

}


function comprobar_form_registro(){
    if(comprobar_nombre_persona() && comprobar_apellidos_persona() && comprobar_fechaNacimiento_persona() &&
    comprobar_direccion_persona() && comprobar_telefono_persona() && comprobar_email_persona() && 
    comprobar_foto_persona() && comprobar_usuario() && comprobar_contrasena()){
        return true;
    }else{
        return false;
    }
}


//Función ajax con promesas
function registroAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'AUTH');
	insertacampo('form_generico','action', 'REGISTRAR');
	insertacampo('form_generico','dni', document.getElementById('id_dni').value);
	insertacampo('form_generico','nombre_persona', document.getElementById('id_nombre_persona').value);
	insertacampo('form_generico','apellidos_persona', document.getElementById('id_apellidos_persona').value);
	insertacampo('form_generico','fechaNacimiento_persona', document.getElementById('id_fechaNacimiento_persona').value);
	insertacampo('form_generico','direccion_persona', document.getElementById('id_direccion_persona').value);
	insertacampo('form_generico','telefono_persona', document.getElementById('id_telefono_persona').value);
	insertacampo('form_generico','email_persona', document.getElementById('id_email_persona').value);
    insertacampo('form_generico','foto_persona', document.getElementById('id_foto_persona').value);
    insertacampo('form_generico','usuario', document.getElementById('id_usuario').value);
    encriptarpassword();
    insertacampo('form_generico','contrasena', document.getElementById('id_contrasena').value);

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				//alert('res.ok != true');
				reject(res);
			}
			else{
				//alert('res.ok == true');
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


async function registro() {
	
	var idioma = getCookie('lang');
	
	await registroAjaxPromesa()
		.then((res) => {

			//getListPersonas(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			//alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}
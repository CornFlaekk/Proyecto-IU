function comprobar_contrasena_igual(){
    c1 = document.getElementById('id_contrasena').value;
    c2 = document.getElementById('id_contrasena_repetir').value;

    if(c1 != c2){
        mensajeKO('id_contrasena_repetir','contrasena_igual_ko');
        return false;
    }else{
        mensajeOK('id_contrasena_repetir');
        return true;
    }
}

function comprobar_form_cambiar_contrasena(){
    if(comprobar_contrasena_igual() && comprobar_contrasena_igual()){

    }
}

function cargar_usuario(){
    user = getCookie('usuarioSistema');
    $("#id_nombre_usuario").append(": "+user); //= "Usuario :"+getCookie('usuarioSistema');;
}


//Función ajax con promesas
function SEARCHusuarioDNIajaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'usuario');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','usuario', getCookie('usuarioSistema'));

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				alert('res.ok != true');
				reject(res);
			}
			else{
				alert('res.ok == true');
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


async function SEARCHpersonaDNIajax() {
	
	var idioma = getCookie('lang');
	
	await SEARCHusuarioDNIajaxPromesa()
		.then((res) => {
			
			getUsuarioDNI(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}



function getUsuarioDNI(listausuarios) {

    dni = listausuarios[0].dni;
    document.getElementById('id_dni').textContent = dni;
	
	

}


//Función ajax con promesas
function cambiarContrasenaAjaxPromesa(){

    encriptarpassword();

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'AUTH');
	insertacampo('form_generico','action', 'CAMBIAR_CONTRASENA');
	insertacampo('form_generico','dni', document.getElementById('id_dni').textContent);
    insertacampo('form_generico','contrasena', document.getElementById('id_contrasena').value);

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				alert('res.ok != true');
				reject(res);
			}
			else{
				alert('res.ok == true');
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


async function cambiarContrasenaAjax() {

    await SEARCHpersonaDNIajax();

	var idioma = getCookie('lang');
	
	await cambiarContrasenaAjaxPromesa()
		.then((res) => {
			
			//getUsuarioDNI(res.resource);
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			alert('.catch');
			mensajeFAIL(res.code);
		});
        
		setLang();
		document.getElementById('form_generico').remove();
}
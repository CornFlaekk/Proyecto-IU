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

async function devolverrolesAjax() {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			return(res.resource);
					
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
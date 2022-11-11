
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
			$("#caja_select_accion").append(accion_select);
			if (deshabilitado){
				$("#id_id_accion:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
            alert(res.rescode);
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_acciones').remove();
}
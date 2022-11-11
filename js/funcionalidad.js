
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
			$("#caja_select_funcionalidad").append(funcionalidad_select);
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
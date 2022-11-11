//Función ajax con promesas
function devolverrolesAjaxRafPromesa() {

    crearformoculto('form_devolver_roles', '');
    insertacampo('form_devolver_roles', 'controlador', 'rol');
    insertacampo('form_devolver_roles', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_devolver_roles").serialize(),
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

async function devolverrolesajaxRaf() {

    var idioma = getCookie('lang');

    await devolverrolesAjaxRafPromesa()
        .then((res) => {
            crearTablaRafHead(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_devolver_roles').remove();
}


let roles;

function crearTablaRafHead(data) {

    roles = data;
    basic = '<th class="funcionalidad"></th><th class="accion"></th>';
    $("#id_datostabla").append(basic);
    setLang();
    for (let rol of data) {
        tableheader = "<th>" + rol.nombre_rol + "</th>"

        $("#id_datostabla").append(tableheader);
    }
    $("#id_datostabla").append("</tr>");

}



function crearTablaRaf() {
    document.getElementById('id_datostabla').innerHTML = "";
    document.getElementById('id_datosraf').innerHTML = "";
    devolverrolesajaxRaf();
    devolverRafAjax();
}




//Función ajax con promesas
function devolverRafAjaxPromesa() {

    crearformoculto('form_devolver_raf', '');
    insertacampo('form_devolver_raf', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_devolver_raf', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_devolver_raf").serialize(),
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

async function devolverRafAjax() {

    var idioma = getCookie('lang');

    await devolverRafAjaxPromesa()
        .then((res) => {
            crearTablaRafBody(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_devolver_raf').remove();
}


function crearTablaRafBody(raf) {

    let funPrev = raf[0].id_funcionalidad.id_funcionalidad;
    let accPrev = raf[0].id_accion.id_accion;

    let j = 0;  //contador raf
    let i = 0;  //contador roles

    let datosfila = '<tr><td>' + raf[0].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[0].id_accion.nombre_accion + '</td>';

    while (i < raf.length) {

        funAct = raf[i].id_funcionalidad.id_funcionalidad;
        accAct = raf[i].id_accion.id_accion;

        if (funAct == funPrev && accAct == accPrev) {
            if (raf[i].id_rol.id_rol == roles[j].id_rol) {
                //Se añade en caso de que exista para ese rol
                texto = '<td>' + '<img src="./images/mas_gris.png" width="20" height="20">' + '<b>&emsp;</b>' + '<img src="./images/menos.png" width="20" height="20" onclick="DELETERafAjax(' + raf[i].id_rol.id_rol + ',' + raf[i].id_accion.id_accion + ',' + raf[i].id_funcionalidad.id_funcionalidad + ');">' + '</td>';
                datosfila += texto;
                j++;
                i++;
            } else {
                texto = '<td>' + '<img src="./images/mas.png" width="20" height="20" onclick="ADDRafAjax(' + roles[j].id_rol + ',' + raf[i-1].id_accion.id_accion + ',' + raf[i-1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menos_gris.png" width="20" height="20">' + '</td>';
                datosfila += texto;
                j++;
            }
        } else {
            for (j; j < roles.length; j++) {
                texto = '<td>' + '<img src="./images/mas.png" width="20" height="20" onclick="ADDRafAjax(' + roles[j].id_rol + ',' + raf[i-1].id_accion.id_accion + ',' + raf[i-1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menos_gris.png" width="20" height="20">' + '</td>';
                datosfila += texto;
            }
            datosfila += '</tr>';
            $("#id_datosraf").append(datosfila)
            datosfila = '<tr><td>' + raf[i].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[i].id_accion.nombre_accion + '</td>';
            j = 0;
            funPrev = raf[i].id_funcionalidad.id_funcionalidad;
            accPrev = raf[i].id_accion.id_accion;
        }
    }

    while (j < roles.length) {
        textos = '<td>' + '<img src="./images/mas.png" width="20" height="20" onclick="ADDRa'+'fAjax(' + roles[j].id_rol + ',' + raf[i-1].id_accion.id_accion + ',' + raf[i-1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menos_gris.png" width="20" height="20">' + '</td>';
        datosfila += textos;
        j++;
    }
    datosfila += '</tr>';
    $("#id_datosraf").append(datosfila);
    //datosfila = '<tr><td>' + raf[i].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[i].id_accion.nombre_accion + '</td>';
}




//Función ajax con promesas
function ADDRafAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'ADD');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);

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
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function ADDRafAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await ADDRafAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'add_rolaccionfuncionalidad_OK';
            }
            crearTablaRaf();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();

}






function DELETERafAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'DELETE');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);
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
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function DELETERafAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await DELETERafAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'delete_rolaccionfuncionalidad_OK';
            }
            crearTablaRaf();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();
}




function resetearformraf() {

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

    selectviejorol = document.getElementById('id_id_funcionalidad');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_funcionalidad').removeChild(selectviejorol);
	}

    selectviejorol = document.getElementById('id_id_accion');
	if (!(selectviejorol === null)) {
		document.getElementById('caja_select_accion').removeChild(selectviejorol);
	}

	$("#id_id_rol").attr('readonly', false);
	$("#id_id_rol").val('');
	$("#id_id_rol").on('blur', false);

    $("#id_id_funcionalidad").attr('readonly', false);
	$("#id_id_funcionalidad").val('');
	$("#id_id_funcionalidad").on('blur', false);

    $("#id_id_accion").attr('readonly', false);
	$("#id_id_accion").val('');
	$("#id_id_accion").on('blur', false);

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




function crearformSEARCHraf() {

	// resetear el formulario
	resetearformraf();

	// se rellena el action del formulario
	document.getElementById('id_form_raf').action = 'javascript:crearTablaRafSEARCH()';

	// se invoca una función que crea el select de roles desde datos del back
	pintarselectrolesAjax(false, true, '');
    pintarselectfuncionalidadesAjax(false, true, '');
    pintarselectaccionesAjax(false, true, '');


	// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/search4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_search';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = crearTablaRafSEARCH;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_raf').style.display = 'block';

}



//Función ajax con promesas
function SEARCHrafAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rolaccionfuncionalidad');
	insertacampo('form_generico','action', 'SEARCH');
	insertacampo('form_generico','id_rol', document.getElementById('id_id_rol').value);
	insertacampo('form_generico','id_funcionalidad', document.getElementById('id_id_funcionalidad').value);
	insertacampo('form_generico','id_accion', document.getElementById('id_id_accion').value);

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


async function SEARCHRafAjax() {
	
	var idioma = getCookie('lang');
	
	await SEARCHrafAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'search_rolaccionfuncionalidad_OK';	}
            crearTablaRafBody(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});
		setLang();
		document.getElementById('form_generico').remove();
}



function crearTablaRafSEARCH() {
    document.getElementById('id_datostabla').innerHTML = '';
    document.getElementById('id_datosraf').innerHTML = '';
    devolverrolesajaxRaf();
    SEARCHRafAjax();
}
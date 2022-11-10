//Función ajax con promesas
function devolverrolesAjaxPromesa() {

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

async function devolverrolesajax() {

    var idioma = getCookie('lang');

    await devolverrolesAjaxPromesa()
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
    devolverrolesajax();
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
                texto = '<td>' + '<img src="./images/mas.png" width="20" height="20" onclick="ADDRafAjax(' + raf[i].id_rol.id_rol + ',' + raf[i].id_accion.id_accion + ',' + raf[i].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menos_gris.png" width="20" height="20">' + '</td>';
                datosfila += texto;
                j++;
            }
        } else {
            for (j; j < roles.length; j++) {
                texto = '<td>' + '<img src="./images/mas.png" width="20" height="20" onclick="ADDRafAjax(' + raf[i].id_rol.id_rol + ',' + raf[i].id_accion.id_accion + ',' + raf[i].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menos_gris.png" width="20" height="20">' + '</td>';
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
                alert('res.ok != true');
                reject(res);
            }
            else {
                alert('res.ok == true');
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
            alert('.catch');
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
                alert('res.ok != true');
                reject(res);
            }
            else {
                alert('res.ok == true');
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
            alert('.catch');
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();
}


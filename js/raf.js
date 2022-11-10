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

    //alert(roles.length);

    let funPrev = raf[0].id_funcionalidad.id_funcionalidad;
    let accPrev = raf[0].id_accion.id_accion;
    //alert(funPrev);

    let j = 0;  //contador raf
    let i = 0;  //contador roles

    let datosfila = '<tr><td>' + raf[0].id_funcionalidad.nombre_funcionalidad + '</td><td>' + raf[0].id_accion.nombre_accion + '</td>';
    while (i < raf.length) {
        funAct = raf[i].id_funcionalidad.id_funcionalidad;
        accAct = raf[i].id_accion.id_accion;



        if (funAct == funPrev && accAct == accPrev) {

            if (raf[i].id_rol.id_rol == roles[j].id_rol) {

                //Se añade en caso de que exista para ese rol
                texto = '<td>' + '+' + '</td>';
                datosfila += texto;
                j++;
                i++;

            } else {

                texto = '<td>' + '-' + '</td>';
                datosfila += texto;
                j++;

            }
        } else {

            for(j; j<roles.length; j++){
                texto = '<td>' + '-' + '</td>';
                datosfila += texto;
            }

            datosfila += '</td>';
            $("#id_datosraf").append(datosfila)
            datosfila = '<td>';
            j = 0;z

        }




    }


}










function getListRoles(listaroles) {

    document.getElementById('id_datosroles').innerHTML = '';

    for (let rol of listaroles) {

        datosfila = "'" + rol.id_rol + "'," + "'" + rol.nombre_rol + "'," + "'" + rol.descrip_rol + "'";

        lineatabla = '<tr><td>' + rol['id_rol'] + '</td><td>' + rol['nombre_rol'] + '</td><td>' + rol['descrip_rol'] + "</td>";

        botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol(' + datosfila + ');" width="50" height="50"></td>';
        botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol(' + datosfila + ');"></td>';
        botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol(' + datosfila + ')";></td>';

        lineatabla += botonedit + botondelete + botonshowcurrent + "</tr>";

        $("#id_datosroles").append(lineatabla);


    }

}
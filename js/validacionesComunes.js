function deleteAllCookies() {
	var cookies = document.cookie.split(";");
    	for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        setCookie(name, '');
    }
 }

function desconectar(){
	deleteAllCookies();
	window.location.href = "login.html";
}

function incluircabecera(){

	$("#id_caja_superior").html = "";
	let incluir = '<img class=\"foto_ES\" src=\"./images/ES.png\" height=\"30\" width=\"30\" onclick=\"setLang(\'ES\');\">'+
    	'<img class=\"foto_EN\" src=\"./images/EN.png\" height=\"30\" width=\"30\" onclick=\"setLang(\'EN\');\">'+
    	'<img class=\"foto_GA\" src=\"./images/GA.png\" height=\"30\" width=\"30\"  onclick=\"setLang(\'GA\');\"><br>'
	
		if ((getCookie('usuarioSistema')==null) || (getCookie('usuarioSistema') =='')){

			cadena = /login.html|registro.html*/;
			encontrado = cadena.test(window.location.href);
			if(!encontrado){
			window.location.href = "login.html";
			}
			
		}else{
			let temp = "Usuario :"+getCookie('usuarioSistema');
			incluir += temp+"<br><a href='cambiarcontrasena.html'>Cambiar Contraseña</a><b>"+'&emsp;'+"</b><a href='javascript:desconectar();'>Desconectar</a>";
		}

    $("#id_caja_superior").append(incluir);

}


function ponerinvisibleerror(){
	document.getElementById('id_caja_error').style.display='none';
}

function ponerinvisibleformusuario(){
	document.getElementById('id_caja_formulario_usuario').style.display = 'none';
}

function ponerinvisibleformpersona(){
	document.getElementById('id_caja_formulario_persona').style.display = 'none';
}
function ponerinvisibleformrol(){
	document.getElementById('id_caja_formulario_rol').style.display = 'none';
}

function ponerinvisibleformaccion(){
	document.getElementById('id_caja_formulario_accion').style.display = 'none';
}

function ponerinvisibleformfuncionalidad(){
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'none';
}

function ponerinvisibleformraf(){
	document.getElementById('id_caja_formulario_raf').style.display = 'none';
}


function mensajeKO(idElemento, codigoerror){

	cerrarMensajeError();
	document.getElementById('id_texterror').classList.add(codigoerror); 
	document.getElementById('id_caja_error').style.display = 'block';
	document.getElementById(idElemento).style.borderColor = "#E97777";
	setLang();
}

function mensajeOK(idElemento){

	document.getElementById('id_texterror').innerHTML = '';
	document.getElementById('id_caja_error').style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#90C8AC";
	setLang();
}

/**Función para crear un formulario oculto*/
function crearformoculto(name, action){

	if ( $("#" + name).length == 0) {

		var formu = document.createElement('form');
		document.body.appendChild(formu);
	    formu.name = name;
	    formu.action = action; 
	    formu.id = name;  
	    formu.style.display = "none";

	} 
}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(idform, name, value){
	
	formulario = document.getElementById(idform);
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

function mensajeactionOK(codigo){

	cerrarMensajeError();
	document.getElementById('id_texterror').classList.add(codigo);
	//document.getElementById('id_caja_error').style.borderColor = "#00e600"; 
	document.getElementById('id_caja_error').style = "color: #90C8AC";
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

function mensajeFAIL(codigoerror){

	cerrarMensajeError();
	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById('id_texterror').classList.add(codigoerror);
	document.getElementById('id_caja_error').style = "color: #E97777";
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

/**Función para mostrar mensaje de error cuando fallan las peticiones ajax*/
function mensajeHTTPFAIL(status){
	var idioma = getCookie('lang');
	
	if (status === 500) {
	mensajeFAIL("MENSAJE_ERROR_INTERNO");
	} else if (status === 403) {
	mensajeFAIL("ERROR_AUTENTICACION");
	} else if (status === 0){
	mensajeFAIL("ERR_CONNECTION_REFUSED");
	}

	setLang();
}



function cerrarMensajeError(){

	if(document.getElementById('id_texterror').classList.length > 0 ){
		document.getElementById('id_texterror').classList.remove(document.getElementById('id_texterror').classList);
		
	}
	//document.getElementById('id_texterror').classList.remove(document.getElementById('id_texterror').classList);
	//codigoanterior = document.getElementById('id_texterror').classList;
	//document.getElementById('id_texterror').classList.remove(codigoanterior);
	document.getElementById('id_caja_error').style.display = 'none';
}

function size_minimo(idElemento,longitudminima){

	let elemento;
	elemento = document.getElementById(idElemento).value;
	if (elemento.length < longitudminima){
		return false;
	}
	else{
		return true;
	}
}

function size_maximo(idElemento,longitudmaxima){
	
	elemento = document.getElementById(idElemento).value;
	if (elemento.length > longitudmaxima){
		return false;
	}
	else{
		return true;
	}
}

function letras_sin_acento(idElemento){

	caracteres = /^[a-zA-Z]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function letras_sin_acento_y_numeros(idElemento){

	caracteres = /^[a-zA-Z0-9]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function letras_con_acento_guion_y_espacio(idElemento){

	caracteres = /^[a-zA-Z0-9\s\-]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_dni_search(idElemento){

	letra_antes_num = /[A-Za-z][0-9]/;
	mas_una_letra = /[A-Za-z].*[A-Za-z]/;
	mas_8_num = /[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*/;
	caracteres_permit = /^[A-aZa-z0-9]{0,9}$/;

	if((letra_antes_num.test(document.getElementById(idElemento).value) || 
			mas_una_letra.test(document.getElementById(idElemento).value) || 
			mas_8_num.test(document.getElementById(idElemento).value) || 
			!(caracteres_permit.test(document.getElementById(idElemento).value))) == true)
	{
		return false;
	}else{
		return true;
	}
}


function numeros_y_barra_diagonal(idElemento){

	caracteres = /^[0-9\-]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_telefono(idElemento){

	caracteres = /^[6-9][0-9]{8}$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function solo_numeros(idElemento){

	caracteres = /^[0-9]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function caracteres_email(idElemento){

	caracteres = /^[a-z0-9\-\_\.\'\@]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_email(idElemento){

	caracteres = /^[a-z0-9\-\_\.\']+[a-z0-9\-\_\']\@[a-z0-9\-\_\'][a-z0-9\-\_\.\']*.[a-z0-9\-\_\.\']+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function caracteres_foto(idElemento){

	caracteres = /^[a-zA-Z0-9\.\/\\]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_foto(idElemento){

	caracteres = /^[a-zA-Z0-9\\\/\.]+\.(png|jpg)$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}

function expr_direccion(idElemento){

	caracteres = /^[a-zA-Z0-9Á-ÿ\s\/\-\,\'\º\ª]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}


function caracteres_descripcion(idElemento){

	caracteres = /[\=\<\>\$\#\{\}\[\]]/;
	invalido = caracteres.test(document.getElementById(idElemento).value);
	if(invalido){
		return false;
	}
	else{
		return true;
	}
}

function caracteres_contrasena(idElemento){

	caracteres = /^[A-Za-z0-9\-\_]+$/;
	valido = caracteres.test(document.getElementById(idElemento).value);
	if(!valido){
		return false;
	}
	else{
		return true;
	}
}




// crearselect(
//convacio para añadir un elemento vacío o no
// id que va tener el select, 
// name que va tener el select, 
// atributo del array datos que utilizamos para el value de cada option, 
// atributo del array datos que vamos utilizar para el text de cada option, 
// array de datos con las filas de la entidad, 
// value que queremos que este como selected en el select)
// devuelve un elemento select
function crearselect(convacio, id, name, valueoption, textoption, datos, itemseleccionado) {

	

	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;

	if (convacio) {
		option_rol = document.createElement("option");
		option_rol.value = '';
		option_rol.text = '';
		option_rol.selected = true;
		rol_select.appendChild(option_rol);
	}

	for (let i = 0; i < datos.length; i++) {
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado) {
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}

	return rol_select;

}



function encriptarpassword(){
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}
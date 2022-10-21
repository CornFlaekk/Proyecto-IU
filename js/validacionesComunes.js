function ponerinvisibleerror(){
	document.getElementById('id_caja_error').style.display='none';
}

function ponerinvisibleformusuario(){
	document.getElementById('id_caja_formulario_usuario').style.display = 'none';
}

function ponerinvisibleformpersona(){
	document.getElementById('id_caja_formulario_persona').style.display = 'none';
}

function mensajeKO(idElemento, texto){

	document.getElementById('id_texterror').innerHTML = texto;
	document.getElementById('id_caja_error').style.display = 'block';
	document.getElementById(idElemento).style.borderColor = "#ff0000";

}

function mensajeOK(idElemento){

	document.getElementById('id_texterror').innerHTML = '';
	document.getElementById('id_caja_error').style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#00e600";

}

function cerrarMensajeError(){
	document.getElementById('id_texterror').classList.remove;
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

function encriptarpassword(){
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}
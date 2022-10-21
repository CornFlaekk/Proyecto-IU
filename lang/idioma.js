var traduccion;

/**Si no se envía idioma el idioma por defecto es ES*/
function setLang(lang =''){

    if (lang=='') {
        if (getCookie('lang') != '') {
          lang = getCookie('lang');
        } else { 	
        	lang= 'ES';
        }

    }

    setCookie('lang', lang, 1);

    switch(lang) {
    	case 'ES' :
    	   traduccion=arrayES;
    	break;
    	case 'EN' :
    	   traduccion=arrayEN;
    	break;
    	case 'GA' :
    	   traduccion=arrayGA;
    	break;
    	default:
    	   traduccion=arrayES;
    	break;
    }

   //**Se recorre el array de traducciones buscando coincidencias una por una*/
   for(var clave in traduccion) {

 		var elementos = document.getElementsByClassName(clave);
        //var etiquetas =document.getElementsByTagName('LABEL');
        var etiquetas =document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                }            
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                 if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave];
                }
            } 
        } 

        for (var i = 0; i < options.length; i++) { 
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
	}
}

/*Función para establecer el valor de la cookie*/
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

}

/*Función para obtener el valor de la cookie*/
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return null;

}

/**Función para cambiar el idioma*/
function cambiarLang(lang) {

    setCookie('lang',lang,5);
    window.location.reload(true);

}
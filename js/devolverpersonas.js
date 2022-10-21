// devolverpersonas()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad persona

// devolverpersonas()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad persona

function devolverpersonas(){

	datospersonas = new Array();
	controlrol = 0;
	dnibase = '53820748';
	numeropersonas = 5;
	
	for (let i=0;i<numeropersonas;i++){
		
		persona = new Array();
		dnibase = String(Number(dnibase)+Number(23));
		persona['dni'] = dnibase + 'N';
		persona['nombre_persona'] = 'nombre persona'+i;
		persona['apellidos_persona'] = 'apellidos persona'+i;
		persona['fechaNacimiento_persona'] = '01/'+'01/'+String(Number(2000)+Number(i));
		persona['direccion_persona'] = 'Calle de la persona Nº '+i+' 32004 Ourense';
		persona['telefono_persona'] = 988387000+i;
		persona['email_persona'] = 'persona'+i+'@alumnos.uvigo.es';
		persona['foto_persona'] = './fotos/foto'+i+'.png';

		datospersonas[i] = persona;
	}

	return datospersonas;

}

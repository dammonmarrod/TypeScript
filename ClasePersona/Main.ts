import { Direccion} from './Direccion';
import {Mail} from './Mail';
import {Telefono} from './Telefono'
import {Persona} from './Persona';
 

	//Introduzco los datos para cada persona
	var direccion1: Direccion = new Direccion("Nieves Altas", 48, 7, 'C', "28560", "Madrid","Madrid");
	var mail1: Mail = new Mail("gmail", "holaCaracola@gmail.com");
	var telefono1: Telefono = new Telefono("Movil", 689526489);
	
	var direccion2: Direccion = new Direccion("Virgen del sagracio", 56, 2, 'A', "28569", "Madrid","Madrid");
	var mail2: Mail = new Mail("gmail", "miperfil@gmail.com");
	var telefono2: Telefono = new Telefono("Movil", 678956123);

	var direccion3: Direccion = new Direccion("Santa Eugenia", 96, 8, 'B', "28375", "Madrid","Madrid");
	var mail3: Mail  = new Mail("hotmail", "andando@hotmail.com");
	var telefono3: Telefono = new Telefono("Fijo", 652956321);

	//Creo un array donde guardo los datos de las 3 personas
	var personas:Persona[]=[
			new Persona("Maria", "Gonzalez", "25654865R", 56,"22/12/1998", "Mujer", "Rojo", "Llamar a las 14 para concertar cita.", direccion1 , mail1, telefono1),
			new Persona ("Antonia", "Fernandez","56278452J", 60,  "15/03/1998",  "Mujer", "Naranja", "Llamar a las 10. Recordar ir al dentista.",direccion2, mail2, telefono2),
			new Persona("Luisa", "Martin","75123469T", 60,  "02/06/1990", "Mujer", "Verde",  "No llamar", direccion3, mail3, telefono3) ];
	
		


	//Muestro el array de objetos con los datos de las personas
	mostrarPersonas();
	


	var dniBuscar:string="25654865R";
	modificarPersona (dniBuscar);

	function modificarPersona(dniBuscar:string) {
		console.log("Entrando en función modificarPersona");
		
		for (var i= 0; i < personas.length; i++)
		{
			if(isEqual(personas[i].getDni(),dniBuscar)){
				console.log(personas[i].getNombre() + " cuyo dni es: " + personas[i].getDni() + " es el correcto: "+ isEqual(personas[i].getDni(),dniBuscar));		
				personas[i].getDireccion().setCalle("Calle la concha");;
				personas[i].getDireccion().setNumero(356);
				personas[i].getDireccion().setLetra('j');
				personas[i].getDireccion().setPiso(12);
				personas[i].getDireccion().setCodigoPostal("30054");;
				personas[i].getDireccion().setPoblacion("Murcia");
				personas[i].getDireccion().setProvincia("Murcia");
				personas[i].getTelefono().setTipo("fijo");	
				personas[i].getTelefono().setNumero(+34918532438);
				personas[i].getMail().setTipo("miempresa.es");
				personas[i].getMail().setDireccionEmail("d41+sfadsf@miempresa.es");	
			}	
		}
	}

	function isEqual(str1:string, str2:string){
		return str1.toUpperCase() === str2.toUpperCase(); //son iguales
	}//Is equal

	//Muestro el array de objetos con los datos cambiados
	mostrarPersonas();

	function mostrarPersonas(){//función para mostrar las personas que contiene el array de objetos
		var i:number=0;
		for(i=0; i<personas.length; i++){
			console.log(personas[i]);
	}
		
}

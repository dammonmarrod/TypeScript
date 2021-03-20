export class Direccion {
	//Declaramos los atributos privados
	private calle: string;
	private numero: number; 
	private piso: number; 
	private letra: string;
	private codigoPostal: string; //Hay que validarlo por eso se recoge como un string
	private poblacion: string;
	private provincia: string;

	//Declaramos el constructor que introduzca todos los datos
	constructor(
		calle: string,
		numero: number,
		piso: number,
		letra: string,
		codigoPostal: string,
		poblacion: string,
		provincia: string
	) {
		this.calle = calle;
		this.numero = numero;
		this.piso = piso;
		this.letra = letra;
		this.codigoPostal = codigoPostal;
		this.poblacion = poblacion;
		this.provincia = provincia;
	}

	//Declaramos los getters y los setters

	public getCalle(): string {
		console.log('Obtengo la calle');
		return this.calle;
	}

	public setCalle(value: string) {
		//console.log('Modifico la calle');
		this.calle = value;
	}

	public getNumero(): number {
		console.log('Obtengo el numero de la calle');
		return this.numero;
	}

	public setNumero(value: number) {
		//console.log('Modifico el numero de la calle');
		this.numero = value;
	}

	public getPiso(): number {
		console.log('Obtengo el piso de la calle');
		return this.piso;
	}

	public setPiso(value: number) {
		//console.log('Modifico el piso de la calle');
		this.piso = value;
	}

	public getLetra(): string {
		console.log('Obtengo la letra de la calle');
		return this.letra;
	}

	public setLetra(value: string) {
		//console.log('Modifico la letra de la calle');
		this.letra = value;
	}

	public getCodigoPostal(): string {
		console.log('Obtengo el codigo postal de la calle');
		return this.codigoPostal;
	}

	public setCodigoPostal(value: string) {
		//Todos los códigos postales son 5 dígitos y que su valor es mayor a 01000 y menor a 52999
        if(value.length == 5 && parseInt(value) >= 1000 && parseInt(value) <= 52999)
        {
			console.log("____________________________________________");
            console.log("Modifico el codigo postal");
			console.log("____________________________________________");
            this.codigoPostal=value;
        }
        else{
			console.log("Error, no se ha modificado el dato:");
			console.log("____________________________________________");
            console.log("Codigo Postal no valido, no se ha insertado el nuevo código postal");
			console.log("____________________________________________");
         }
	}

	public getPoblacion(): string {
		console.log('Obtengo la poblacion');
		return this.poblacion;
	}

	public setPoblacion(value: string) {
		//console.log('Modifico la poblacion');
		this.poblacion = value;
	}

	public getProvincia(): string {
		console.log('Obtengo la provincia');
		return this.provincia;
	}

	public setProvincia(value: string) {
		
		//Verificar que la provincia introducida se corresponde con el código postal
        var cpostal=this.getCodigoPostal();//Obtengo el codigo postal guardado para esta persona
        console.log("El codigo postal guardado es: " + cpostal);
		var nombreProvincia:string="";
		
        function obtenerProvincia(cp:string){
            var cp_provincias:any = {//Objeto con todas las provincias
              1: "\u00C1lava", 2: "Albacete", 3: "Alicante", 4: "Almer\u00EDa", 5: "\u00C1vila", 6: "Badajoz", 7: "Baleares", 8: "Barcelona", 9: "Burgos", 10: "C\u00E1ceres", 11: "C\u00E1diz", 12:  "Castell\u00F3n", 13: "Ciudad Real", 14: "C\u00F3rdoba", 15: "Coruña", 16: "Cuenca", 17: "Gerona", 18: "Granada", 19: "Guadalajara", 20: "Guip\u00FAzcoa",  21: "Huelva", 22: "Huesca", 23: "Ja\u00E9n", 24: "Le\u00F3n", 25: "L\u00E9rida",
              26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "M\u00E1laga", 30: "Murcia", 31: "Navarra", 32: "Orense", 33: "Asturias", 34: "Palencia", 35: "Las Palmas", 36: "Pontevedra", 37: "Salamanca", 38: "Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia",
              41: "Sevilla", 42: "Soria", 43: "Tarragona", 44: "Teruel", 45: "Toledo", 46: "Valencia", 47: "Valladolid", 48: "Vizcaya", 49: "Zamora", 50: "Zaragoza", 51: "Ceuta", 52: "Melilla"
            };

			console.log(cp.substring(0,2));
			nombreProvincia=cp_provincias[parseInt(cp.substring(0,2))];//devuelve el nombre de la provincia
			console.log("la provincia correspondiente al codigo postal guardado es: " + nombreProvincia);
		}
		obtenerProvincia(cpostal);

		if(isEqual(value,nombreProvincia)){//Si el nombre de la provincia según el codigo postal introducido coindice con el valor que queremos guardar 
			console.log("____________________________________________");
			console.log("Modifico la provincia");
			console.log("____________________________________________");
            this.provincia=value;
		}else{
			console.log("Error, no se ha modificado el dato.");
			console.log("____________________________________________");
			console.log("Verifica que tu codigo postal corresponde con la provincia indicada.");
			console.log("____________________________________________");
		}

		



		function isEqual(str1:string, str2:string){
			return str1.toUpperCase() === str2.toUpperCase(); //son iguales
		   
	  	}//Is equal
    }

} //fin  class Direccion

import{Direccion} from './Direccion';
import{Mail} from './Mail'
import{Telefono} from './Telefono'

export class Persona{

    //Declaramos los atributos privados
    private nombre:string;
    private apellidos:string;
    private dni:string; 
    
    private edad:number;
    private cumpleanos:string;
    private sexo:string;
    private colorFavorito:string;
    private notas:string;

    private direccion: Direccion;
	private mail:Mail;
	private telefono:Telefono;
	

    constructor(nombre:string, apellidos:string, dni:string, edad:number, cumpleanos:string, sexo:string, colorFavorito:string, notas:string, direccion:Direccion,mail:Mail,telefono:Telefono){
        this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
        this.edad = edad;
		this.cumpleanos = cumpleanos;
		this.colorFavorito = colorFavorito;
		this.sexo = sexo;
        this.notas = notas;
		this.direccion = direccion;
		this.mail = mail;
		this.telefono = telefono;
		
    }

    public getNombre():string {
		console.log("Obtengo el nombre");
		return this.nombre;
	}

	public setNombre(value:string) {
		console.log("Modifico el nombre");
		this.nombre = value;
	}

	public getApellidos():string {
		console.log("Obtento los apellidos");
		return this.apellidos;
	}

	public setApellidos(value:string) {
		console.log("Modifico los apellidos");
		this.apellidos = value;
	}

	public getEdad():number {
		console.log("Obtengo la edad");
		return this.edad;
	}

	public setEdad(value:number) {
		console.log("Modifico la edad");
		this.edad = value;
	}

	public getDni():string {
		//console.log("Obtengo el dni");
		return this.dni;
	}

	public setDni(value:string) {
		console.log("Modifico el dni");
		this.dni = value;
	}

	public getCumpleanos():string {
		console.log("Obtengo el cumpleaños");
		return this.cumpleanos;
	}

	public setCumpleanos(value:string) {
		console.log("Modifico el cumpleaños");
		this.cumpleanos = value;
	}

	public getColorFavorito():string {
		console.log("Obtengo el color favorito");
		return this.colorFavorito;
	}

	public setColorFavorito(value:string) {
		console.log("Modifico el color favorito");
		this.colorFavorito = value;
	}

	public getSexo():string {
		console.log("Obtengo el sexo de la persona");
		return this.sexo;
	}

	public setSexo(value:string) {
		console.log("Modifico el sexo de la persona");
		this.sexo = value;
	}

	public getDireccion():Direccion {
		//console.log("Obtengo la dirección de la persona");
		return this.direccion;
	}

	public setDireccion(value:Direccion) {
		console.log("Modifico la dirección de la persona");
		this.direccion = value;
	}

	public getMail():Mail {
		console.log("Obtengo el mail de la persona");
		return this.mail;
	}

	public setMail(value:Mail) {
		console.log("Modifico el mail de la persona");
		this.mail = value;
	}

	public getTelefono():Telefono {
		console.log("Obtengo el telefono de la persona");
		return this.telefono;
	}

	public setTelefono(value:Telefono) {
		console.log("Modifico el telefono de la persona");
		this.telefono = value;
	}

	public getNotas():string {
		console.log("Obtengo las notas de la persona");
		return this.notas;
	}

	public setNotas(value:string) {
		console.log("Modifico las notas de la persona");
		this.notas = value;
	}
	

}
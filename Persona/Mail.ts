export class Mail{

    //Declaramos los atributos privados
    private tipo:string;//guardara que gestor de correo electronico es
    private direccionEmail:string;//validamos el email

    //Declaramos el constructor
    constructor(tipo:string, direccionEmail:string){
        this.tipo=tipo;
        this.direccionEmail=direccionEmail;
    }

    //Declaramos los setters y los getters
    public getTipo():string{
        //console.log("Obtengo el tipo de email");
        return this.tipo;
    }
    public setTipo(value:string){
       // console.log("Modifico el tipo de email");
        this.tipo=value;
    }

    public getDireccionEmail():string{
        //console.log("Obtengo la dirección de email");
        return this.direccionEmail;
    }

    public setDireccionEmail(value:string){
      
        function findEmailProvider(address:string) {
            const lastIndex = address.lastIndexOf('@');
            return address.slice(lastIndex + 1, address.length);
        }

        var gestorEmail=findEmailProvider(value);
        console.log("El gestor de correo electrónico es: " + gestorEmail);
        var tipoGuardado=this.getTipo();
      
        if(isEqual(gestorEmail,tipoGuardado)){
            //Si la dirección de email introducida, coincide con el gestor de correo que ya tenemos guardaro
            console.log("____________________________________________");
            console.log("Modifico la dirección de email");
            console.log("____________________________________________");
            this.direccionEmail=value;
       }else{
            console.log("Error, no se ha modificado el dato.");
            console.log("____________________________________________");
            console.log("El gestor de correo electrónico no corresponde con la dirección introducida, debe introducidor el mismo gestor a partir de @");
            console.log("____________________________________________")
        }

        function isEqual(str1:string, str2:string){
            return str1.toUpperCase() === str2.toUpperCase(); //son iguales 
        }//Is equal
    }

}
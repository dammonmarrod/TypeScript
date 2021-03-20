export class Telefono{

    //Declaramos los atributos privados
    private tipo:string; //movil o fijo
    private numero:number;//solo numero 8 digitos y si es fijo empieza por 9 u 8 y si es movil por 6 o por 7

    //Declaramos el constructor
    constructor(tipo:string, numero:number){
        this.tipo=tipo;
        this.numero=numero;
    }


    public getTipo():string{
        //console.log("Obtengo el tipo de telefono");
        return this.tipo;
    }

    public setTipo(value:string){
            //Verificar que ha introducido solo o movil o fijo
            var esMovil="movil";
            var esFijo="fijo";
            
            if(isEqual(esMovil, value)){//Si el valor introducido es igual a movil
                console.log("____________________________________________");
                console.log("El valor de tipo se ha modificado por \"movil\".");
                console.log("____________________________________________");
                this.tipo=value;
            }
            else if(isEqual(esFijo, value)){//Si el valor introducido es igual a fijo
                //Es fijo
                console.log("____________________________________________");
                console.log("El valor de tipo se ha modificado por \"fijo\".");
                console.log("____________________________________________");
                this.tipo=value;

            }
            else{
                //No ha puesto ni fijo ni movil
                console.log("Error:");
                console.log("____________________________________________");
                console.log("El valor introducido solo puede ser movil o fijo. No se ha modificado el dato.");
                console.log("____________________________________________");
            }

            function isEqual(str1:string, str2:string) {
                return str1.toUpperCase() === str2.toUpperCase(); //son iguales
            } //Is equal
    }


    public getNumero():number{
        console.log("Obtengo el numero de telefono");
        return this.numero;
    }

    
    public setNumero(value:number){
        //Patron verficiar que es un fijo correcto
        var patronFijo:any= /^(\+34|0034|34)?[89]\d{8}$/;
        var comproTefijo = patronFijo.test(value);
        console.log(comproTefijo);
        //Patron que Verificar que es un movil correcto
        var patronMovil:any = /^(\+34|0034|34)?[67]\d{8}$/;
        var comproTemovil = patronMovil.test(value);
        console.log(comproTemovil);
        
        var tipoMovilGuardado=this.getTipo();

        if(isEqual(tipoMovilGuardado,"fijo") && comproTefijo){//Si es de tipo fijo e introducimos un telefno fijo correcto
                console.log("____________________________________________");
                console.log("El número de telefóno fijo se ha modificado correctamente");
                console.log("____________________________________________");
                this.numero=value;
        }
        else{//Si no es valído el telefono fijo
            if(isEqual(tipoMovilGuardado,"movil") && comproTemovil){//Si es de tipo movil e introducimos un telefno movil correcto
            console.log("____________________________________________");
            console.log("El número de telefóno movil se ha modificado correctamente");
            console.log("____________________________________________");
            this.numero=value;
            }else{//No ha introducido ni un telefono fino ni movil correcto
                console.log("Error, no se ha modificado el dato.");
                console.log("____________________________________________");
                console.log("Verifica que el tipo de número y el telefono introducido son correctos.");
                console.log("____________________________________________");
            } 
        }


        function isEqual(str1:string, str2:string) {
            return str1.toUpperCase() === str2.toUpperCase(); //son iguales
        } //Is equal  

    }
}
import { AbstractControl } from "@angular/forms";

export class RutValidator{

    static validate(control: AbstractControl): { [key: string]: any} | null {

        if(!control.value){
            return null;
        }

        if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(control.value)){
            return { invalidFormat: {valid: false, value: control.value }};
        }

        //Limpiar puntos
        const valor = control.value.replace('.', ''); 
        const tmp = valor.split('-');
        let digitoVerificador = tmp[1].toLowerCase();
        const cuerpo = tmp[0];

        // Calcula el digito verificador
        let suma = 0;
        let multiplo = 2;

        for(let i = 1; i <= cuerpo.length; i++){

            //Obtener el producto del multiplo
            const index = multiplo * valor.charAt( cuerpo.length - i);
            suma = suma + index;

            if (multiplo < 7) {
                multiplo = multiplo + 1;
            }else{
                multiplo = 2;
            }
        }

        const digitoEsperado = 11 - (suma % 11);

        //casos especiales

        digitoVerificador = digitoVerificador === 'k' ? '10' : digitoVerificador;
        digitoVerificador = digitoVerificador === '0' ? '11' : digitoVerificador;

        if(digitoEsperado.toString() !== digitoVerificador ) {

            return { invalidFormat: { valid: false, value: control.value }};
        }

        // Si todo esta ok
        return null;
    }
}


export interface RequesterInterface {

    tipoPersona: string;
    run: string;
    razonSocial?: string;
    cup?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    genero?: string;
    domicilio: Domicilio
}

interface Domicilio{

    region: string;
    provincia: string;
    comuna: string;
    domicilio: string;
    telefono: string;
    correo: string;
    correoConfirmacion: string;
}